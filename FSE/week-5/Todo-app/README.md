# 📝 Todo Master - Full Stack Todo Application

A modern, responsive Todo application built with React.js frontend and Node.js/Express backend, featuring a beautiful UI with gradient designs and smooth animations.

## 🚀 Live Demo

- **Frontend**: [https://todofrontend-pi.vercel.app/](https://todofrontend-pi.vercel.app/)
- **Backend API**: [https://todoapplication-liart.vercel.app/](https://todoapplication-liart.vercel.app/)

## ✨ Features

- ✅ Create new todos with title and description
- ✅ Mark todos as completed
- ✅ Responsive design that works on all devices
- ✅ Modern gradient UI with smooth animations
- ✅ Real-time loading states and error handling
- ✅ MongoDB database for persistent storage
- ✅ Input validation with Zod
- ✅ CORS enabled API

## 🛠️ Tech Stack

### Frontend

- **React 19.1.1** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with gradients and animations
- **Responsive Design** - Mobile-first approach

### Backend

- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **Zod 4.1.5** - Schema validation
- **CORS** - Cross-origin resource sharing
- **Vercel** - Deployment platform

## 📁 Project Structure

```
Todo-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreateTodo.jsx
│   │   │   └── Todos.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── backend/
    ├── db.js
    ├── index.js
    ├── types.js
    ├── package.json
    └── vercel.json
```

## 🔗 API Endpoints

### Base URL

```
https://todoapplication-liart.vercel.app
```

### Endpoints

#### 1. Health Check

```http
GET /
```

**Response:**

```json
{
  "msg": "Server running"
}
```

#### 2. Create Todo

```http
POST /todo
```

**Request Body:**

```json
{
  "title": "string (required)",
  "description": "string (required)"
}
```

**Response:**

```json
{
  "msg": "Todo created successfully"
}
```

#### 3. Get All Todos

```http
GET /todos
```

**Response:**

```json
{
  "todo": [
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "completed": boolean
    }
  ]
}
```

#### 4. Mark Todo as Completed

```http
PUT /completed
```

**Request Body:**

```json
{
  "id": "string (required - MongoDB ObjectId)"
}
```

**Response:**

```json
{
  "msg": "Todo marked as completed"
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd Todo-app
```

2. **Setup Backend**

```bash
cd backend
npm install
```

3. **Setup Frontend**

```bash
cd frontend
npm install
```

### Environment Setup

1. **Backend Environment**

   - Update the MongoDB connection string in `backend/db.js`
   - The current connection points to a MongoDB Atlas cluster

2. **Frontend Environment**
   - Update API endpoints in components if needed
   - Current API base URL: `https://todoapplication-liart.vercel.app`

### Running the Application

1. **Start Backend (Development)**

```bash
cd backend
npm run dev
# Server will run on http://localhost:8080
```

2. **Start Frontend (Development)**

```bash
cd frontend
npm run dev
# Frontend will run on http://localhost:5173
```

3. **Build for Production**

```bash
# Frontend
cd frontend
npm run build

# Backend is ready for deployment as-is
```

## 🎨 UI Features

- **Modern Design**: Gradient backgrounds and card-based layout
- **Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Animations**: Smooth hover effects and loading states
- **Accessibility**: Proper color contrast and keyboard navigation
- **Empty States**: Friendly messages when no todos exist
- **Loading States**: Visual feedback during API calls

## 📱 Mobile Responsive

The application is fully responsive with breakpoints at:

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🔧 API Validation

The backend uses Zod for schema validation:

**Create Todo Schema:**

```javascript
{
  title: string (required),
  description: string (required)
}
```

**Update Todo Schema:**

```javascript
{
  id: string (required - MongoDB ObjectId)
}
```

## 🚢 Deployment

### Frontend (Vercel)

- Deployed automatically from the `frontend` directory
- Build command: `npm run build`
- Output directory: `dist`

### Backend (Vercel)

- Deployed with `vercel.json` configuration
- Serverless functions setup
- MongoDB Atlas for database

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Tridib**

---

### 📝 Notes

- The application uses MongoDB for persistent storage
- All API endpoints are CORS-enabled
- Frontend uses Axios for HTTP requests
- Backend includes input validation and error handling
- Responsive design works on all screen sizes

**Enjoy organizing your todos with Todo Master! ✨**
