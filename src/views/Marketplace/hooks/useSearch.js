import { useState, useEffect } from "react";

const useSearch = (items, query, key = "name") => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (!query) {
      setFilteredItems(items);
      return;
    }

    const lowercasedQuery = query.toLowerCase();
    const results = items.filter(item => 
      item[key].toLowerCase().includes(lowercasedQuery)
    );
    
    setFilteredItems(results);
  }, [items, query, key]);

  return filteredItems;
};

export default useSearch;
