import { useEffect, useState } from 'react'

function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave)
      return guardado !== null ? JSON.parse(guardado) : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor))
    } catch {
      // Sin acceso a localStorage (modo privado, cuota llena): la app sigue funcionando
    }
  }, [clave, valor])

  return [valor, setValor]
}

export default useLocalStorage
