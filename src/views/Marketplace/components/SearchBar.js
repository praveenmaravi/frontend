// src/views/Marketplace/components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Handle search input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Trigger the search in the parent component
  };

  // Handle form submit (optional, if you want to handle pressing enter)
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search marketplace items..."
          value={query}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded-md w-full"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute top-2 right-3 text-gray-500"
          >
            ✕
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
