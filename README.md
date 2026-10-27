# 📝 Lista de tareas — Proyecto final Front End

Aplicación hecha con **React + Vite** para crear tareas, marcarlas como completadas ✔, eliminarlas 🗑 y filtrarlas. Todo se guarda en **localStorage**.

🔗 **Demo:** 

## Funcionalidades

Interfaz en dos columnas: **Mis Tareas** (izquierda) y **Nueva Tarea** (derecha).

- Textarea para escribir la tarea: **Enter** o el botón *Agregar Tarea* la agrega (Shift + Enter hace salto de línea). No admite tareas vacías.
- Select con ícono: **Todas / Completadas / Incompletas**.
- Cada tarea tiene: checkbox para completar (se tacha), botón **editar** ✏ (edición en el mismo lugar; Enter guarda, Esc cancela) y botón **eliminar** 🗑.
- Botón **Eliminar Todas las Tareas** (pide confirmación).
- Estado en `useState`; persistencia en `localStorage` con `useEffect`; completar, editar y eliminar se reflejan en la app **y** en localStorage.
- Primera visita: carga tareas de ejemplo con un hook `useFetch`.
- Responsive (en celular las columnas se apilan) y con foco visible para teclado.

## Estructura

```
proyecto-todo-list-react/
├── .github/            # plantillas de PR e issues + deploy automático
├── docs/               # documentación (paso a paso, git, deploy, checklist)
└── frontend/
    ├── public/         # favicon.svg, icons.svg, tareas-ejemplo.json
    ├── src/
    │   ├── components/
    │   │   ├── Form/        # panel Nueva Tarea (textarea + botón + tip)
    │   │   ├── Filter/      # select Todas / Completadas / Incompletas
    │   │   ├── TodoList/    # panel Mis Tareas, lista y eliminar todas
    │   │   └── Todo/        # una tarea (completar / editar / eliminar)
    │   ├── hooks/
    │   │   ├── useLocalStorage.js
    │   │   └── useFetch.js
    │   ├── utils/
    │   │   ├── todos.js        # funciones puras (map / filter)
    │   │   └── todos.test.js
    │   ├── styles/index.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Cómo correrlo

```bash
cd frontend
pnpm install      # o: npm install
pnpm dev          # http://localhost:5173
```

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Genera la carpeta `dist/` para producción |
| `pnpm preview` | Prueba el build localmente |
| `pnpm lint` | Revisa el código con ESLint |
| `pnpm test` | Corre los tests de las funciones puras |

## Decisiones técnicas

- **Funciones puras** en `utils/todos.js`: no mutan el estado, usan `map` y `filter`, y tienen tests.
- **Componentes funcionales** con nombres claros: `App`, `Form`, `TodoList`, `Todo`.
- **Hooks propios** (`useLocalStorage`, `useFetch`) para reutilizar lógica.
- **Persistencia en localStorage** (la consigna admite localStorage o Firebase). Un backend no es necesario.
- `base: './'` en Vite para que el mismo build funcione en GitHub Pages, Netlify o Vercel.

## Equipo

| Integrante | GitHub 
|---|---|---|
| Lucero condori Rivera | https://github.com/LuceroCondoriRivera

