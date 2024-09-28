import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 



function Home() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate(); 
  const handleEmergency = () => {
    alert('Emergency Mode Activated! Searching for the nearest restroom...');
  };

  const handleFindRestrooms = () => {
    if (location.trim() === '') {
      alert('Please enter a location.');
      return;
    }
    alert(`Searching for restrooms near: ${location}`);
  };

  const handleLoginSignup = () => {
    navigate('/login-signup'); 
  };

  return (
    <div className="home">
      <header className="header">
        <div className="logo">Public Restroom Finder</div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/find-restrooms">Find Restrooms</a>
          <a href="/about-us">About Us</a>
        </nav>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter location..."
            className="search-bar"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="find-button" onClick={handleFindRestrooms}>Find</button>
          <button className="login-button" onClick={handleLoginSignup}>Sign Up / Login</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Find Clean Public Restrooms Near You</h1>
          <h2>Locate, Rate, and Review Restrooms with Real-Time Data</h2>
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
      <footer class="footer">
  <div class="footer-left">Built with ❤️ by our community of restroom finders.</div>
  <div class="footer-right">© 2024 Public Restroom Finder. All rights reserved.</div>
</footer>
    </div>
  );
}

export default Home;
