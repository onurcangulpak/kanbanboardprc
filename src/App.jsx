import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import TaskContainer from "./components/TaskContainer";
import taskData from "./assets/Data/data.json";

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
          <Route path="/" element={<HomePage tasks={tasks} setTasks={setTasks} handleDeleteTask={handleDeleteTask} />}/>
          <Route path="/details/:taskId" element={<Details tasks={tasks} setTasks={setTasks} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/kanban" element={ <TaskContainer tasks={tasks} setTasks={setTasks} handleDeleteTask={handleDeleteTask} />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
