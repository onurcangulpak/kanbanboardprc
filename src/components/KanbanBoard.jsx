import React from "react";
import { useState } from "react";
import Task from "./Task";
import "./KanbanBoard.css";
const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description for Task 2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description for Task 3",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description for Task 4",
      isCompleted: true,
    },
    {
      id: 5,
      title: "Task 5",
      description: "Description for Task 5",
      isCompleted: false,
    },
  ]);

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="canban-board">
      {tasks.map((task) => (
        <div key={task.id} className="tasks">
          <Task task={task} handleDeleteTask={handleDeleteTask} />{" "}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
