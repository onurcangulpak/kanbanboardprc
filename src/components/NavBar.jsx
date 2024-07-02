import React from "react";
import logo from "../images/logo23.png"
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="name">
        <h2>KANBAN</h2>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default NavBar;
