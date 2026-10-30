function Buscador({ valor, onCambio }) {
  return (
    <div>
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
    
      </div>
    </div>
  )
}

export default Buscador