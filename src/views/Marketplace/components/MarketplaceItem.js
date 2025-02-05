// components/MarketplaceItem.js

import React from 'react';

const MarketplaceItem = ({ item, onViewDetails, onAddIntegration }) => {
  return (
    <div className="flex flex-col border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Marketplace Item Title and Description */}
      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{item.description}</p>

      {/* Marketplace Item Image */}
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="mt-4 h-32 w-full object-cover rounded-md"
        />
      )}

      {/* Item Action Buttons */}
      <div className="mt-4 flex justify-between">
        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(item.id)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          View Details
        </button>

        {/* Add Integration Button */}
        <button
          onClick={() => onAddIntegration(item.id)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Add Integration
        </button>
      </div>
    </div>
  );
};

export default MarketplaceItem;
