CourseSellingBackend

Simple Node.js/Express backend for a course selling platform. It supports admin-managed courses and user purchases with JWT-based authentication and MongoDB for persistence.

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)

## Prerequisites

- Node.js 18+ installed
- A MongoDB instance (local or cloud/Atlas)

## Project structure

- `index.js` – Express app entrypoint, mounts `/admin` and `/user` routes
- `config.js` – Holds `JWT_SECRET` used to sign/verify JWTs
- `db/db.js` – Mongoose connection and models (`Admin`, `User`, `Course`)
- `routes/admin.js` – Admin routes (signup, signin, create/list courses)
- `routes/user.js` – User routes (signup, signin, list/purchase courses, list purchased)
- `middleware/admin.js` – Admin auth middleware
- `middleware/user.js` – User auth middleware

## Setup

1. Install dependencies (from this folder):

```powershell
npm init -y
npm install express mongoose jsonwebtoken
```

2. Configure MongoDB connection:

- Edit `db/db.js` and replace `"your connection string"` with your actual MongoDB URI.

3. Configure JWT secret:

- In `config.js`, set a strong secret for `JWT_SECRET`.

4. Start the server:

```powershell
node index.js
```

The server listens on `http://localhost:3000` and logs: `Server started lol`.

## Data models

- Admin: `{ username: String, password: String }`
- User: `{ username: String, password: String, purchasedCourses: [ObjectId<Course>] }`
- Course: `{ title: String, description: String, imageLink: String, price: Number }`

## Authentication

JWT Bearer tokens are returned by the `signin` routes and expected on protected routes.

- Header: `Authorization: Bearer <token>`

Note: Current middleware reads `req.headers.authorizaition` (typo). See Known Issues for a suggested fix; the intended header is `Authorization`.

## API

Base URL: `http://localhost:3000`

### Admin

- POST `/admin/signup`

  - Body: `{ "username": string, "password": string }`
  - Response: `{ "message": "Admin created successfully" }`

- POST `/admin/signin`

  - Body: `{ "username": string, "password": string }`
  - Response: `{ "token": string }`

- POST `/admin/courses` (protected)

  - Headers: `Authorization: Bearer <token>`
  - Body: `{ "title": string, "description": string, "imageLink": string, "price": number }`
  - Response: `{ "message": "Course created successfully", "courseId": string }`

- GET `/admin/courses` (protected)
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ "Courses": Course[] }`

### User

- POST `/user/singup` (note spelling)

  - Body: `{ "username": string, "password": string }`
  - Response: `{ "message": "User created successfully" }`

- POST `/user/signin`

  - Body: `{ "username": string, "password": string }`
  - Response: `{ "token": string }`

- GET `/user/courses`

  - Response: `{ "Courses": Course[] }`

- POST `/user/courses/:courseId` (protected)

  - Headers: `Authorization: Bearer <token>`
  - Path Params: `courseId` – the ID of the course to purchase
  - Response: `{ "message": "Purchase Complete!" }`

- GET `/user/purchasedCourses` (protected)
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ "Courses": Course[] }`

## Quick test with PowerShell + curl

Replace values as needed. `-H` sets headers; `-d` sends JSON.

```powershell
# Admin creates an account
curl -X POST http://localhost:3000/admin/signup -H "Content-Type: application/json" -d '{"username":"admin1","password":"pass"}'

# Admin signs in and captures token
$adminToken = (curl -X POST http://localhost:3000/admin/signin -H "Content-Type: application/json" -d '{"username":"admin1","password":"pass"}').Content | ConvertFrom-Json | Select-Object -ExpandProperty token

# Admin creates a course
curl -X POST http://localhost:3000/admin/courses -H "Content-Type: application/json" -H "Authorization: Bearer $adminToken" -d '{"title":"JS 101","description":"Intro","imageLink":"https://example.com/img.png","price":199}'

# Public: list courses
curl http://localhost:3000/user/courses

# User signup (note current route spelling is /user/singup)
curl -X POST http://localhost:3000/user/singup -H "Content-Type: application/json" -d '{"username":"user1","password":"pass"}'

# User signin and capture token
$userToken = (curl -X POST http://localhost:3000/user/signin -H "Content-Type: application/json" -d '{"username":"user1","password":"pass"}').Content | ConvertFrom-Json | Select-Object -ExpandProperty token

# Purchase a course by ID (replace <id>)
curl -X POST http://localhost:3000/user/courses/<id> -H "Authorization: Bearer $userToken"

# List purchased courses
curl http://localhost:3000/user/purchasedCourses -H "Authorization: Bearer $userToken"
```

## Known issues (from current source)

- Header typos: middleware reads `authorizaition` instead of `authorization`; should be `Authorization`.
- JWT verify usage: uses `jwtToken.verify(jwtToken, JWT_SECRET)`; should be `jwt.verify(jwtToken, JWT_SECRET)` with `const jwt = require('jsonwebtoken')` imported.
- `/user/singup` is misspelled; consider renaming to `/user/signup`.
- `signin` handlers check the result of `Model.find({...})` directly. `find` returns an array; use `findOne` or check `array.length > 0`.
- `routes/user.js` references `jwt`/`JWT_SECRET` but does not import them; add `const jwt = require('jsonwebtoken')` and `const { JWT_SECRET } = require('../config')`.
- Purchased courses endpoint expects token but reads `req.headers.username` later; ensure middleware sets `req.username` from the JWT and use it consistently.

These don’t stop you from reading the structure, but you’ll want to patch them before production.

## Notes

- Passwords are stored in plain text in this sample; do not use as-is for production. Prefer hashing (e.g., bcrypt), validation, rate limiting, and proper error handling.
