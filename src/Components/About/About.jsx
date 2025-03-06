import React from 'react';
import './About.css'; // Import your CSS file for styling
import img from '../../assets/me3.jpg'; // Import your image

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
            Hi, I'm Kojing Moktan, the creator of this An!meSky As a lifelong anime fan, I built this space to share my love for Japanese animation with fellow enthusiasts. Dive in, explore, and let's celebrate the world of anime together!
          </p>
          <p>
            When I'm not binge-watching anime, you'll find me sketching fan art or attending conventions. Let's connect and geek out over our favorite shows!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;