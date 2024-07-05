import React from "react";
import { useState } from "react";
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
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>

          <p>{task.description}</p>
          <p>
            Task Status: {task.isCompleted ? "Completed✅" : "❌Not Completed"}
          </p>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};


export default KanbanBoard;
