# Deploy

La consigna pide que la app sea accesible desde una dirección web. Tienes tres opciones; con la primera ya queda automatizado.

## Opción A — GitHub Pages (automático, incluido en el repo)

1. Sube el repositorio con la carpeta `.github/workflows/deploy.yml`.
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Haz merge a `main` (por PR). La pestaña **Actions** mostrará el deploy.
4. Tu app quedará en:
   `https://USUARIO.github.io/proyecto-todo-list-react/`
5. Pega el link en el `README.md`.

## Opción B — Vercel

1. Entra a vercel.com → **Add New Project** → importa el repo.
2. **Root Directory:** `frontend`.
3. Framework: Vite (lo detecta solo). Build: `pnpm build`, output: `dist`.
4. **Deploy**.

## Opción C — Netlify

1. app.netlify.com → **Add new site → Import from Git**.
2. **Base directory:** `frontend` · **Build command:** `pnpm build` · **Publish directory:** `frontend/dist`.
3. **Deploy**.

## Después del deploy

- [ ] Abrir el link en el celular.
- [ ] Probar agregar, completar, eliminar y filtrar.
- [ ] Recargar y confirmar que se guardan las tareas.
- [ ] Verificar que no haya errores rojos en la consola.
