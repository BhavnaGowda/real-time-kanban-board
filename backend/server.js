const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

// ================================
// In-memory task storage
// ================================
let tasks = [];

// ================================
// WebSocket Logic
// ================================
io.on("connection", (socket) => {
  console.log("✅ User connected");

  // Send all tasks to newly connected client
  socket.on("sync:tasks", () => {
    socket.emit("sync:tasks", tasks);
  });

  // ================================
  // Create Task
  // ================================
  socket.on("task:create", (task) => {
    const newTask = {
      id: task.id,
      title: task.title,
      status: task.status || "todo",
      priority: task.priority || "Medium",
      category: task.category || "Feature",
      attachments: task.attachments || [],
    };

    tasks.push(newTask);
    io.emit("sync:tasks", tasks);
  });

  // ================================
  // Update Task
  // ================================
  socket.on("task:update", (updatedTask) => {
    tasks = tasks.map((task) =>
      task.id === updatedTask.id
        ? { ...task, ...updatedTask }
        : task
    );

    io.emit("sync:tasks", tasks);
  });

  // ================================
  // Move Task (Change Status)
  // ================================
  socket.on("task:move", ({ id, status }) => {
    tasks = tasks.map((task) =>
      task.id === id
        ? { ...task, status }
        : task
    );

    io.emit("sync:tasks", tasks);
  });

  // ================================
  // Delete Task
  // ================================
  socket.on("task:delete", (id) => {
    tasks = tasks.filter((task) => task.id !== id);
    io.emit("sync:tasks", tasks);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected");
  });
});

// ================================
// Health Check Route (Optional but Professional)
// ================================
app.get("/", (req, res) => {
  res.send("WebSocket Kanban Backend Running 🚀");
});

// ================================
// Dynamic Port (IMPORTANT FOR RENDER)
// ================================
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
