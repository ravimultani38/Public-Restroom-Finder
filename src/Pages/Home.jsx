import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RateTheRestroom from "../components/RateTheRestroom"; 

function Home() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleEmergency = () => {
    alert("Emergency Mode Activated! Searching for the nearest restroom...");
  };

  const handleFindRestrooms = () => {
    if (location.trim() === "") {
      alert("Please enter a location.");
      return;
    }
    alert(`Searching for restrooms near: ${location}`);
  };

  const handleLoginSignup = () => {
    navigate("/login-signup");
  };

  return (
    <div className="Home-background">
      <div className="home">
        <header className="header">
          <div className="logo">
            <img
              src="/public_restroom_finder.png"
              alt="Public Restroom Finder Logo"
              className="logo-img"
              style={{ width: "100%", height: "auto", maxWidth: "500px" }}
            />
          </div>
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
            <button className="find-button" onClick={handleFindRestrooms}>
              Find
            </button>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
            <h1>Find Clean Public Restrooms Near You</h1>
            <h2>Locate, Rate, and Review Restrooms with Real-Time Data</h2>
            <button onClick={handleEmergency} className="emergency-button">
              Emergency Mode 🚽
            </button>
          </div>
        </section>

        {/* New Ratings Section */}
        <RateTheRestroom />

        <section className="features">
          <h3>Core Features</h3>
          <div className="feature-cards">
            <div className="feature-card-1">
              <img src="/network.png" alt="Crowdsourced Data" className="feature-icon" />
              <h4>Crowdsourced Data</h4>
              <p>Locate the nearest restroom based on real-time user data.</p>
            </div>
            <div className="feature-card-2">
              <img src="/star_rating.png" alt="Cleanliness Ratings" className="feature-icon" />
              <h4>Cleanliness Ratings</h4>
              <p>Access reviews and cleanliness ratings for public restrooms.</p>
            </div>
            <div className="feature-card-3">
              <img src="/google_map.png" alt="Google Maps Integration" className="feature-icon" />
              <h4>Google Maps Integration</h4>
              <p>Get directions to the nearest public restroom facility quickly.</p>
            </div>
            <div className="feature-card-4">
              <img src="/ambulance.png" alt="Emergency Mode" className="feature-icon" />
              <h4>Emergency Mode</h4>
              <p>Quick access to the nearest restroom regardless of ratings.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-left">
            Built with ❤️ by our community of restroom finders.
          </div>
          <div className="footer-right">
            © 2024 Public Restroom Finder. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
