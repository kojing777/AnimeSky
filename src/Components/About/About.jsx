import React from 'react';
import './About.css'; // Import your CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img
            src="path-to-your-image.jpg" // Replace with the path to your image
            alt="Site Owner"
            className="owner-image"
          />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm [Your Name], the proud owner of this anime site. As a lifelong anime
            enthusiast, I created this platform to share my passion with fellow fans. Whether
            you're here to explore new series, discuss your favorite characters, or dive into
            the world of Japanese animation, you're in the right place!
          </p>
          <p>
            My journey with anime began when I was just a kid, and it has been a significant
            part of my life ever since. From classic series to the latest releases, I love
            exploring all genres and sharing my thoughts with the community.
          </p>
          <p>
            When I'm not watching anime, you can find me drawing fan art, cosplaying, or
            attending anime conventions. I'm excited to connect with all of you and build a
            vibrant community of anime lovers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;