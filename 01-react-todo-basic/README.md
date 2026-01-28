# Todo List (React)

A clean Todo app focused on **fast task entry**, **clear UI state**, and **predictable updates**.

## Key features

- **Create tasks quickly**
  - Two inputs: _Title_ and _Description_
  - **Press Enter** in any input to add a task (keyboard-friendly flow)
  - “Add” button for mouse-first usage

- **Input validation (no junk tasks)**
  - Title is trimmed (`.trim()`)
  - Empty / whitespace-only titles are blocked
  - Clear inline error message is shown when validation fails

- **Task completion + ordering**
  - Toggle completion via checkbox
  - Completed tasks are automatically **sorted to the bottom** of the list

- **Filter: only uncompleted**
  - One-click checkbox to display only uncompleted tasks

- **UX detail: hover-to-delete**
  - Each task shows a timestamp (`createdAt`)
  - On hover it switches to a **Delete** action (keeps UI minimal but functional)

- **No routing = no refresh/404 issues**
  - The app has a single entry point (no client-side routes), so refreshing the page won’t break navigation.

## UI / Responsive behavior

Layout uses flexible blocks (`flex`, `gap`, percent-based width) and scales well on desktop/tablet widths.
Current CSS includes a `min-width` constraint for the main container, so for full mobile support you can remove or reduce:

```css
.todo-app {
  min-width: 800px;
}
```

## Tech stack

- React 18 (Class Components)
- Vite
- CSS (Flexbox + gaps)

## Project structure

```
src/
  App.jsx        # state + adding/filtering/sorting tasks
  Task.jsx       # task item UI + hover interactions
  index.css      # layout + styles
  main.jsx       # app entry
```

## Implementation notes (what’s good in the code)

- State updates use **immutable operations** (`map`, `filter`, spread)
- Uses `setState(prevState => ...)` where it matters (safe updates)
- Single method for controlled inputs (`handleInputChange(field, value)`)
- Task objects include:
  - `id` (generated via `Date.now()`)
  - `title`, `description`
  - `completed`
  - `createdAt` (human-readable timestamp)

## Run locally

```bash
npm install
npm run dev
```

Build / preview:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```
