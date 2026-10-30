function BotonTema({ tema, onCambiar }) {
  return (
    <button
      type="button"
      className="btn btn--borde"
      onClick={onCambiar}
      aria-label="Cambiar tema claro u oscuro"
    >
      {tema === 'oscuro' ? '☀️' : '🌙'} Tema
    </button>
  )
}

export default BotonTema
