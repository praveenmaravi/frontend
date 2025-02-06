// frontend/src/views/Marketplace/components/CategoryFilter.js

import React, { useState } from 'react';
import { useCategoryFilter } from '../hooks/useCategoryFilter'; // Custom hook for handling category filtering

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { categories, filterItemsByCategory } = useCategoryFilter(); // Get categories and filtering function

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterItemsByCategory(category); // Apply filter when category changes
  };

  return (
    <div className="category-filter">
      <label htmlFor="category-select" className="block text-sm font-medium text-gray-700">
        Filter by Category
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
