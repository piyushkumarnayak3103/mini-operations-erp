# 🚀 Mini Operations ERP

A full-stack Mini Operations ERP application built to manage business operations through a modern web interface and a secure REST API.

The project includes user authentication, role-based access control, protected API routes, database management with Prisma ORM, and a scalable client-server architecture.

---

## ✨ Features

### 🔐 Authentication & Authorization

- User registration
- Secure user login
- JWT-based authentication
- Password hashing
- Protected routes
- Role-based access control
- Token-based API authorization

### 🖥️ Frontend

- Modern responsive user interface
- Authentication pages
- Dashboard interface
- API integration
- Protected application routes
- Clean component-based architecture

### ⚙️ Backend

- RESTful API
- Express.js server
- TypeScript
- Prisma ORM
- Authentication middleware
- Request validation
- Centralized error handling
- Modular controller and service architecture

### 🗄️ Database

- Prisma ORM
- Database migrations
- User management
- Structured database schema

---

# 🏗️ Project Architecture

```text
mini-operations-erp/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   │
│   └── package.json
│
├── server/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   ├── utils/
│   │   └── validators/
│   │
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
