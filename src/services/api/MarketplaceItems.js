import apiClient from './apiClient';

// Fetch all marketplace items
export const getMarketplaceItems = async (params = {}) => {
  try {
    const response = await apiClient.get('/marketplace/items', {
      params,
    });
    return response.data; // Return the marketplace items data
  } catch (error) {
    console.error('Error fetching marketplace items:', error);
    throw error; // Rethrow to handle at a higher level
  }
};

// Fetch a single marketplace item by its ID
export const getMarketplaceItemById = async (itemId) => {
  try {
    const response = await apiClient.get(`/marketplace/items/${itemId}`);
    return response.data; // Return the single item data
  } catch (error) {
    console.error(`Error fetching marketplace item with ID ${itemId}:`, error);
    throw error; // Rethrow to handle at a higher level
  }
};

// Create a new marketplace item
export const createMarketplaceItem = async (itemData) => {
  try {
    const response = await apiClient.post('/marketplace/items', itemData);
    return response.data; // Return the created item data
  } catch (error) {
    console.error('Error creating marketplace item:', error);
    throw error; // Rethrow to handle at a higher level
  }
};

// Update an existing marketplace item
export const updateMarketplaceItem = async (itemId, itemData) => {
  try {
    const response = await apiClient.put(`/marketplace/items/${itemId}`, itemData);
    return response.data; // Return the updated item data
  } catch (error) {
    console.error(`Error updating marketplace item with ID ${itemId}:`, error);
    throw error; // Rethrow to handle at a higher level
  }
};

// Delete a marketplace item by ID
export const deleteMarketplaceItem = async (itemId) => {
  try {
    const response = await apiClient.delete(`/marketplace/items/${itemId}`);
    return response.data; // Return a success message or status
  } catch (error) {
    console.error(`Error deleting marketplace item with ID ${itemId}:`, error);
    throw error; // Rethrow to handle at a higher level
  }
};
