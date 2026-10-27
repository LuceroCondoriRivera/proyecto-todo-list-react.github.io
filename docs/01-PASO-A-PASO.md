# Paso a paso: de cero a la app funcionando

Sigue los pasos en orden. Si algo falla, mira la sección final de problemas comunes.

## 0. Requisitos

- **Node.js 20 o superior** → `node -v`
- **Git** → `git --version`
- **pnpm** (recomendado, el esquema usa `pnpm-lock.yaml`): `npm install -g pnpm`. Si prefieres, `npm` también sirve.
- Una cuenta de **GitHub**.
- Editor: VS Code.

## 1. Crear el repositorio (una sola persona del equipo)

1. En GitHub: **New repository** → nombre `proyecto-todo-list-react` → público → crear.
2. En **Settings → Collaborators** invita a todo el equipo.
3. Clona y entra:
   ```bash
   git clone https://github.com/USUARIO/proyecto-todo-list-react.git
   cd proyecto-todo-list-react
   ```
4. Copia aquí las carpetas `frontend/`, `docs/`, `.github/` y el `README.md` de este proyecto.
5. Este es el **único commit directo a main** (el inicial):
   ```bash
   git add .
   git commit -m "chore: estructura inicial del proyecto"
   git push origin main
   ```
6. Protege main: **Settings → Branches → Add rule** → rama `main` → activa *Require a pull request before merging*. Así nadie puede trabajar en main por error.

## 2. Que cada integrante levante el proyecto

```bash
git clone https://github.com/USUARIO/proyecto-todo-list-react.git
cd proyecto-todo-list-react/frontend
pnpm install
pnpm dev
```

Abre `http://localhost:5173`. Si ves la lista con tareas de ejemplo, todo está listo.

## 3. Cómo armar el proyecto desde cero (si prefieres escribirlo tú)

Estos pasos reproducen lo que ya está hecho; sirven para entender cada pieza.

```bash
cd frontend
pnpm create vite@latest . --template react
pnpm install
pnpm add react-icons
pnpm add -D vitest
```

Luego crea esta estructura dentro de `src/`:

```
components/Form/Form.jsx
components/Filter/Filter.jsx
components/TodoList/TodoList.jsx
components/Todo/Todo.jsx
hooks/useLocalStorage.js
hooks/useFetch.js
utils/todos.js
styles/index.css
```

Y en `vite.config.js` agrega `base: './'` para el deploy.

## 4. Orden recomendado de funcionalidades (una branch y un PR cada una)

| # | Branch | Qué se hace | Criterio de la consigna |
|---|---|---|---|
| 1 | `maqueta` | Estructura de carpetas, HTML/CSS, componentes sin lógica, responsive | Diseño, responsive |
| 2 | `agregar-tarea` | `useState` de tareas, `Form` con input e ícono, `createTodo` | Input, crear tareas, useState |
| 3 | `completar-tarea` | Ícono para completar y texto tachado | Marcar completadas |
| 4 | `eliminar-tarea` | Ícono para eliminar y botón *Eliminar Todas las Tareas* | Eliminar del estado |
| 4b | `editar-tarea` | Botón editar con edición en el lugar (`editTodo`) | Mejora de la interfaz |
| 5 | `filtrar-tareas` | Select con ícono y `filterTodos` | Todas / completadas / incompletas |
| 6 | `guardar-localstorage` | `useLocalStorage` con `useEffect` | localStorage |
| 7 | `tareas-ejemplo-useFetch` | `useFetch` para cargar tareas iniciales | useFetch |
| 8 | `deploy-github-pages` | Workflow de deploy | App deployada |
| 9 | `docs-readme` | README, capturas, link de la demo | Documentación |

Detalle de comandos en [02-FLUJO-GIT-Y-PRS.md](02-FLUJO-GIT-Y-PRS.md).

## 5. Verificar antes de entregar

Desde `frontend/`:

```bash
pnpm lint
pnpm test
pnpm build
pnpm preview
```

Prueba a mano:

- [ ] Agrego una tarea con el botón y con Enter.
- [ ] No deja agregar tareas vacías.
- [ ] Completo una tarea con el checkbox: se tacha.
- [ ] Edito una tarea (Enter guarda, Esc cancela).
- [ ] *Eliminar Todas las Tareas* vacía la lista tras confirmar.
- [ ] La elimino: desaparece.
- [ ] El select filtra bien las tres opciones.
- [ ] Recargo la página: las tareas siguen ahí.
- [ ] En DevTools → Application → Local Storage veo la clave `todos` actualizándose.
- [ ] Se ve bien en celular (DevTools → modo responsive).

## 6. Problemas comunes

| Problema | Solución |
|---|---|
| `pnpm: command not found` | `npm install -g pnpm` o usa `npm install` y `npm run dev` |
| Pantalla en blanco al desplegar | Revisa que `vite.config.js` tenga `base: './'` |
| Las tareas de ejemplo no aparecen | Solo cargan en la primera visita. Borra la clave `todos` en Local Storage y recarga |
| `git push` rechazado en main | Está protegida: crea una branch y abre un PR |
| Conflictos al hacer merge | `git checkout mi-rama && git pull origin main`, resuelve en VS Code, commit y push |
