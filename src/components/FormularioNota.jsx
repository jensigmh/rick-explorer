import { useId, useState } from 'react'

function FormularioNota({ notaInicial = '', textoBoton, onGuardar }) {
  const idCampo = useId()
  const [nota, setNota] = useState(notaInicial)

  const handleSubmit = (e) => {
    e.preventDefault()
    onGuardar(nota.trim())
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label className="etiqueta" htmlFor={idCampo}>
        Nota personal
      </label>
      <textarea
        id={idCampo}
        className="campo"
        placeholder="Ej. Mi personaje favorito"
        maxLength={200}
        value={nota}
        onChange={(e) => setNota(e.target.value)}
      />
      <button type="submit" className="btn">
        {textoBoton}
      </button>
    </form>
  )
}

export default FormularioNota