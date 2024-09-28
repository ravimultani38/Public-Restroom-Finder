import React, { useState } from 'react';
import backgroundImage from "../assets";

function Home() {
  // State to hold the search input
  const [location, setLocation] = useState('');
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh' // or whatever height you prefer
  };

  const handleEmergency = () => {
    alert('Emergency Mode Activated! Searching for the nearest restroom...');
  };

  const handleFindRestrooms = () => {
    if (location.trim() === '') {
      alert('Please enter a location.');
      return;
    }
    alert(`Searching for restrooms near: ${location}`);
    // Here you can implement your logic to search for restrooms based on the entered location
  };

  return (
    <div className="home">
      <header className="header">
        <div className="logo">Public Restroom Finder</div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/find-restrooms">Find Restrooms</a>
          <a href="/about-us">About Us</a>
          <button className="login-button">Sign Up / Login</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Find Clean Public Restrooms Near You</h1>
          <h2>Locate, Rate, and Review Restrooms with Real-Time Data</h2>
          <input type="text" placeholder="Enter location..." className="search-bar" />
          <button className="find-button">Find Restrooms</button>
          <button onClick={handleEmergency} className="emergency-button">Emergency Mode 🚽</button>
        </div>
      </section>

      <section className="features">
        <h3>Core Features</h3>
        <div className="feature-cards">
          <div className="feature-card">
            <h4>Crowdsourced Data</h4>
            <p>Locate the nearest restroom based on real-time user data.</p>
          </div>
          <div className="feature-card">
            <h4>Cleanliness Ratings</h4>
            <p>Access reviews and cleanliness ratings for public restrooms.</p>
          </div>
          <div className="feature-card">
            <h4>Google Maps Integration</h4>
            <p>Get directions to the nearest facility.</p>
          </div>
          <div className="feature-card">
            <h4>Emergency Mode</h4>
            <p>Quick access to the nearest restroom regardless of ratings.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Built with ❤️ by our community of restroom finders.</p>
      </footer>
    </div>
  );
}

export default Home;
