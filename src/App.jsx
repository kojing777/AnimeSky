import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import NewNew from "./Components/NewNew/NewNew"; 
import AboutMe from "./Components/Popular/Popular"; 
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Popular from "./Components/Popular/Popular";
import PopularGames from "./Components/PopularGames/PopularGames";
import About from "./Components/About/About";

function App() {
  return (
    <>
    <Navbar />
  
      
      <div className="main-content">
        <Routes>
          
          {/* Set the home route to NewNew */}
          <Route path="/" element={<Home />} /> {/* This will render NewNew at the home path */}
          
          <Route path="/new" element={<NewNew />} /> {/* This route still renders NewNew */}
          <Route path="/popular" element={<Popular />} />
          <Route path="/completed" element={<Popular />} />
          <Route path="/Games" element={<PopularGames />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <Hero />
      {/* Footer stays at the bottom */}
      <Footer />
   
    </>
  );
}

export default App;
