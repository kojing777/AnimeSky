import React from 'react';
import './About.css'; 
import img from '../../assets/me3.jpg'; 
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img
            src={img}
            alt="Site Owner"
            className="owner-image"
          />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I'm Kojing Moktan, the creator of this An!meSky. As a lifelong anime fan, I built this space to share my love for Japanese animation with fellow enthusiasts. Dive in, explore, and let's celebrate the world of anime together!
          </p>
          <p>
            When I'm not binge-watching anime, you'll find me sketching fan art or attending conventions. Let's connect and geek out over our favorite shows!
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/kojing777"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;