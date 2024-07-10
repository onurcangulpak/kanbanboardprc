import React from "react";

const Task = ({ task, handleDeleteTask }) => {
  return (
    <div key={task.id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Task Status: {task.isCompleted ? "Completed✅" : "❌Not Completed"}</p>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
