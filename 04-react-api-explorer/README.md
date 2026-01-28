# API Explorer (React)

A small React app that demonstrates **client-side routing** and **API-driven UI** with clean loading/error handling.
The app lets you browse data from an API and navigate between pages without full reloads.

## Highlights

- **Routing / navigation**
  - Multiple pages (e.g., Users → Albums flow)
  - Back/forward browser navigation works as expected

- **API integration**
  - Data fetching with a dedicated API layer (Axios / Fetch)
  - Clear separation between UI components and network logic

- **Reliable UI states**
  - Loading indicators while requests are in progress
  - Error handling (e.g., network issues / 404-style responses)
  - Defensive rendering to avoid crashes when data is not ready

- **Readable structure**
  - Components are separated by responsibility (pages vs UI blocks)
  - Predictable state updates and props flow

## Tech stack

- React
- React Router
- Axios (or Fetch, depending on the implementation)
- CSS (and/or UI library, if used)

## Project structure

```
src/
  api/            # API calls (axios instance, endpoints)
  pages/          # route-level components (Users, Albums, etc.)
  components/     # reusable UI blocks
  App.jsx         # routes + layout
  main.jsx        # entry point
```

> Folder names can vary slightly, but the concept is the same: **API layer**, **pages**, and **reusable components**.

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

This project is built to showcase practical frontend skills:
routing, async requests, and UI behavior under real network conditions.
