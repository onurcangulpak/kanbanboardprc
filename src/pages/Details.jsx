import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = ({ tasks, setTasks }) => {
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id.toString() === taskId);

  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [isCompleted, setIsCompleted] = useState(
    task ? task.isCompleted : false
  );

  console.log(task);

  const handleUpdate = (e) => {
    e.preventDefault();

    const mappedTasks = tasks.map((oneTask) => {
      if (oneTask.id.toString() === taskId) {
        return {
          ...oneTask,
          title,
          description,
          isCompleted: isCompleted,
        };
      }
      return oneTask;
    });
    setTasks(mappedTasks);
  };

  if (!task) {
    return <div>Task not found</div>;
  }
  return (
    <div className="details-container">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.isCompleted ? "Completed ✅" : "❌ Not Completed"}</p>
      <div>
        <h2>Update task details</h2>
        <form onSubmit={handleUpdate}>
          <label> Task title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Task status:</label>
          <select
            value={isCompleted ? "completed" : "not-completed"}
            onChange={(e) => setIsCompleted(e.target.value === "completed")}
          >
            <option value="completed">Completed </option>
            <option value="not-completed">Not Completed </option>
          </select>
          <label>Description: </label>
          <input
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Edit Task</button>
        </form>
      </div>
    </div>
  );
};

export default Details;
