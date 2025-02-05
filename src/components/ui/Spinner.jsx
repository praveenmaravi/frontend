// Spinner.jsx
import React from 'react';
import './Spinner.css'; // Include spinner styles

const Spinner = ({ size = 'medium', color = '#007bff', loadingText = 'Loading...' }) => {
  return (
    <div className={`spinner-container ${size}`}>
      <div className="spinner" style={{ borderColor: color }}></div>
      {loadingText && <div className="loading-text" style={{ color }}>{loadingText}</div>}
    </div>
  );
};

export default Spinner;
