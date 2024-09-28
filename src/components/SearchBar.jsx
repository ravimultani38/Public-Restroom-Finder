import React, { useState } from 'react';

function SearchBar() {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    alert(`Searching for restrooms near: ${location}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
