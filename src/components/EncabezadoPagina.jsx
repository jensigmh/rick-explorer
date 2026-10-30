function EncabezadoPagina({ etiqueta, titulo, texto }) {
  return (
    <header className="encabezado">
      <p className="encabezado__etiqueta">{etiqueta}</p>
      <h1 className="encabezado__titulo">{titulo}</h1>
      <p className="encabezado__texto">{texto}</p>
    </header>
  )
}

export default EncabezadoPagina