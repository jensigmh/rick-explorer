import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_GUARDADOS } from '../utils/constantes.js'

function cargarInicial() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_GUARDADOS)) ?? []
  } catch {
    return []
  }
}

const guardadosSlice = createSlice({
  name: 'guardados',
  initialState: cargarInicial(),
  reducers: {
    // Redux Toolkit usa Immer: aquí "parece" mutación, pero produce estado nuevo
    alternarGuardado(state, action) {
      const indice = state.findIndex((g) => g.id === action.payload.id)
      if (indice >= 0) state.splice(indice, 1)
      else state.push({ ...action.payload, nota: '' })
    },
    guardarConNota(state, action) {
      const { personaje, nota } = action.payload
      const existente = state.find((g) => g.id === personaje.id)
      if (existente) existente.nota = nota
      else state.push({ ...personaje, nota })
    },
    editarNota(state, action) {
      const { id, nota } = action.payload
      const existente = state.find((g) => g.id === id)
      if (existente) existente.nota = nota
    },
    quitarGuardado(state, action) {
      return state.filter((g) => g.id !== action.payload)
    },
  },
})

export const { alternarGuardado, guardarConNota, editarNota, quitarGuardado } =
  guardadosSlice.actions
export default guardadosSlice.reducer