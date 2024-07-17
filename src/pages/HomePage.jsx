import React from "react";
import TaskContainer from "../components/TaskContainer";
import "./HomePage.css";
import CreateTask from "../components/CreateTask";

const HomePage = ({ tasks,setTasks, handleDeleteTask }) => {
  return (
    <div className="container">
      <div className="content-container">
        <TaskContainer tasks={tasks} handleDeleteTask={handleDeleteTask} />
        <CreateTask tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
};

export default HomePage;
