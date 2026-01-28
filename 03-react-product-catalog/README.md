# Product Catalog (React)

A small product catalog app focused on **clean UI structure**, **filtering/sorting logic**, and **readable component-based code**.

## Highlights

- **Catalog UI**
  - Product cards with consistent layout
  - Clear separation of list/grid and item rendering

- **Filtering & sorting**
  - Client-side filtering (by category/attributes depending on dataset)
  - Sorting logic (e.g., by price or name if supported by the data)

- **Smooth UX**
  - Predictable state updates (filters/sort update the view instantly)
  - Simple, easy-to-review UI flow

## Tech stack

- React
- Vite
- JavaScript
- CSS

## Project structure

```
src/
  components/      # reusable UI blocks (catalog, filters, cards)
  assets/          # images/icons (if used)
  App.jsx          # app composition + state wiring
  main.jsx         # entry point
```

> Folder names may vary slightly, but the structure follows the same idea: UI components separated from app wiring.

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

## Notes

This project is intentionally kept lightweight, so the main focus stays on **UI composition** and **front-end logic** that scales to larger apps.
