# 🚀 WebSocket-Powered Real-Time Kanban Board

A full-stack real-time Kanban board built using **React**, **Socket.IO**, and modern testing frameworks.

---

## 📌 Project Overview

This project demonstrates a real-time task management system where users can:

- Add tasks
- Update tasks
- Delete tasks
- Drag & drop between columns
- Upload file attachments
- Assign priority & category
- Visualize progress dynamically
- Sync changes across multiple clients in real-time

This project evaluates proficiency in:

- ✅ React (UI & state management)
- ✅ WebSockets (Socket.IO)
- ✅ Vitest + React Testing Library (Unit & Integration Testing)
- ✅ Playwright (End-to-End Testing)
- ✅ Deployment (Render + Vercel)

---

## 🌐 Live Demo

🔗 **Frontend (Vercel):https://real-time-kanban-board-ynxn-f8qjhgn0m-bhavnagowdas-projects.vercel.app
🔗 **Backend (Render):https://real-time-kanban-board-08n3.onrender.com

---

## 📂 Project Structure

```
real-time-kanban-board
│── backend/                     # Node.js WebSocket server
│   ├── server.js                # Express + Socket.IO setup
│   ├── package.json
│
│── frontend/                    # React (Vite) application
│   ├── src/
│   │   ├── components/          # UI components
│   │   ├── tests/
│   │   │   ├── unit/            # Unit tests (Vitest)
│   │   │   ├── integration/     # Integration tests
│   │   │   ├── e2e/             # Playwright tests
│   ├── package.json
│
└── README.md
```

---

## 🏗 What is Kanban?

Kanban is a workflow visualization system that organizes tasks into stages.

### Example Board

| To Do | In Progress | Done |
|-------|------------|------|
| Task A | Task B | Task C |
| Task D | Task E | Task F |

---

## ✨ Features Implemented

### Core Features

- ✅ Create tasks
- ✅ Update tasks
- ✅ Delete tasks
- ✅ Move tasks between columns (Drag & Drop)
- ✅ Real-time synchronization (WebSockets)
- ✅ Loading indicator while syncing

### Advanced UI Features

- ✅ Priority selection (Low, Medium, High)
- ✅ Category selection (Bug, Feature, Enhancement)
- ✅ File upload with image preview
- ✅ Task progress chart (Recharts)
- ✅ Completion percentage calculation
- ✅ Responsive & modern UI

---

## 🧠 Tech Stack

### Frontend
- React (Vite)
- @hello-pangea/dnd (Drag & Drop)
- Recharts (Charts)
- Socket.io-client
- Vitest
- React Testing Library
- Playwright

### Backend
- Node.js
- Express
- Socket.IO

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📊 Architecture

```
Client (React)
        ↕ WebSocket (Socket.IO)
Server (Node + Express)
```

### Real-Time Flow

1. Client emits event (task:create, task:update, task:move, task:delete)
2. Server updates in-memory store
3. Server broadcasts updated task list using `io.emit("sync:tasks")`
4. All connected clients re-render instantly

---

## 🧪 Testing

### Unit Testing
- Add task
- Delete task
- Update task logic

### Integration Testing
- WebSocket sync across clients
- Drag-and-drop state updates

### End-to-End Testing (Playwright)
- Task creation
- Drag and drop between columns
- Dropdown selection
- File upload & preview
- Graph updates dynamically

All tests pass before production deployment.

---

## 🚀 Run Locally

### Backend

```bash
cd backend
npm install
node server.js
```

Server runs on:
```
http://localhost:5000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:
```
http://localhost:3000
```

---

## 📈 Evaluation Criteria Covered

| Criteria | Status |
|----------|--------|
| WebSocket Implementation | ✅ |
| React Component Structure | ✅ |
| Testing (Unit + E2E) | ✅ |
| Code Quality | ✅ |
| UI/UX | ✅ |

---

## 📌 Key Highlights

- Real-time event-driven architecture
- Multi-client synchronization
- Clean component separation
- Drag-and-drop UX
- Production-ready deployment
- CI/CD friendly structure
- Scalable architecture foundation

---

## 🔮 Future Improvements

- Add MongoDB persistence
- Add authentication (JWT)
- Add user-specific boards
- Add role-based access control
- Add task deadlines & filters

---

## 👩‍💻 Author

Bhavna Gowda  
Computer Science Engineering Student  
Passionate about Full-Stack Development & Real-Time Systems 🚀
