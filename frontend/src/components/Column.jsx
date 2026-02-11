import { memo } from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

function Column({ column, tasks, updateTask, deleteTask }) {
  return (
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <div
          className={`column ${
            snapshot.isDraggingOver ? "column-active" : ""
          }`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h3>{column.title}</h3>

          {tasks.map((task, index) => (
            <Draggable
              draggableId={String(task.id)}
              index={index}
              key={task.id}
            >
              {(provided) => (
                <TaskCard
                  task={task}
                  provided={provided}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                />
              )}
            </Draggable>
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default memo(Column);
