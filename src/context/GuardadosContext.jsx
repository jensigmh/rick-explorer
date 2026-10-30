import { createContext, useCallback, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { STORAGE_GUARDADOS } from '../utils/constantes.js'

const GuardadosContext = createContext(null)

export function GuardadosProvider({ children }) {
  const [guardados, setGuardados] = useLocalStorage(STORAGE_GUARDADOS, [])

  // Agregar (spread) o quitar (filter)
  const alternarGuardado = useCallback(
    (personaje) => {
      setGuardados((prev) =>
        prev.some((g) => g.id === personaje.id)
          ? prev.filter((g) => g.id !== personaje.id)
          : [...prev, { ...personaje, nota: '' }]
      )
    },
    [setGuardados]
  )

  // Crear con nota (o actualizar la nota si ya estaba guardado)
  const guardarConNota = useCallback(
    (personaje, nota) => {
      setGuardados((prev) =>
        prev.some((g) => g.id === personaje.id)
          ? prev.map((g) => (g.id === personaje.id ? { ...g, nota } : g))
          : [...prev, { ...personaje, nota }]
      )
    },
    [setGuardados]
  )

  // Editar con map
  const editarNota = useCallback(
    (id, nota) => {
      setGuardados((prev) => prev.map((g) => (g.id === id ? { ...g, nota } : g)))
    },
    [setGuardados]
  )

  // Eliminar con filter
  const quitarGuardado = useCallback(
    (id) => {
      setGuardados((prev) => prev.filter((g) => g.id !== id))
    },
    [setGuardados]
  )

  const valor = useMemo(
    () => ({ guardados, alternarGuardado, guardarConNota, editarNota, quitarGuardado }),
    [guardados, alternarGuardado, guardarConNota, editarNota, quitarGuardado]
  )

  return <GuardadosContext.Provider value={valor}>{children}</GuardadosContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGuardados() {
  const contexto = useContext(GuardadosContext)
  if (!contexto) throw new Error('useGuardados debe usarse dentro de <GuardadosProvider>')
  return contexto
}
