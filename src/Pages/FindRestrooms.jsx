import React, { useState } from "react";
import RateTheRestroom from "../components/RateTheRestroom";
import './FindRestrooms.css';

function FindRestrooms() {
  const [location, setLocation] = useState("");
  const [restrooms, setRestrooms] = useState([]);
  const [selectedRestroom, setSelectedRestroom] = useState(null);

  const handleSearch = async () => {
    // Call API to fetch restrooms based on the location
    const response = await fetch(`API_ENDPOINT/restrooms?location=${location}`);
    const data = await response.json();
    setRestrooms(data);
  };

  const handleRateRestroom = (restroom) => {
    setSelectedRestroom(restroom);
  };

  return (
    <div className="find-restrooms"> 
      <input
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h2>Available Restrooms</h2>
      <ul>
        {restrooms.map((restroom) => (
          <li key={restroom.id}>
            <span>{restroom.name}</span>
            <button onClick={() => handleRateRestroom(restroom)}>Rate</button>
          </li>
        ))}
      </ul>

      {selectedRestroom && (
        <RateTheRestroom restroom={selectedRestroom} />
      )}
    </div>
  );
}

export default FindRestrooms;

