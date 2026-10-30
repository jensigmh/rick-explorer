function FiltroEstado({ opciones, activo, onCambiar }) {
  return (
    <div className="filtros" role="group" aria-label="Filtrar por estado">
      {opciones.map((opcion) => (
        <button
          key={opcion.valor}
          type="button"
          className="chip"
          aria-pressed={activo === opcion.valor}
          onClick={() => onCambiar(opcion.valor)}
        >
          {opcion.texto}
        </button>
      ))}
    </div>
  )
}

export default FiltroEstado
