import { Link } from 'react-router-dom'
import EstadoVista from '../components/EstadoVista.jsx'
import useFetch from '../hooks/useFetch.js'
import useGuardados from '../hooks/useGuardados.js'
import { useTema } from '../context/TemaContext.jsx'
import { API_URL } from '../utils/constantes.js'
import { useMemo } from 'react'
import { adaptarLista } from '../utils/adaptar.js'

function InicioPage() {
  const { data, loading, error } = useFetch(API_URL)
  const { personajes } = useMemo(() => adaptarLista(data), [data])
  const reunidos = personajes.slice(0, 6)
  const { tema, alternarTema } = useTema()
  const totalPersonajes = data?.info?.count

  return (
    <main className="contenedor pagina">
      <section className="hero">
        <h1 className="encabezado__titulo">Rick Explorer</h1>
      
        <div className="hero__acciones">
          <Link className="btn" to="/personajes">
            Explorar personajes
          </Link>
          
        </div>
      </section>

      <section className="estadisticas">
        {error ? (
          <EstadoVista tipo="error" mensaje="No se pudieron cargar las estadísticas." />
        ) : (
          <div className="dato">
            <strong>{loading ? '…' : (totalPersonajes ?? '—')}</strong>
            <span>personajes en la API</span>
          </div>
        )}
        
      </section>

      <section className="collage" aria-label="Personajes de la serie">
  {reunidos.map((p) => (
    <img key={p.id} className="collage__img" src={p.imagen} alt={p.nombre} />
  ))}
</section>
    </main>
  )
}

export default InicioPage
