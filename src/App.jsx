// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import EmergencyMode from "./components/EmergencyMode.jsx"; 
import AboutUs from "./Pages/AboutUs.jsx"; 
import FindRestrooms from "./Pages/FindRestrooms.jsx"; 
import Home from "./Pages/Home.jsx"; 



function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-restrooms" element={<FindRestrooms />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}


export default App;
