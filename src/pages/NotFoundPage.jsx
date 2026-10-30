import { Link } from 'react-router-dom'
import EncabezadoPagina from '../components/EncabezadoPagina.jsx'

function NotFoundPage() {
  return (
    <main className="contenedor pagina">
      <EncabezadoPagina
        etiqueta="Error 404"
        titulo="Esta dimensión no existe"
        texto="La ruta que buscas no está en el multiverso."
      />
      <Link className="btn" to="/">
        Volver al inicio
      </Link>
    </main>
  )
}

export default NotFoundPage

