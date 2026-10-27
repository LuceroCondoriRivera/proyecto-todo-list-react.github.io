import { FaListUl, FaTrashCan } from 'react-icons/fa6'
import Filter from '../Filter/Filter'
import Todo from '../Todo/Todo'
import { FILTERS } from '../../utils/todos'

const EMPTY_MESSAGES = {
  [FILTERS.ALL]: 'Todavía no hay tareas. Escribe la primera en el panel de Nueva Tarea.',
  [FILTERS.COMPLETED]: 'Aún no completaste ninguna tarea.',
  [FILTERS.PENDING]: 'No te quedan tareas pendientes.',
}

function TodoList({
  todos,
  total,
  filter,
  onFilterChange,
  onToggle,
  onEdit,
  onDelete,
  onClearAll,
}) {
  return (
    <section className="todo-section">
      <div className="todo-section__header">
        <h2 className="card__title">
          <FaListUl aria-hidden="true" /> Mis Tareas
        </h2>
        <Filter filter={filter} onFilterChange={onFilterChange} />
      </div>

      {todos.length === 0 ? (
        <p className="empty">{EMPTY_MESSAGES[filter]}</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}

      {total > 0 && (
        <button type="button" className="btn btn--outline-danger" onClick={onClearAll}>
          <FaTrashCan aria-hidden="true" />
          <span>Eliminar Todas las Tareas</span>
        </button>
      )}
    </section>
  )
}

export default TodoList
