import { configureStore } from '@reduxjs/toolkit'
import guardadosReducer from './guardadosSlice.js'
import { STORAGE_GUARDADOS } from '../utils/constantes.js'

export const store = configureStore({
  reducer: { guardados: guardadosReducer },
})

// Persistencia: cada cambio del store se guarda en localStorage
store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_GUARDADOS, JSON.stringify(store.getState().guardados))
  } catch {
    // Sin acceso a localStorage: la app sigue funcionando
  }
})