import EncabezadoPagina from '../components/EncabezadoPagina.jsx'
import { useTema } from '../context/TemaContext.jsx'

function AcercaPage() {
  const { tema } = useTema()

  return (
    <main className="contenedor pagina">
      <EncabezadoPagina
        titulo="Acerca de"
        texto="Rick Explorer es el proyecto integrador final del curso de React."
      />

      <div>
        <p>
          Los datos vienen de{' '}
          <a className="enlace" href="https://rickandmortyapi.com" target="_blank" rel="noreferrer">
            The Rick and Morty API
          </a>
          . Tus guardados y tu tema se almacenan en el navegador (localStorage).
        </p>
        <ul>
          <li>React + Vite</li>
          <li>React Router (rutas, NavLink, ruta dinámica y 404)</li>
          <li>Context API (tema y guardados)</li>
          <li>Custom hooks: useFetch, useLocalStorage y useDebounce</li>
        </ul>
       
      </div>
    </main>
  )
}

export default AcercaPage

