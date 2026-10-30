import { Link } from 'react-router-dom'
import EncabezadoPagina from '../components/EncabezadoPagina.jsx'
import ItemGuardado from '../components/ItemGuardado.jsx'
import EstadoVista from '../components/EstadoVista.jsx'
import { useGuardados } from '../context/GuardadosContext.jsx'

function GuardadosPage() {
  const { guardados, editarNota, quitarGuardado } = useGuardados()

  return (
    <main className="contenedor pagina">
      <EncabezadoPagina
        etiqueta="Tu colección"
        titulo="Guardados"
        texto="Tus personajes favoritos y tus notas."
      />

      {guardados.length > 0 ? (
        <ul className="guardados">
          {guardados.map((g) => (
            <li key={g.id}>
              <ItemGuardado item={g} onEditarNota={editarNota} onQuitar={quitarGuardado} />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <EstadoVista tipo="vacio" mensaje="Aún no has guardado personajes." />
          <p className="centrado">
            <Link className="btn" to="/personajes">
              Explorar personajes
            </Link>
          </p>
        </>
      )}
    </main>
  )
}

export default GuardadosPage
