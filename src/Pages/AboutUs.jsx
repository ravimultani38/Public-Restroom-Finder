import React from 'react';
import './AboutUs.css'; 

function AboutUs() {
  return (
    <div className="about-us-body">
      <div className="about-us-container">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Public Restroom Near Me</strong>! Our mission is to address a common challenge faced by rideshare and taxi drivers in New York City: finding free, clean, and safe restrooms. We aim to collaborate with local rideshare and yellow cab drivers to improve restroom accessibility for everyone in need.
        </p>
        <p>
          Whether you're a driver on a long shift, a traveler exploring the city, or anyone in urgent need of a restroom, our platform connects you to nearby facilities. We partner with local businesses, parks, and public spaces to ensure that restrooms are available when you need them most.
        </p>
        <p>
          <br/>
          Our features include:
          <ul>
            <li>Location-based restroom search</li>
            <li>Cleanliness ratings and reviews</li>
            <li>Accessibility options for disabled users</li>
            <li>Real-time updates on restroom availability</li>
          </ul>
        </p>
        <p>We are committed to enhancing public space accessibility and improving quality of life for both drivers and the general public. Join us in making New York City more accommodating, one restroom at a time!</p>
      </div>
    </div>
  );
}

export default AboutUs;