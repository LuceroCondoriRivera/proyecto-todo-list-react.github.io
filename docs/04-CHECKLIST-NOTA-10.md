# Checklist para la nota 10

Marca cada punto antes de entregar. Está organizado según la rúbrica de la consigna.

## 6 — Aprobado
- [ ] Respeta la consigna y el diseño general (íconos, colores y fuentes pueden cambiar).
- [ ] Respeta el funcionamiento y el flujo del ejemplo.
- [ ] Responsive en celular, tablet y escritorio.
- [ ] Todo con React (nada de JS vanilla para manipular el DOM).
- [ ] Textarea/input con ícono para nuevas tareas (Enter o botón agregan).
- [ ] Select con ícono: todas, completadas, incompletas.
- [ ] Se pueden crear, completar (tachar), editar y eliminar tareas, y eliminar todas.
- [ ] Estado en `useState`.
- [ ] Componentes: `App`, `Form`, `TodoList`, `Todo`.
- [ ] localStorage actualizado al agregar, completar y eliminar.
- [ ] App deployada y accesible.

## 7 — Bueno
- [ ] Código bien indentado (`pnpm lint` sin errores).
- [ ] Componentes funcionales con buenos nombres.
- [ ] Uso de `useState`.

## 8 — Muy bueno
- [ ] Branches con nombres adecuados.
- [ ] Lógica clara y simple.
- [ ] Uso de `useEffect` (`useLocalStorage`, `useFetch`).

## 9 — Muy bueno
- [ ] Componentes bien nombrados.
- [ ] Funciones puras para manejar los datos (`utils/todos.js`).
- [ ] `map` y `filter` en lugar de bucles que mutan.

## 10 — Excelente
- [ ] Lógica y componentes reutilizados (hooks propios, `Todo` dentro de `TodoList`).
- [ ] Commits con mensajes adecuados (`feat:`, `fix:`...).
- [ ] **Un PR por funcionalidad, fix o mejora.**
- [ ] PRs con buenos títulos y descripción.
- [ ] Ningún commit directo en `main` (salvo el inicial).

## Extra
- [ ] Issues creados y resueltos con `Closes #N`.
- [ ] Tests de las funciones puras.
- [ ] README con link de la demo y capturas.

## Qué mostrar el día de la entrega

1. El link del deploy funcionando en el celular.
2. El historial de `main`: solo merges de PRs.
3. La pestaña **Pull requests** con un PR por funcionalidad.
4. La pestaña **Issues**.
5. `utils/todos.js`: explicar por qué son funciones puras.
6. `useLocalStorage`: explicar el `useEffect`.
