import React from "react";
import "./Footer.css";
import githublogo from "../images/githublogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={githublogo} alt="github-logo" />
      </div>
      <div className="github-text">
        <a href="https://github.com/onurcangulpak/kanbanboardprc">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Footer;
