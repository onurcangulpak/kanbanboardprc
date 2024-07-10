import React from "react";
import KanbanBoard from "./components/KanbanBoard";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="content-container">
        <KanbanBoard />
      </div>
    </div>
  );
};

export default HomePage;
