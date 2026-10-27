import { useState } from 'react'
import { FaCheck, FaFloppyDisk, FaPen, FaTrashCan, FaXmark } from 'react-icons/fa6'

function Todo({ todo, onToggle, onEdit, onDelete }) {
  const { id, text, completed } = todo
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(text)

  const startEditing = () => {
    setDraft(text)
    setIsEditing(true)
  }

  const cancelEditing = () => setIsEditing(false)

  const saveEditing = () => {
    if (draft.trim()) onEdit(id, draft)
    setIsEditing(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') saveEditing()
    if (event.key === 'Escape') cancelEditing()
  }

  return (
    <li className={`todo ${completed ? 'todo--done' : ''}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          aria-label={completed ? `Marcar "${text}" como incompleta` : `Completar "${text}"`}
        />
        <span className="checkbox__box" aria-hidden="true">
          <FaCheck />
        </span>
      </label>

      {isEditing ? (
        <input
          className="todo__edit"
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Editar tarea"
          autoFocus
        />
      ) : (
        <span className="todo__text">{text}</span>
      )}

      <div className="todo__actions">
        {isEditing ? (
          <>
            <button type="button" className="icon-btn icon-btn--save" onClick={saveEditing} aria-label="Guardar cambios">
              <FaFloppyDisk />
            </button>
            <button type="button" className="icon-btn icon-btn--cancel" onClick={cancelEditing} aria-label="Cancelar edición">
              <FaXmark />
            </button>
          </>
        ) : (
          <>
            <button type="button" className="icon-btn icon-btn--edit" onClick={startEditing} aria-label={`Editar "${text}"`}>
              <FaPen />
            </button>
            <button type="button" className="icon-btn icon-btn--delete" onClick={() => onDelete(id)} aria-label={`Eliminar "${text}"`}>
              <FaTrashCan />
            </button>
          </>
        )}
      </div>
    </li>
  )
}

export default Todo
