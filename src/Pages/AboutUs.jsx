import React from 'react';
import './AboutUs.css'; 

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Welcome to the <strong>Public Restroom Finder</strong> app! 
        Our mission is to help users easily locate clean and accessible public restrooms, no matter where they are.
      </p>
      <p>
        Whether you're traveling, out for a day of shopping, or simply need to find the nearest restroom, our app provides a fast and reliable way to locate one.
        We are committed to making the search for restrooms easier and more convenient for everyone.
      </p>
      <p>
        Our features include:
        <ul>
          <li>Location-based restroom search</li>
          <li>Cleanliness ratings and reviews</li>
          <li>Accessibility options for disabled users</li>
          <li>Real-time updates on restroom availability</li>
        </ul>
      </p>
      <p>We aim to make public spaces more accessible, one restroom at a time!</p>
    </div>
  );
}

export default AboutUs;
