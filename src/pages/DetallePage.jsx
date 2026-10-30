import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import EncabezadoPagina from '../components/EncabezadoPagina.jsx'
import FormularioNota from '../components/FormularioNota.jsx'
import EstadoVista from '../components/EstadoVista.jsx'
import useFetch from '../hooks/useFetch.js'
import useGuardados from '../hooks/useGuardados.js'
import { adaptarPersonaje } from '../utils/adaptar.js'
import { API_URL } from '../utils/constantes.js'

function DetallePage() {
  const { id } = useParams()
  const { data, loading, error } = useFetch(`${API_URL}/${id}`)
  const { guardados, guardarConNota, quitarGuardado } = useGuardados()

  const personaje = useMemo(() => (data ? adaptarPersonaje(data) : null), [data])

  if (error) {
    const mensaje = error.status === 404 ? 'Este personaje no existe.' : error.message
    return (
      <main className="contenedor pagina">
        <EstadoVista tipo="error" mensaje={mensaje} />
        <Link className="btn btn--suave" to="/personajes">
          ← Volver a personajes
        </Link>
      </main>
    )
  }

  if (loading || !personaje) {
    return (
      <main className="contenedor pagina">
        <EstadoVista tipo="cargando" />
      </main>
    )
  }

  const guardado = guardados.find((g) => g.id === personaje.id)

  return (
    <main className="contenedor pagina">
      <Link className="btn btn--suave" to="/personajes">
        ← Volver
      </Link>

      <div className="detalle">
        <img className="detalle__img" src={personaje.imagen} alt={personaje.nombre} />

        <div>
          <EncabezadoPagina
            etiqueta={personaje.especie}
            titulo={personaje.nombre}
            texto={`${personaje.estado} · ${personaje.genero}`}
          />

          <ul className="detalle__lista">
            <li>
              <strong>Origen:</strong> {personaje.origen}
            </li>
            <li>
              <strong>Ubicación:</strong> {personaje.ubicacion}
            </li>
            <li>
              <strong>Episodios:</strong> {personaje.episodios}
            </li>
          </ul>

          <section className="panel">
            <h2 className="seccion__titulo">{guardado ? 'Tu nota' : 'Guardar con una nota'}</h2>
            <FormularioNota
              key={personaje.id}
              notaInicial={guardado?.nota ?? ''}
              textoBoton={guardado ? 'Actualizar nota' : 'Guardar personaje'}
              onGuardar={(nota) => guardarConNota(personaje, nota)}
            />
            {guardado ? (
              <button
                type="button"
                className="btn btn--borde detalle__quitar"
                onClick={() => quitarGuardado(personaje.id)}
              >
                Quitar de guardados
              </button>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  )
}

export default DetallePage
