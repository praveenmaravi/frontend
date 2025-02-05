// src/views/settings/components/SettingsCard.js

import React from 'react';

// Card component for settings sections
const SettingsCard = ({ title, children, description, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 mb-6 ${className} transition-all duration-300 ease-in-out hover:shadow-xl`}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}
      <div>{children}</div>
    </div>
  );
};

export default SettingsCard;
