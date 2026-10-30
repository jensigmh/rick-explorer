import { Link, NavLink } from 'react-router-dom'
import BotonTema from './BotonTema.jsx'

function Navbar({tema, onCambiarTema }) {
  const enlaces = [
    { to: '/', texto: 'Inicio', end: true },
    { to: '/personajes', texto: 'Personajes' },
    { to: '/guardados', texto: 'Guardados' },
    { to: '/acerca', texto: 'Acerca' },
  ]

  return (
    <header className="navbar">
      <div className="contenedor navbar__interior">
        <Link to="/" className="navbar__logo" aria-label="Ir al inicio">
  <img src="/rick.png" alt="" />
</Link>
        
        <nav className="navbar__links" aria-label="Principal">
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.to}
              to={enlace.to}
              end={enlace.end}
              className={({ isActive }) => (isActive ? 'navbar__link active' : 'navbar__link')}
            >
              {enlace.texto}
            </NavLink>
          ))}
        </nav>

        <BotonTema tema={tema} onCambiar={onCambiarTema} />
      </div>
    </header>
  )
}

export default Navbar
