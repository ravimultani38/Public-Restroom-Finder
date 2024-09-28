import React from 'react';
import './FindRestrooms.css';

const FindRestrooms = () => {
  return (
    <div className="find-restrooms-body">
      <div className="find-restrooms-container">
        <h2 className="find-restrooms-title">Find Restrooms</h2>
        <input
          type="text"
          className="find-restrooms-input"
          placeholder="Enter location"
        />
        <button className="find-restrooms-button">Search</button>
      </div>
    </div>
  );
};

export default FindRestrooms;
