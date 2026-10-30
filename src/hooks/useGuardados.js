import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  alternarGuardado as alternarAccion,
  editarNota as editarNotaAccion,
  guardarConNota as guardarConNotaAccion,
  quitarGuardado as quitarAccion,
} from '../store/guardadosSlice.js'

function useGuardados() {
  const dispatch = useDispatch()
  const guardados = useSelector((state) => state.guardados)

  const alternarGuardado = useCallback((personaje) => dispatch(alternarAccion(personaje)), [dispatch])
  const guardarConNota = useCallback(
    (personaje, nota) => dispatch(guardarConNotaAccion({ personaje, nota })),
    [dispatch]
  )
  const editarNota = useCallback((id, nota) => dispatch(editarNotaAccion({ id, nota })), [dispatch])
  const quitarGuardado = useCallback((id) => dispatch(quitarAccion(id)), [dispatch])

  return useMemo(
    () => ({ guardados, alternarGuardado, guardarConNota, editarNota, quitarGuardado }),
    [guardados, alternarGuardado, guardarConNota, editarNota, quitarGuardado]
  )
}

export default useGuardados
