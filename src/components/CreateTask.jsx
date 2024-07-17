import React from "react";
import "./CreateTask.css";
import { useState } from "react";

const CreateTask = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setisCompleted] = useState("completed");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, isCompleted,id: tasks.length + 1 };
    console.log("here my new tasks", newTask);
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="form-container">
      <h2>Add a new task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Task status:</label>
        <select
          value={isCompleted}
          onChange={(e) => setisCompleted(e.target.value)}
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
        <button>Add task</button>
        {/* <p> {title} {notes} {station}</p> */}
      </form>
    </div>
  );
};

export default CreateTask;
