import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/AutoPlay";
import NewNew from "./Components/NewNew/NewNew";
import AboutMe from "./Components/Popular/Popular";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Popular from "./Components/Popular/Popular";
import PopularGames from "./Components/PopularGames/PopularGames";
import About from "./Components/About/About";
import AutoPlay from "./Components/Hero/AutoPlay";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewNew />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/completed" element={<Popular />} />
          <Route path="/Games" element={<PopularGames />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/About" element={<About />} />
          <Route path="/Action" element={<About />} />
        </Routes>
      </div>
    <AutoPlay />
      <Footer />
    </div>
  );
}

export default App;