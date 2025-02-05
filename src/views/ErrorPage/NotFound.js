// frontend/src/views/ErrorPage/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Optionally import a CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="back-home-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
