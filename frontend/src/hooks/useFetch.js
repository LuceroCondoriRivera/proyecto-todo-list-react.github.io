import { useEffect, useState } from 'react'

// Pide un JSON a la url. Si url es null, no hace nada.
export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(Boolean(url))
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Error ${response.status}`)
        return response.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setError(err.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}
