# Todo List (Filters & Search) — React

A Todo app with a dedicated **filter panel**, **search**, and **priority-based views**.
Designed to stay usable even with large task lists.

## Key features

- **Create tasks fast**
  - Title + Description + Priority
  - **Enter** submits from both inputs
  - **Shift + Enter** in description keeps a new line (doesn’t submit)

- **Validation**
  - Title is trimmed (`title.trim()`)
  - Empty titles are blocked with a clear inline error message

- **Task completion + ordering**
  - Toggle completion via checkbox
  - Completed tasks are automatically **sorted to the bottom**

- **Filters**
  - **Hide completed** (checkbox)
  - **Search by title** (case-insensitive)
  - **Priority filter**: All / Urgent / Medium / Not urgent

- **Large list friendly**
  - **Generate 1000 tasks** with one click
  - Scrollable list container (keeps layout stable and responsive)

- **No routing = no refresh/404 issues**
  - Single entry point (no client-side routes), so page refresh won’t break navigation.

## UI / Responsive behavior

- Fluid container (`width: 90%`, `max-width: 1200px`)
- Flex layout with a separate filter panel and main area
- CSS Modules for styles (avoids global CSS collisions)

> Tip: for small screens, you can stack the filter panel above the list with a simple media query.

## Tech stack

- React 18
- Vite
- CSS Modules (scoped styling)

## Project structure

```
src/
  App.jsx                 # state (tasks + filters), add/delete/toggle, bulk generator
  FilterPanel.jsx         # hide-completed, search, priority filter, generate button
  TaskForm.jsx            # controlled inputs, validation, Enter submit
  TaskList.jsx            # filtering + sorting + count of visible tasks
  TaskItem.jsx            # task UI, delete action, meta info (date + priority)
  *.module.css            # scoped styles
```

## Implementation notes (strong points)

- Predictable state updates using **immutable operations** (`map`, `filter`, spread)
- Filtering logic combines:
  - search match (case-insensitive, by title)
  - priority match
  - completion match
- Visible tasks counter: `Список задач (N)` updates based on applied filters
- `shouldComponentUpdate` is used in key components to reduce unnecessary re-renders on large lists

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
