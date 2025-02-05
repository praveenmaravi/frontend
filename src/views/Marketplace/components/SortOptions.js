// frontend/src/views/Marketplace/components/SortOptions.js
import React from 'react';

const SortOptions = ({ sortBy, setSortBy }) => {
  const handleSortChange = (event) => {
    setSortBy(event.target.value); // Update the sort option
  };

  return (
    <div className="sort-options flex items-center space-x-2">
      <label htmlFor="sortBy" className="text-gray-700">Sort by:</label>
      <select
        id="sortBy"
        value={sortBy}
        onChange={handleSortChange}
        className="border p-2 rounded-lg"
      >
        <option value="newest">Newest</option>
        <option value="price">Price</option>
        <option value="popularity">Popularity</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortOptions;
