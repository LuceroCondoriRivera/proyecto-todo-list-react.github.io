import { useState } from 'react'
import { FaCirclePlus, FaPlus } from 'react-icons/fa6'

function Form({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!text.trim()) return
    onAdd(text)
    setText('')
  }

  // Enter agrega la tarea; Shift + Enter hace un salto de línea.
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      event.currentTarget.form.requestSubmit()
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="card__title">
        <FaCirclePlus aria-hidden="true" /> Nueva Tarea
      </h2>

      <label className="form__label" htmlFor="new-todo">
        Descripción de la tarea
      </label>
      <textarea
        id="new-todo"
        className="form__textarea"
        rows={4}
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p className="form__hint">Presiona Enter o haz clic en el botón para agregar</p>

      <button type="submit" className="btn btn--primary">
        <FaPlus aria-hidden="true" />
        <span>Agregar Tarea</span>
      </button>

      <p className="tip">
        <strong>Tip:</strong> Puedes marcar las tareas como completadas, editarlas
        o eliminarlas usando los botones en cada tarea.
      </p>
    </form>
  )
}

export default Form
