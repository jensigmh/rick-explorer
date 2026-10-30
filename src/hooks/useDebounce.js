import { useEffect, useState } from 'react'

function useDebounce(valor, retrasoMs = 400) {
  const [valorRetrasado, setValorRetrasado] = useState(valor)

  useEffect(() => {
    const temporizador = setTimeout(() => setValorRetrasado(valor), retrasoMs)
    return () => clearTimeout(temporizador)
  }, [valor, retrasoMs])

  return valorRetrasado
}

export default useDebounce
