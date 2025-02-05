// frontend/src/views/ChatbotInterface/components/Notifications/NotificationBanner.js

import React from 'react';

const NotificationBanner = ({ message, type, onClose }) => {
  // Define styles based on notification type (success, error, info)
  const notificationStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm p-4 rounded-lg shadow-lg ${notificationStyles[type]}`}
      role="alert"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{message}</span>
        </div>
        <button
          onClick={onClose}
          className="text-lg font-semibold text-white hover:text-opacity-80"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
