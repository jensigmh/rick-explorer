import { createContext, useContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { STORAGE_TEMA } from '../utils/constantes.js'

const TemaContext = createContext(null)

export function TemaProvider({ children }) {
  const [tema, setTema] = useLocalStorage(STORAGE_TEMA, 'claro')

  // Refleja el tema en <html data-tema="..."> para que el CSS cambie los colores
  useEffect(() => {
    document.documentElement.dataset.tema = tema
  }, [tema])

  const alternarTema = () => {
    setTema((prev) => (prev === 'claro' ? 'oscuro' : 'claro'))
  }

  return <TemaContext.Provider value={{ tema, alternarTema }}>{children}</TemaContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTema() {
  const contexto = useContext(TemaContext)
  if (!contexto) throw new Error('useTema debe usarse dentro de <TemaProvider>')
  return contexto
}