import React from "react";
import Task from "./Task";
import "./KanbanBoard.css";

const KanbanBoard = ({ tasks, handleDeleteTask }) => {
  return (
    <div className="kanban-board">
      {tasks.map((task) => (
        <div key={task.id} className="tasks">
          <Task task={task} handleDeleteTask={handleDeleteTask} />
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
