// services/marketplaceAPI.js

import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com";

/**
 * Fetch all marketplace items with optional filters, sorting, and pagination.
 * @param {Object} params - Query parameters for filtering, sorting, and pagination.
 * @returns {Promise<Object>} - Marketplace items data.
 */
export const fetchMarketplaceItems = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/marketplace/items`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching marketplace items:", error);
    throw error;
  }
};

/**
 * Fetch available marketplace categories.
 * @returns {Promise<Object>} - List of categories.
 */
export const fetchMarketplaceCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/marketplace/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching marketplace categories:", error);
    throw error;
  }
};

/**
 * Fetch details of a specific marketplace item by ID.
 * @param {string} itemId - The ID of the marketplace item.
 * @returns {Promise<Object>} - Marketplace item details.
 */
export const fetchMarketplaceItemDetails = async (itemId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/marketplace/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching marketplace item details:", error);
    throw error;
  }
};
