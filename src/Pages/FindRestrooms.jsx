import React, { useState } from 'react';

function FindRestrooms() {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    alert(`Searching for restrooms near: ${location}`);
  };

  return (
    <div>
      <h2>Find Restrooms</h2>
      <input
        type="text"
        placeholder="Enter your location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Find Restrooms</button>
    </div>
  );
}

export default FindRestrooms;
