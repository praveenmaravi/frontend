// frontend/src/views/ErrorPage/Maintenance.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Maintenance.css';  // Optional: For custom styling

const Maintenance = () => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-message">
        <h1>We'll Be Back Soon!</h1>
        <p>
          Our service is currently undergoing scheduled maintenance. We apologize for the inconvenience.
        </p>
        <p>
          Please check back later or contact support if you have any urgent concerns.
        </p>
        <Link to="/" className="back-home-link">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Maintenance;
