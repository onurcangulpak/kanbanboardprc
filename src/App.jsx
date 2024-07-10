import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import AboutUs from "./components/AboutUs";
import Details from "./components/Details";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<Details />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
    </Router>
  );
};

export default App;
