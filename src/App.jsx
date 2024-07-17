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
import FormXx from "./components/FormXx"
import taskData from "./assets/Data/data.json"

const App = () => {
  const [tasks, setTasks] = useState(taskData);

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
          <Route path="/details/:taskId" element={<Details tasks={tasks} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/kanban"
            element={
              <KanbanBoard tasks={tasks} handleDeleteTask={handleDeleteTask} />
            }
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FormXx/>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
