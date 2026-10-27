import { useEffect, useState } from 'react'

// Igual que useState, pero sincroniza el valor con localStorage.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // localStorage lleno o bloqueado: la app sigue funcionando en memoria.
    }
  }, [key, value])

  return [value, setValue]
}
