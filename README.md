# 📝 WebSocket-Powered Kanban Board 

## 📌 Project Overview

This project involves building a **real-time Kanban board** where users can **add, update, delete, move tasks between columns, upload attachments, assign priority & category, and visualize progress**.

The goal is to assess proficiency in:  
✅ **React** (for UI)  
✅ **WebSockets (Socket.IO)** (for real-time updates)  
✅ **Vitest + React Testing Library** (for unit & integration testing)  
✅ **Playwright** (for end-to-end testing)

---

## 📂 Project Structure

```
websocket-kanban-vitest-playwright
│── backend/                     # Node.js WebSocket server
│   ├── server.js                 # Express + Socket.IO WebSocket setup
│   ├── package.json              # Backend dependencies
│
│── frontend/                     # React app
│   ├── src/
│   │   ├── components/           # UI components
│   │   │   ├── KanbanBoard.jsx
│   │   ├── tests/                # All test cases
│   │   │   ├── unit/             # Unit tests (Vitest)
│   │   │   ├── integration/      # Integration tests (Vitest)
│   │   │   ├── e2e/              # End-to-end tests (Playwright)
│   ├── package.json
│
└── README.md                     # Project guide
```

---

## 📌 What is Kanban?

Kanban is a **workflow management system** that visually organizes tasks into columns representing different stages of work.

### 🏗 Example Board:

```
To Do       In Progress      Done
----------------------------------
Task A   →  Task B        →  Task C
Task D   →  Task E        →  Task F
```

### 🔍 Reference Applications:

| Kanban App      | Description                 | Link                                                                   |
| --------------- | --------------------------- | ---------------------------------------------------------------------- |
| **Trello**      | Task management tool        | [trello.com](https://trello.com/)                                      |
| **Jira Kanban** | Agile development workflows | [atlassian.com/software/jira](https://www.atlassian.com/software/jira) |
| **ClickUp**     | Project management tool     | [clickup.com](https://www.clickup.com/)                                |

🔗 **Open-source Kanban boards:**

- **[Wekan](https://github.com/wekan/wekan)** – Self-hosted Trello alternative
- **[Planka](https://github.com/plankanban/planka)** – Open-source React Kanban

---

🚀 Real-Time Kanban Board

A full-stack real-time Kanban board built using React, WebSockets (Socket.IO), and modern testing frameworks.

🌐 Live Demo

🔗 Frontend: [Your Vercel Link]
🔗 Backend: [Your Render Link]

✨ Features

✅ Create, update, delete tasks

✅ Drag-and-drop between columns

✅ Real-time synchronization using WebSockets

✅ Priority & category selection

✅ File upload with image preview

✅ Live progress visualization (Recharts)

✅ Multi-client sync support

✅ Unit, Integration & E2E testing

🧠 Tech Stack
Frontend

React (Vite)

@hello-pangea/dnd

Recharts

Socket.io-client

Vitest

Playwright

Backend

Node.js

Express

Socket.IO

Deployment

Vercel (Frontend)

Render (Backend)

📊 Architecture
Client (React)
   ↕ WebSocket (Socket.IO)
Server (Node + Express)


Tasks are stored in memory and synchronized across all connected clients in real time.

🧪 Testing

Unit Tests (Vitest)

Integration Tests

E2E Tests (Playwright)

All tests passing before deployment.

🚀 Run Locally
Backend
cd backend
npm install
node server.js

Frontend
cd frontend
npm install
npm run dev

📌 Project Highlights

Real-time event-driven architecture

Clean component separation

Responsive UI/UX design

Production deployment setup

CI/CD ready structure

🛠 **Final Tip:** Pay attention to **code quality, real-time interactions, and testing coverage**. Good luck! 🚀
