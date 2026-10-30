function Buscador({ valor, onCambio, onLimpiar }) {
  return (
    <div className="panel">
      <label className="etiqueta" htmlFor="buscar">
        Buscar personaje
      </label>
      <div className="buscador__fila">
        <input
          id="buscar"
          className="campo"
          type="text"
          placeholder="Ej. Rick o Morty"
          value={valor}
          onChange={(e) => onCambio(e.target.value)}
        />
        <button type="button" className="btn btn--suave" onClick={onLimpiar}>
          Limpiar
        </button>
      </div>
    </div>
  )
}

export default Buscador