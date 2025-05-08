import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import NewNew from './Components/NewNew/NewNew';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Popular from './Components/Popular/Popular';
import PopularGames from './Components/PopularGames/PopularGames';
import About from './Components/About/About';
import TrendingAnimes from './Components/AnimeSites/TrendingAnimes';
import { NewsProvider } from './NewsContext/NewsContext';
import News from './Components/News/News';

function App() {
  return (
    <NewsProvider>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewNew />} />
            <Route path="/popular" element={<TrendingAnimes />} />
            <Route path="/completed" element={<Popular />} />
            <Route path="/Games" element={<PopularGames />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/About" element={<About />} />
            <Route path="/Action" element={<About />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </NewsProvider>
  );
}

export default App;