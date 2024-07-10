import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="containerxx"> 
    <div className="side-bar">
      <div className="e1">
        <Link to='/'>Home </Link> </div>
      <div className="e2"><Link to='/details'>Details </Link></div>
      <div className="e3"><Link to='/aboutus'>About Us</Link></div>
    </div>
    </div>
  );
};

export default SideBar;
