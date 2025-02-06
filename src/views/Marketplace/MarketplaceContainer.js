import React, { useState, useEffect } from "react";
import MarketplacePage from "./MarketplacePage";
import { useMarketplaceItems } from "./hooks/useMarketplaceItems";
import { useCategoryFilter } from "./hooks/useCategoryFilter";
import { useSortItems } from "./hooks/useSortItems";
import { useSearch } from "./hooks/useSearch";

const MarketplaceContainer = () => {
  const { items, fetchItems, loading } = useMarketplaceItems();
  const { filteredItems, filterByCategory } = useCategoryFilter(items);
  const { sortedItems, sortItems } = useSortItems(filteredItems);
  const { searchedItems, searchQuery, setSearchQuery } = useSearch(sortedItems);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <MarketplacePage
      items={searchedItems}
      loading={loading}
      onCategoryFilter={filterByCategory}
      onSortChange={sortItems}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default MarketplaceContainer;
