import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import AboutUs from "./components/AboutUs";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import OneTask from "./components/OneTask";
import KanbanBoard from "./components/KanbanBoard";

const App = () => {
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
    <Router>
      <NavBar />
      <div className="content-container">
        <SideBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage tasks={tasks} handleDeleteTask={handleDeleteTask} />
            }
          />

          <Route path="/details" element={<Details />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/kanban"
            element={
              <KanbanBoard tasks={tasks} handleDeleteTask={handleDeleteTask} />
            }
          />
          <Route path="/details/:taskId" element={<OneTask tasks={tasks} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
