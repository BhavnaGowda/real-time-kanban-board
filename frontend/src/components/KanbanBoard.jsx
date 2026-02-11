import { useEffect, useState, useCallback } from "react";
import socket from "../socket";
import { DragDropContext } from "@hello-pangea/dnd";
import Column from "./Column";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const columns = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

const priorities = ["Low", "Medium", "High"];
const categories = ["Bug", "Feature", "Enhancement"];

export default function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Feature");

  // ================= SOCKET =================
  useEffect(() => {
    socket.emit("sync:tasks");

    socket.on("sync:tasks", (data) => {
      setTasks(data);
      setLoading(false);
    });

    return () => {
      socket.off("sync:tasks");
    };
  }, []);

  // ================= CRUD =================
  const addTask = useCallback(() => {
    if (!title.trim()) return;

    socket.emit("task:create", {
      id: Date.now(),
      title,
      status: "todo",
      priority,
      category,
      attachments: [],
    });

    setTitle("");
  }, [title, priority, category]);

  const deleteTask = useCallback((id) => {
    socket.emit("task:delete", id);
  }, []);

  const updateTask = useCallback((id, updates) => {
    socket.emit("task:update", { id, ...updates });
  }, []);

  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;

    socket.emit("task:move", {
      id: Number(result.draggableId),
      status: result.destination.droppableId,
    });
  }, []);

  // ================= PROGRESS =================
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "done").length;
  const completion =
    total === 0 ? 0 : Math.round((done / total) * 100);

  const chartData = columns.map((col) => ({
    name: col.title,
    count: tasks.filter((t) => t.status === col.id).length,
  }));

  return (
    <div className="app-container">
      <h2>Kanban Board</h2>
      {loading && <p>Loading tasks...</p>}

      {/* CREATE */}
      <div className="create-section">
        <input
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          {priorities.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <button onClick={addTask}>Add Task</button>
      </div>

      {/* GRAPH */}
      <div className="graph-section">
        <h3>Completion: {completion}%</h3>
        <div style={{ height: 250 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BOARD */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          {columns.map((col) => (
            <Column
              key={col.id}
              column={col}
              tasks={tasks.filter((t) => t.status === col.id)}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
