# Backend Server & API Documentation

This document describes how to run the server and the current API endpoints. Keep this file updated as routes change.

## Project layout (relevant files)

- `server.js` — application entrypoint (loads env, connects DB, creates HTTP server)
- `src/app.js` — Express app instance (mounts middleware and routes)
- `src/config/db.js` — Mongoose connection helper
- `src/controllers/` — request handlers (e.g., `notes.controller.js`)
- `src/models/` — Mongoose models (e.g., `note.model.js`)
- `src/routes/` — route definitions (e.g., `notes.routes.js`)

---

## Prerequisites

- Node.js 16+ installed
- MongoDB connection URI
- Create a `.env` file in the `Backend` folder with at least:

```
PORT=3000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.example.mongodb.net/dbname
NODE_ENV=development
```

---

## Install

From the `Backend` directory run:

```bash
npm install
```

---

## Run

- Development (uses `nodemon` if available):

```bash
npm run dev
```

- Production:

```bash
npm start
```

---

## Server behavior

- The server loads environment variables from `.env` (via `dotenv`).
- `src/config/db.js` connects to MongoDB using `mongoose.connect()`.
- The app should create an HTTP server from the Express app and implement graceful shutdown handling for `SIGINT`/`SIGTERM` (recommended).
- Logging and structured error handling are recommended improvements.

---

## API: Notes

The project contains a simple Notes API. Update these docs if you change route paths or request/response shapes.

Base path: `/api/notes` (confirm in `src/routes/notes.routes.js`)

Endpoints:

- Create note
  - Method: POST
  - Path: `/api/notes`
  - Body (JSON):
    - `title` (string, required)
    - `content` (string, optional)
  - Success: 201 Created
  - Response: created note object

- Get all notes
  - Method: GET
  - Path: `/api/notes`
  - Query: optional filters/pagination (not implemented by default)
  - Success: 200 OK
  - Response: array of note objects

- Get single note
  - Method: GET
  - Path: `/api/notes/:id`
  - Success: 200 OK or 404 Not Found
  - Response: note object

- Update note
  - Method: PUT or PATCH
  - Path: `/api/notes/:id`
  - Body (JSON): fields to update
  - Success: 200 OK or 404 Not Found
  - Response: updated note object

- Delete note
  - Method: DELETE
  - Path: `/api/notes/:id`
  - Success: 204 No Content or 404 Not Found

---





