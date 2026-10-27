import { useEffect, useState } from 'react'
import { FaSquareCheck } from 'react-icons/fa6'
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'
import { useFetch } from './hooks/useFetch'
import { useLocalStorage } from './hooks/useLocalStorage'
import {
  FILTERS,
  addTodo,
  countPending,
  createTodo,
  editTodo,
  filterTodos,
  removeTodo,
  toggleTodo,
} from './utils/todos'

const STORAGE_KEY = 'todos'
const SEED_URL = `${import.meta.env.BASE_URL}tareas-ejemplo.json`

function App() {
  const [todos, setTodos] = useLocalStorage(STORAGE_KEY, [])
  const [filter, setFilter] = useState(FILTERS.ALL)

  // Primera visita: no hay nada guardado, así que pedimos tareas de ejemplo.
  const [isFirstVisit] = useState(
    () => window.localStorage.getItem(STORAGE_KEY) === null,
  )
  const { data: seed } = useFetch(isFirstVisit ? SEED_URL : null)

  useEffect(() => {
    if (seed) setTodos(seed)
  }, [seed, setTodos])

  const handleAdd = (text) => setTodos((current) => addTodo(current, createTodo(text)))
  const handleToggle = (id) => setTodos((current) => toggleTodo(current, id))
  const handleEdit = (id, text) => setTodos((current) => editTodo(current, id, text))
  const handleClearAll = () => {
    if (window.confirm('¿Seguro que quieres eliminar todas las tareas?')) setTodos([])
  }
  const handleDelete = (id) => setTodos((current) => removeTodo(current, id))

  const visibleTodos = filterTodos(todos, filter)
  const pending = countPending(todos)

  return (
    <main className="app">
      <header className="app__header">
        <h1>
          <FaSquareCheck aria-hidden="true" /> Mi Lista de Tareas
        </h1>
        <p className="app__counter">
          {pending === 0
            ? 'Todo al día'
            : `${pending} ${pending === 1 ? 'pendiente' : 'pendientes'}`}
        </p>
      </header>

      <div className="layout">
        <div className="card card--list">
          <TodoList
            todos={visibleTodos}
            total={todos.length}
            filter={filter}
            onFilterChange={setFilter}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onClearAll={handleClearAll}
          />
        </div>

        <div className="card card--form">
          <Form onAdd={handleAdd} />
        </div>
      </div>
    </main>
  )
}

export default App
