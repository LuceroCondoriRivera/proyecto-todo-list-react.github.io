import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// base './' permite desplegar en GitHub Pages, Netlify o Vercel sin tocar nada.
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    environment: 'node',
  },
})
