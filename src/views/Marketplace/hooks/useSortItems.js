// src/views/Marketplace/hooks/useSortItems.js

import { useState, useEffect } from 'react';

const useSortItems = (items, initialSort = 'popularity') => {
  const [sortOption, setSortOption] = useState(initialSort);
  const [sortedItems, setSortedItems] = useState([]);

  // Sorting function based on selected option
  const sortItems = (items, option) => {
    switch (option) {
      case 'price':
        return [...items].sort((a, b) => a.price - b.price);  // Sorting by price (ascending)
      case 'popularity':
        return [...items].sort((a, b) => b.popularity - a.popularity);  // Sorting by popularity (descending)
      case 'newest':
        return [...items].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));  // Sorting by newest (descending)
      default:
        return items;
    }
  };

  useEffect(() => {
    // Whenever the items or sort option changes, apply the sorting
    setSortedItems(sortItems(items, sortOption));
  }, [items, sortOption]);

  const updateSortOption = (option) => {
    setSortOption(option);
  };

  return {
    sortedItems,
    sortOption,
    updateSortOption,
  };
};

export default useSortItems;
