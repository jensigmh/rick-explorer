import { memo } from 'react'
import { Link } from 'react-router-dom'

function TarjetaPersonaje({ personaje, guardado, onToggleGuardado }) {
  const { nombre, estado, especie, origen, imagen } = personaje

  return (
    <article className="tarjeta">
      <img className="tarjeta__img" src={imagen} alt={nombre} loading="lazy" />
      <h3 className="tarjeta__nombre">{nombre}</h3>
      <p className="tarjeta__dato">
        {estado} · {especie}
      </p>
      <p className="tarjeta__dato">Origen: {origen}</p>
      <div className="tarjeta__acciones"><Link className="btn" to={`/personajes/${personaje.id}`}>
  Ver detalle
</Link>
      
        <button
          type="button"
          className="estrella"
          aria-pressed={guardado}
          aria-label={guardado ? `Quitar a ${nombre} de guardados` : `Guardar a ${nombre}`}
          onClick={() => onToggleGuardado(personaje)}
        >
          {guardado ? '★' : '☆'}
        </button>
      </div>
    </article>
  )
}

export default memo(TarjetaPersonaje)
