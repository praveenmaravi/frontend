// src/views/analytics/components/ChartCard.js
import React from 'react';

const ChartCard = ({ title, description, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="relative">
        {children} {/* This will render the chart or other components passed as children */}
      </div>
    </div>
  );
};

export default ChartCard;
