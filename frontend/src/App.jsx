import React from "react";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <div className="app-wrapper">
      <div className="hero-section">
        <h1>Real-time Kanban Board</h1>
        <p>Manage tasks efficiently with live collaboration</p>
      </div>

      <KanbanBoard />
    </div>
  );
}

export default App;
