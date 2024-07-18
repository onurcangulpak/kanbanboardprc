import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Task.css"

// All tasks
const Task = ({ task, handleDeleteTask}) => {
  
 



  return (
    <div key={task.id} className="task-container">
     <div className="task-title"><h3>{task.title}</h3> </div> 
      <div className="task-description"> <p>{task.description}</p> </div>
      <p>
        Task Status: {task.isCompleted ? "Completed ✅" : "❌ Not Completed"}
      </p>

      <Link to={`/details/${task.id}`}>Edit</Link>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
