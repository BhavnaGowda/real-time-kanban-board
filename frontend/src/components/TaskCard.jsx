import { useState } from "react";

export default function TaskCard({ task, index, provided, updateTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleUpdate = () => {
    updateTask({
      ...task,
      title: editedTitle,
    });
    setEditing(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewURL = URL.createObjectURL(file);

    updateTask({
      ...task,
      attachments: [previewURL],
    });
  };

  return (
    <div
      className={`task-card priority-${task.priority}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {/* ===== TITLE SECTION ===== */}
      {editing ? (
        <>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            style={{ width: "100%", padding: "6px", marginBottom: "8px" }}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <strong>{task.title}</strong>
          <button
            style={{
              marginBottom: "8px",
              padding: "5px 10px",
              borderRadius: "6px",
              border: "none",
              background: "#334155",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        </>
      )}

      {/* ===== PRIORITY ===== */}
      <div className="task-meta">
        <label>Priority</label>
        <select
          value={task.priority}
          onChange={(e) =>
            updateTask({ ...task, priority: e.target.value })
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      {/* ===== CATEGORY ===== */}
      <div className="task-meta">
        <label>Category</label>
        <select
          value={task.category}
          onChange={(e) =>
            updateTask({ ...task, category: e.target.value })
          }
        >
          <option>Bug</option>
          <option>Feature</option>
          <option>Enhancement</option>
        </select>
      </div>

      {/* ===== FILE UPLOAD ===== */}
      <div className="task-meta">
        <label>Attachment</label>
        <input type="file" onChange={handleFileUpload} />
      </div>

      {/* ===== IMAGE PREVIEW ===== */}
      {task.attachments && task.attachments.length > 0 && (
        <img src={task.attachments[0]} alt="preview" width="100" />
      )}

      {/* ===== DELETE BUTTON ===== */}
      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}
