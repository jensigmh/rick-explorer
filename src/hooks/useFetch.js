import { useEffect, useState } from 'react'

function useFetch(url) {
  const [resultado, setResultado] = useState({ url: null, data: null, error: null })

  useEffect(() => {
    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          const err = new Error(`Error ${res.status} al cargar los datos`)
          err.status = res.status
          throw err
        }
        return res.json()
      })
      .then((data) => setResultado({ url, data, error: null }))
      .catch((err) => {
        if (err.name === 'AbortError') return
        const error = err.status ? err : new Error('No se pudo conectar con la API')
        setResultado({ url, data: null, error })
      })

    // Limpieza: si la URL cambia o el componente se desmonta, cancela la petición
    return () => controller.abort()
  }, [url])

  const loading = resultado.url !== url

  return {
    data: loading ? null : resultado.data,
    loading,
    error: loading ? null : resultado.error,
  }
}

export default useFetch
