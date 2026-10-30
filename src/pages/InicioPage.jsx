import { Link } from 'react-router-dom'
import EstadoVista from '../components/EstadoVista.jsx'
import useFetch from '../hooks/useFetch.js'
import { useGuardados } from '../context/GuardadosContext.jsx'
import { useTema } from '../context/TemaContext.jsx'
import { API_URL } from '../utils/constantes.js'

function InicioPage() {
  const { data, loading, error } = useFetch(API_URL)
  const { guardados } = useGuardados()
  const { tema, alternarTema } = useTema()

  const totalPersonajes = data?.info?.count

  return (
    <main className="contenedor pagina">
      <section className="hero">
        <p className="encabezado__etiqueta">Rick and Morty API</p>
        <h1 className="encabezado__titulo">Rick Explorer</h1>
        <p className="encabezado__texto">
          Explora el multiverso: busca personajes, guarda tus favoritos y escribe tus notas.
        </p>
        <div className="hero__acciones">
          <Link className="btn" to="/personajes">
            Explorar personajes
          </Link>
          <button type="button" className="btn btn--suave" onClick={alternarTema}>
            Tema: {tema}
          </button>
        </div>
      </section>

      <section className="estadisticas">
        {error ? (
          <EstadoVista tipo="error" mensaje="No se pudieron cargar las estadísticas." />
        ) : (
          <div className="panel dato">
            <strong>{loading ? '…' : (totalPersonajes ?? '—')}</strong>
            <span>personajes en la API</span>
          </div>
        )}
        <div className="panel dato">
          <strong>{guardados.length}</strong>
          <span>personajes guardados</span>
        </div>
      </section>
    </main>
  )
}

export default InicioPage
