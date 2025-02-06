// frontend/src/services/api/MarketplaceItems.js

import axios from 'axios'; // Importing axios for API calls
import { API_BASE_URL } from '../config'; // Assuming you have a config file with base URL
import { handleError } from '../utils/errorHandler'; // Utility for error handling

const marketplaceItemsEndpoint = `${API_BASE_URL}/marketplace/items`; // API endpoint for marketplace items

// Helper function to handle API requests with common logic
const apiRequest = async (url, params = {}, method = 'GET') => {
  try {
    const response = await axios({
      method,
      url,
      params,
    });
    return response.data; // Return the data from the response
  } catch (error) {
    // Call utility function for error handling
    handleError(error);
    throw error; // Throw error to be caught in the calling function
  }
};

// Function to get all marketplace items with pagination and filtering support
export const fetchMarketplaceItems = async (page = 1, limit = 10, filters = {}) => {
  const params = { page, limit, ...filters }; // Merge filters, pagination with default values
  return apiRequest(marketplaceItemsEndpoint, params);
};

// Function to get details of a specific marketplace item
export const fetchMarketplaceItemDetails = async (itemId) => {
  const url = `${marketplaceItemsEndpoint}/${itemId}`;
  return apiRequest(url);
};

// Function to search marketplace items based on a query
export const searchMarketplaceItems = async (query, page = 1, limit = 10) => {
  const params = { query, page, limit };
  return apiRequest(`${marketplaceItemsEndpoint}/search`, params);
};

// Function to get filtered items based on specific categories
export const fetchMarketplaceItemsByCategory = async (category, page = 1, limit = 10) => {
  const params = { category, page, limit };
  return apiRequest(`${marketplaceItemsEndpoint}/category`, params);
};

// Function to fetch recommended marketplace items (e.g., based on AI recommendation engine)
export const fetchRecommendedMarketplaceItems = async (userId, page = 1, limit = 10) => {
  const params = { userId, page, limit };
  return apiRequest(`${marketplaceItemsEndpoint}/recommendations`, params);
};

// Function to create a new marketplace item (for admin use)
export const createMarketplaceItem = async (itemData) => {
  try {
    const response = await axios.post(marketplaceItemsEndpoint, itemData);
    return response.data; // Return the created item data
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Function to update an existing marketplace item (for admin use)
export const updateMarketplaceItem = async (itemId, updatedData) => {
  const url = `${marketplaceItemsEndpoint}/${itemId}`;
  try {
    const response = await axios.put(url, updatedData);
    return response.data; // Return the updated item data
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Function to delete a marketplace item (for admin use)
export const deleteMarketplaceItem = async (itemId) => {
  const url = `${marketplaceItemsEndpoint}/${itemId}`;
  try {
    const response = await axios.delete(url);
    return response.data; // Return confirmation of item deletion
  } catch (error) {
    handleError(error);
    throw error;
  }
};
