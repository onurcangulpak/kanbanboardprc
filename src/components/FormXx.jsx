import React from "react";
import "./FormXx.css";
import { useState } from "react";
const Form = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [station, setStation] = useState("completed");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, notes, station };
    
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
        <select value={station} onChange={(e) => setStation(e.target.value)}>
          <option value="completed">Completed </option>
          <option value="not-completed">Not Completed </option>
        </select>
        <label>Notes: </label>
        <input
          type="text"
          required
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button>Add task</button>
        {/* <p> {title} {notes} {station}</p> */}
      </form>
    </div>
  );
};

export default Form;
