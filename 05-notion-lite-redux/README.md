# Notion Lite (Redux) — Notes App

A Notion-inspired notes app with **authentication**, **CRUD for notes**, and **scalable state management** using **Redux**.

## What’s inside

### Auth flow

- **Registration** with strong validation via **Zod**
  - valid email format
  - password rules: **8+ chars**, **uppercase + lowercase + number**
  - confirm password match
  - duplicate email check
- **Login / Logout**
- Header navigation adapts to auth state (shows Login/Register or Notes/Profile/Logout)

### Notes (full CRUD)

- **Create note** (title required, body optional)
- **List notes** for the current user (author-based filtering)
- **Search** notes by title (case-insensitive)
- **Note details** page
- **Edit** note
- **Delete** note (from list and from details)

### Routing & UX

- React Router pages:
  - `/login`, `/register`
  - `/home` (profile)
  - `/notes` (list)
  - `/notes/create` (create)
  - `/notes/:id` (details)
  - `/notes/:id/edit` (edit)
  - `*` → NotFound page
- Route access is protected in practice: Notes pages redirect to **/login** if there is no active user.

### State management (Redux)

- Store structure:
  - `auth`: `{ user }` (LOGIN / LOGOUT)
  - `notes`: `{ notes }` (SET_NOTES / ADD_NOTE / UPDATE_NOTE / DELETE_NOTE)
- Predictable updates using immutable operations (`map`, `filter`, array spread)

### UI

- Tailwind CSS + typography plugin
- Clean layout with `Layout → Header / Main / Footer`
- Responsive, readable spacing and consistent button styles

## Tech stack

- React + Vite
- Redux (classic `createStore` + `combineReducers`)
- React Router
- Tailwind CSS
- Axios + Fetch
- JSON Server (local REST API)
- Zod (form validation)

## Local backend (JSON Server)

This project uses a local mock API powered by JSON Server.

**Endpoints**

- `GET/POST http://localhost:5000/users`
- `GET/POST http://localhost:5000/notes`
- `GET/PATCH/DELETE http://localhost:5000/notes/:id`
- `GET http://localhost:5000/notes?authorId=<userId>`

A starter `db.json` is included in the repo.

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Start the local API (Terminal 1)

```bash
npm run dev:db
```

This runs JSON Server on **http://localhost:5000**.

### 3) Start the frontend (Terminal 2)

```bash
npm run dev
```

### Build / Preview

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Project structure

```
src/
  App.jsx                     # routes (login/register/notes/profile/404)
  main.jsx                    # Redux Provider + app mount
  store.js                    # auth + notes reducers, root store
  components/
    Layout.jsx                # app shell (Header/Main/Footer)
    Header.jsx                # auth-aware navigation
    Footer.jsx                # footer
  pages/
    Registration.jsx           # Zod validation + create user
    Login.jsx                  # login via /users
    Home.jsx                   # profile view
    Notes.jsx                  # fetch notes by authorId + search + delete
    CreateNote.jsx             # create note + validation
    EditNote.jsx               # edit note (fetch if not in store)
    NoteDetails.jsx            # details + delete + edit
    NotFound.jsx               # fallback route
```

## Deployment note (GitHub Pages)

If you deploy to GitHub Pages, React Router may require an SPA fallback.  
A common approach is switching to `HashRouter` (or using a Pages SPA redirect strategy).

---

**Author:** Alina Voloha
