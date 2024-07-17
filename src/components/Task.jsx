import React from "react";
import { Link } from "react-router-dom";


const Task = ({ task, handleDeleteTask }) => {
  return (
    <div key={task.id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Task Status: {task.isCompleted ? "Completed ✅" : "❌ Not Completed"}</p>
     <div className="details">  <Link to={`/details/${task.id}`}>View Details</Link></div>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
