import { Moon, Sun } from 'lucide-react'

function BotonTema({ tema, onCambiar }) {
  const esOscuro = tema === 'oscuro'
  const etiqueta = esOscuro ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'

  return (
    <button
      type="button"
      className="boton-tema"
      onClick={onCambiar}
      aria-label={etiqueta}
      title={etiqueta}
    >
      {esOscuro ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  )
}

export default BotonTema