import React from "react";
import KanbanBoard from "./components/KanbanBoard";
import "./HomePage.css";

const HomePage = ({ tasks, handleDeleteTask }) => {
  return (
    <div className="container">
      <div className="content-container">
        <KanbanBoard tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </div>
     
    </div>
  );
};

export default HomePage;
