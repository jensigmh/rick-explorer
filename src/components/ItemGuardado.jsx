import FormularioNota from './FormularioNota.jsx'

function ItemGuardado({ item, onEditarNota, onQuitar }) {
  return (
    <article className="guardado panel">
      <img className="guardado__img" src={item.imagen} alt={item.nombre} />
      <div className="guardado__cuerpo">
        <h3 className="guardado__nombre">{item.nombre}</h3>
        <p className="tarjeta__dato">
          {item.estado} · {item.especie}
        </p>
        <FormularioNota
          notaInicial={item.nota}
          textoBoton="Guardar nota"
          onGuardar={(nota) => onEditarNota(item.id, nota)}
        />
      </div>
      <button type="button" className="btn btn--borde" onClick={() => onQuitar(item.id)}>
        Quitar
      </button>
    </article>
  )
}

export default ItemGuardado