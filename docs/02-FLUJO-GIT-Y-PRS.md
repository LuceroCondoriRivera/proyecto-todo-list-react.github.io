# Flujo de Git: ramas, commits, PRs e issues

Regla de oro: **nunca se trabaja en `main`**. En main solo entran merges de PRs de funcionalidades terminadas.

## Ciclo para cada funcionalidad

```bash
git checkout main
git pull origin main
git checkout -b agregar-tarea        # nombre claro, en minúsculas y con guiones

# ... programar ...

git add .
git commit -m "feat: agrega formulario para crear tareas"
git push -u origin agregar-tarea
```

Luego en GitHub: **Compare & pull request** → completa la plantilla → pide revisión a un compañero → *Merge pull request* → borra la branch.

Antes de la siguiente funcionalidad, vuelve a `git checkout main && git pull`.

## Nombres de branches

| Tipo | Ejemplos |
|---|---|
| Funcionalidad | `maqueta`, `agregar-tarea`, `completar-tarea`, `editar-tarea`, `eliminar-tarea`, `filtrar-tareas`, `guardar-localstorage` |
| Corrección | `fix-localstorage`, `fix-filtro-vacio` |
| Mejora | `refactor-todo-component`, `refactor-utils-puras` |
| Documentación | `docs-readme` |

## Mensajes de commit

Formato: `tipo: descripción corta en presente`

| Tipo | Uso | Ejemplo |
|---|---|---|
| `feat` | funcionalidad nueva | `feat: agrega select para filtrar tareas` |
| `fix` | corrección | `fix: evita agregar tareas vacías` |
| `refactor` | mejora sin cambiar el comportamiento | `refactor: mueve filtros a utils/todos.js` |
| `style` | CSS / formato | `style: ajusta el diseño en pantallas chicas` |
| `docs` | documentación | `docs: agrega link de la demo al README` |
| `test` | tests | `test: cubre toggleTodo y removeTodo` |
| `chore` | configuración | `chore: configura ESLint` |

Haz commits pequeños: uno por cambio con sentido, no uno gigante al final.

## Títulos de PR

Claros y con el mismo formato que los commits:

- `feat: formulario para agregar tareas`
- `feat: completar tareas con texto tachado`
- `feat: eliminar tareas del estado y de localStorage`
- `feat: editar tareas en el mismo lugar`
- `feat: filtrar tareas por estado`
- `feat: persistencia con localStorage`
- `fix: guardar correctamente al eliminar la última tarea`

La plantilla `.github/pull_request_template.md` ya pide: qué se hizo, cómo probarlo y una checklist.

## Issues (punto extra)

Crea un issue por cada funcionalidad **antes** de empezar y enlázalo desde el PR con `Closes #N`; al hacer merge se cierra solo.

Ejemplos de issues para abrir:

1. `Maqueta responsive de la app`
2. `Agregar tareas desde el formulario`
3. `Completar tareas (texto tachado)`
4. `Eliminar tareas y eliminar todas`
4b. `Editar tareas`
5. `Filtrar por todas / completadas / incompletas`
6. `Guardar tareas en localStorage`
7. `Cargar tareas de ejemplo con useFetch`
8. `Deploy en GitHub Pages`

Usa etiquetas: `feature`, `bug`, `docs`, `refactor`.

## Reparto sugerido para el equipo

Cada persona lleva al menos una funcionalidad completa (branch → commits → PR). Las revisiones se cruzan: quien abre el PR no lo aprueba.

## Si dos personas tocaron lo mismo

```bash
git checkout mi-rama
git pull origin main        # trae los cambios de main
# resuelve los conflictos marcados con <<<<<<< en VS Code
git add .
git commit -m "chore: resuelve conflictos con main"
git push
```
