import { describe, expect, it } from 'vitest'
import {
  FILTERS,
  addTodo,
  countPending,
  createTodo,
  editTodo,
  filterTodos,
  removeTodo,
  toggleTodo,
} from './todos'

const base = [
  { id: '1', text: 'a', completed: false },
  { id: '2', text: 'b', completed: true },
]

describe('todos utils', () => {
  it('createTodo limpia espacios y arranca incompleta', () => {
    expect(createTodo('  estudiar  ', 'x')).toEqual({
      id: 'x',
      text: 'estudiar',
      completed: false,
    })
  })

  it('addTodo agrega sin mutar el array original', () => {
    const result = addTodo(base, createTodo('c', '3'))
    expect(result).toHaveLength(3)
    expect(base).toHaveLength(2)
  })

  it('toggleTodo invierte solo la tarea indicada', () => {
    const result = toggleTodo(base, '1')
    expect(result[0].completed).toBe(true)
    expect(result[1].completed).toBe(true)
    expect(base[0].completed).toBe(false)
  })

  it('editTodo cambia solo el texto de la tarea indicada', () => {
    const result = editTodo(base, '1', '  nuevo texto ')
    expect(result[0]).toEqual({ id: '1', text: 'nuevo texto', completed: false })
    expect(result[1]).toEqual(base[1])
    expect(base[0].text).toBe('a')
  })

  it('removeTodo elimina por id', () => {
    expect(removeTodo(base, '2')).toEqual([base[0]])
  })

  it('filterTodos respeta cada opción del select', () => {
    expect(filterTodos(base, FILTERS.ALL)).toHaveLength(2)
    expect(filterTodos(base, FILTERS.COMPLETED)).toEqual([base[1]])
    expect(filterTodos(base, FILTERS.PENDING)).toEqual([base[0]])
  })

  it('countPending cuenta las incompletas', () => {
    expect(countPending(base)).toBe(1)
  })
})
