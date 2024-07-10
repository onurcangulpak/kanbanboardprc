import React from "react";
import { useParams } from "react-router-dom";


const OneTask = ({ tasks }) => {
  const { taskId } = useParams();
  console.log("tasks:", tasks);
  console.log("taskId:", taskId);

  const task = tasks.find(task => task.id == taskId);  // Use == for comparison
  console.log("task:", task);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.isCompleted ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default OneTask;
