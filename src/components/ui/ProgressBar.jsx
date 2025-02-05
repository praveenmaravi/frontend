// frontend/src/components/ui/ProgressBar.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css'; // Optional: if you want to style the progress bar

const ProgressBar = ({ progress, color, height, showPercentage }) => {
  const progressStyle = {
    width: `${progress}%`,
    backgroundColor: color || '#4caf50', // default to green
    height: height || '10px', // default height
    borderRadius: '5px',
  };

  return (
    <div className="progress-bar-container" style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
      <div className="progress-bar-fill" style={progressStyle}></div>
      {showPercentage && (
        <div className="progress-bar-percentage" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          {progress}%
        </div>
      )}
    </div>
  );
};

// Prop Types for validation
ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
  showPercentage: PropTypes.bool,
};

ProgressBar.defaultProps = {
  color: '#4caf50',
  height: '10px',
  showPercentage: true,
};

export default ProgressBar;
