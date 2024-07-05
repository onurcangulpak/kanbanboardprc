import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import "./HomePage.css";
import KanbanBoard from "./components/KanbanBoard";

const HomePage = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="content-container">
        <SideBar />
        <KanbanBoard/>
        <div className="main-content">
      
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
