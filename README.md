# NotesTracker

**NotesTracker** is a full-stack web application for managing notes, built with **React, Node.js, Express, MongoDB**, and **Tailwind CSS**.  
This project focuses purely on implementing core **CRUD operations**.

## Features

- Create new notes  
- View all notes  
- View individual note details  
- Update existing notes  
- Delete notes  
- Clean and minimal UI  

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB (Mongoose)  
- **Frontend:** React (Vite), Tailwind CSS  
- **Architecture:** RESTful API  

## Backend

**Models:**
- Note  

**Controllers:**
- Note Controller (handle CRUD operations)

**Routes:**
- `/api/notes`

**Endpoints:**
- `GET /api/notes` — Get all notes  
- `GET /api/notes/:id` — Get single note  
- `POST /api/notes` — Create note  
- `PUT /api/notes/:id` — Update note  
- `DELETE /api/notes/:id` — Delete note  

## Frontend

- Home page (list all notes)  
- Create note form  
- Edit/update note UI  
- View note details  

## Processes

1. **Create Note**  
2. **Fetch & Display Notes**  
3. **Update Note**  
4. **Delete Note**  

## Installation

### Backend
```bash
cd backend
npm install
npm run dev
