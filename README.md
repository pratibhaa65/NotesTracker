# NotesTracker

NotesTracker is a full-stack web application for managing personal notes, built with React, Node.js, Express, MongoDB, and Tailwind CSS.

The project includes JWT-based authentication, allowing each user to securely manage their own notes.


## Features

### Core Features (CRUD)
- Create new notes
- View all notes
- View individual note details
- Update existing notes
- Delete notes

### Authentication Features
- User registration
- User login
- JWT authentication
- Protected routes (frontend and backend)
- User-specific notes (each user sees only their own notes)
- Secure logout


## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcryptjs (Password hashing)

### Frontend
- React (Vite)
- React Router
- Axios
- Tailwind CSS
- React Hot Toast


## Authentication System

The application uses JWT (JSON Web Token) for secure authentication.

### Flow
1. User registers or logs in
2. Backend validates credentials
3. JWT token is generated
4. Token is stored in localStorage
5. Token is sent with API requests
6. Backend verifies token using middleware
7. User gains access to protected routes


## Protected Routes

Only authenticated users can access:

- /home - User dashboard (personal notes)
- /create - Create new note
- /note/:id - View or edit note

Unauthorized users are redirected to:

- /login


## Backend Structure

### Models
- User model
- Note model

### Controllers
- Auth controller (register and login)
- Note controller (CRUD operations)

### Middleware
- authMiddleware (verifies JWT token)


## API Routes

### Auth Routes
POST /api/auth/register  
POST /api/auth/login  

### Notes Routes
GET /api/notes  
GET /api/notes/:id  
POST /api/notes  
PUT /api/notes/:id  
DELETE /api/notes/:id  


## Frontend Pages

- Landing page
- Login page
- Register page
- Home page (user dashboard)
- Create note page
- Note detail / edit page


## Application Flow

1. User registers or logs in
2. JWT token is stored in localStorage
3. Protected routes become accessible
4. User performs CRUD operations
5. Only their own notes are visible
6. Logout clears session


## Installation

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend (.env)
```bash
MONGO_URI=mongodb_connection
JWT_SECRET=your_secret_key
```

### Frontend (.env)
```bash
VITE_API_URL=your_backend_url
```

### Deployment
```bash
Frontend: Vercel
Backend: Render
Database: MongoDB Atlas
```