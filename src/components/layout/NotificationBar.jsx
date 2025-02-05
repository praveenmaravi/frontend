import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NotificationBar = ({ message, type, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration || 5000);
    return () => clearTimeout(timer); // Clean up on unmount
  }, [duration]);

  const notificationStyles = {
    success: {
      backgroundColor: '#4CAF50',
      color: '#fff',
    },
    error: {
      backgroundColor: '#f44336',
      color: '#fff',
    },
    info: {
      backgroundColor: '#2196F3',
      color: '#fff',
    },
    warning: {
      backgroundColor: '#ff9800',
      color: '#fff',
    },
  };

  if (!visible) return null;

  return (
    <div
      style={{
        ...notificationStyles[type] || notificationStyles.info,
        position: 'fixed',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '10px 20px',
        zIndex: '1000',
        borderRadius: '4px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'top 0.3s ease',
      }}
    >
      <span>{message}</span>
    </div>
  );
};

NotificationBar.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  duration: PropTypes.number,
};

NotificationBar.defaultProps = {
  type: 'info',
  duration: 5000, // Default duration of 5 seconds
};

export default NotificationBar;
