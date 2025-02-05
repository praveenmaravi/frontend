// src/views/Marketplace/hooks/useCategoryFilter.js

import { useState, useEffect } from 'react';

/**
 * Custom hook to handle category filtering logic.
 * It manages the selected category and provides a filtered list of marketplace items.
 * 
 * @param {Array} items - List of all marketplace items.
 * @param {Array} categories - List of available categories.
 * @returns {Object} - Contains filtered items, selected category, and a function to change the category.
 */
const useCategoryFilter = (items, categories) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    // Filter items based on the selected category
    if (selectedCategory === 'All') {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter(item => item.category === selectedCategory)
      );
    }
  }, [selectedCategory, items]);

  /**
   * Handler function to update the selected category.
   * @param {string} category - The category to filter by.
   */
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return {
    filteredItems,
    selectedCategory,
    categories,
    handleCategoryChange
  };
};

export default useCategoryFilter;
