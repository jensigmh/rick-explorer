import { useMemo, useState } from 'react'
import EncabezadoPagina from '../components/EncabezadoPagina.jsx'
import Buscador from '../components/Buscador.jsx'
import FiltroEstado from '../components/FiltroEstado.jsx'
import ListaPersonajes from '../components/ListaPersonajes.jsx'
import Paginacion from '../components/Paginacion.jsx'
import EstadoVista from '../components/EstadoVista.jsx'
import useFetch from '../hooks/useFetch.js'
import useDebounce from '../hooks/useDebounce.js'
import useGuardados from '../hooks/useGuardados.js'
import { adaptarLista } from '../utils/adaptar.js'
import { API_URL, OPCIONES_ESTADO } from '../utils/constantes.js'

function PersonajesPage() {
  const [busqueda, setBusqueda] = useState('')
  const [estado, setEstado] = useState('todos')
  const [pagina, setPagina] = useState(1)
  const { guardados, alternarGuardado } = useGuardados()

  const busquedaRetrasada = useDebounce(busqueda, 400)

  const params = new URLSearchParams({ page: pagina })
  if (busquedaRetrasada.trim()) params.set('name', busquedaRetrasada.trim())
  if (estado !== 'todos') params.set('status', estado)

  const { data, loading, error } = useFetch(`${API_URL}?${params}`)
  const { personajes, paginas, total } = useMemo(() => adaptarLista(data), [data])

  // La API responde 404 cuando no hay coincidencias: no es un error real
  const errorReal = error && error.status !== 404

  const cambiarBusqueda = (texto) => {
    setBusqueda(texto)
    setPagina(1)
  }

  const cambiarEstado = (valor) => {
    setEstado(valor)
    setPagina(1)
  }

  const idsGuardados = guardados.map((g) => g.id)

  let contenido
  if (loading) {
    contenido = <EstadoVista tipo="cargando" />
  } else if (errorReal) {
    contenido = <EstadoVista tipo="error" mensaje={error.message} />
  } else if (personajes.length === 0) {
    contenido = <EstadoVista tipo="vacio" />
  } else {
    contenido = (
      <>
        <p className="resultados">{total} resultados</p>
        <ListaPersonajes
          personajes={personajes}
          idsGuardados={idsGuardados}
          onToggleGuardado={alternarGuardado}
        />
        <Paginacion pagina={pagina} totalPaginas={paginas} onCambiar={setPagina} />
      </>
    )
  }

  return (
    <main className="contenedor pagina">
      <EncabezadoPagina
        titulo="Personajes"
      />

      <Buscador
        valor={busqueda}
        onCambio={cambiarBusqueda}
      />
      <FiltroEstado opciones={OPCIONES_ESTADO} activo={estado} onCambiar={cambiarEstado} />

      {contenido}
    </main>
  )
}

export default PersonajesPage