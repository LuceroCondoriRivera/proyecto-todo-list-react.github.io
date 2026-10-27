// Funciones puras para manejar la lista de tareas.
// Ninguna modifica el array original: siempre devuelven uno nuevo.

export const FILTERS = {
  ALL: 'todas',
  COMPLETED: 'completadas',
  PENDING: 'incompletas',
}

export const generateId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

export const createTodo = (text, id = generateId()) => ({
  id,
  text: text.trim(),
  completed: false,
})

export const addTodo = (todos, todo) => [...todos, todo]

export const toggleTodo = (todos, id) =>
  todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  )

export const editTodo = (todos, id, text) =>
  todos.map((todo) => (todo.id === id ? { ...todo, text: text.trim() } : todo))

export const removeTodo = (todos, id) => todos.filter((todo) => todo.id !== id)

export const filterTodos = (todos, filter) => {
  switch (filter) {
    case FILTERS.COMPLETED:
      return todos.filter((todo) => todo.completed)
    case FILTERS.PENDING:
      return todos.filter((todo) => !todo.completed)
    default:
      return todos
  }
}

export const countPending = (todos) =>
  todos.filter((todo) => !todo.completed).length
