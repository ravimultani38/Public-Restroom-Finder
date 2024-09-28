import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import FindRestrooms from "./Pages/FindRestrooms.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Footer from "./components/Footer.jsx";
import EmergencyMode from "./components/EmergencyMode.jsx";
import './index.css'; 

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-restrooms" element={<FindRestrooms />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;