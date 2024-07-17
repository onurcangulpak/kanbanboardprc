import React, { useState } from "react";
import { Link } from "react-router-dom";

// All tasks
const Task = ({ task, handleDeleteTask}) => {
  
 



  return (
    <div key={task.id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        Task Status: {task.isCompleted ? "Completed ✅" : "❌ Not Completed"}
      </p>

      <Link to={`/details/${task.id}`}>Edit</Link>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
      <button></button>
    </div>
  );
};

export default Task;
