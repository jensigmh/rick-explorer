const MENSAJES = {
  cargando: 'Cargando…',
  error: 'Ocurrió un error.',
  vacio: 'Sin resultados.',
}

function EstadoVista({ tipo, mensaje }) {
  return (
    <p className={`estado estado--${tipo}`} role={tipo === 'error' ? 'alert' : 'status'}>
      {mensaje ?? MENSAJES[tipo]}
    </p>
  )
}

export default EstadoVista