// frontend/src/store/selectors/marketplaceSelectors.js

// Selector to get all marketplace items
export const getMarketplaceItems = (state) => state.marketplace.items;

// Selector to get all marketplace categories
export const getMarketplaceCategories = (state) => state.marketplace.categories;

// Selector to get the details of a selected marketplace item
export const getSelectedMarketplaceItem = (state) => state.marketplace.selectedItem;

// Selector to get marketplace search results
export const getMarketplaceSearchResults = (state) => state.marketplace.searchResults;

// Selector to get the loading state for marketplace data
export const getMarketplaceLoadingState = (state) => state.marketplace.isLoading;

// Selector to get error state for marketplace data
export const getMarketplaceErrorState = (state) => state.marketplace.error;
