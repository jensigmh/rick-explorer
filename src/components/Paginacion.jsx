function Paginacion({ pagina, totalPaginas, onCambiar }) {
  return (
    <nav className="paginacion" aria-label="Paginación">
      <button
        type="button"
        className="btn btn--borde"
        disabled={pagina <= 1}
        onClick={() => onCambiar(pagina - 1)}
      >
        ← Anterior
      </button>
      <span>
        Página {pagina} de {totalPaginas}
      </span>
      <button
        type="button"
        className="btn btn--borde"
        disabled={pagina >= totalPaginas}
        onClick={() => onCambiar(pagina + 1)}
      >
        Siguiente →
      </button>
    </nav>
  )
}

export default Paginacion
