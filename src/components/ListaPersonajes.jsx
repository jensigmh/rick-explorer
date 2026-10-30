import TarjetaPersonaje from './TarjetaPersonaje.jsx'

function ListaPersonajes({ personajes, idsGuardados, onToggleGuardado }) {
  return (
    <ul className="lista">
      {personajes.map((personaje) => (
        <li key={personaje.id}>
          <TarjetaPersonaje
            personaje={personaje}
            guardado={idsGuardados.includes(personaje.id)}
            onToggleGuardado={onToggleGuardado}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListaPersonajes