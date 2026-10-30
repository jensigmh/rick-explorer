import { Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar.jsx'
import InicioPage from './pages/InicioPage.jsx'
import PersonajesPage from './pages/PersonajesPage.jsx'
import DetallePage from './pages/DetallePage.jsx'
import GuardadosPage from './pages/GuardadosPage.jsx'
import AcercaPage from './pages/AcercaPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { useGuardados } from './context/GuardadosContext.jsx'
import { useTema } from './context/TemaContext.jsx'

function App() {
  const { tema, alternarTema } = useTema()
  const { guardados } = useGuardados()

  return (
    <>
      <Navbar totalGuardados={guardados.length} tema={tema} onCambiarTema={alternarTema} />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/personajes" element={<PersonajesPage />} />
        <Route path="/personajes/:id" element={<DetallePage />} />
        <Route path="/guardados" element={<GuardadosPage />} />
        <Route path="/acerca" element={<AcercaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App