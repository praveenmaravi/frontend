import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.vision-ai.com";

/**
 * Fetch all available AI plugins from the marketplace.
 * @returns {Promise} - List of AI plugins
 */
export const getMarketplacePlugins = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/marketplace/plugins`);
    return response.data;
  } catch (error) {
    console.error("Error fetching marketplace plugins:", error);
    throw error;
  }
};

/**
 * Fetch details of a specific plugin by ID.
 * @param {string} pluginId - Unique plugin identifier
 * @returns {Promise} - Plugin details
 */
export const getPluginDetails = async (pluginId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/marketplace/plugins/${pluginId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching plugin details for ${pluginId}:`, error);
    throw error;
  }
};

/**
 * Purchase a plugin from the marketplace.
 * @param {string} userId - User making the purchase
 * @param {string} pluginId - Plugin being purchased
 * @param {string} paymentMethod - Payment method (credit card, PayPal, etc.)
 * @returns {Promise} - Transaction response
 */
export const purchasePlugin = async (userId, pluginId, paymentMethod) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/marketplace/purchase`, {
      userId,
      pluginId,
      paymentMethod,
    });
    return response.data;
  } catch (error) {
    console.error("Error purchasing plugin:", error);
    throw error;
  }
};

/**
 * Fetch user's purchased plugins.
 * @param {string} userId - User ID
 * @returns {Promise} - List of purchased plugins
 */
export const getUserPurchasedPlugins = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/marketplace/user/${userId}/purchases`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user purchased plugins:", error);
    throw error;
  }
};

/**
 * Install a purchased plugin for the user.
 * @param {string} userId - User ID
 * @param {string} pluginId - Plugin ID
 * @returns {Promise} - Installation response
 */
export const installPlugin = async (userId, pluginId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/marketplace/install`, {
      userId,
      pluginId,
    });
    return response.data;
  } catch (error) {
    console.error("Error installing plugin:", error);
    throw error;
  }
};

/**
 * Uninstall a plugin from the user's account.
 * @param {string} userId - User ID
 * @param {string} pluginId - Plugin ID
 * @returns {Promise} - Uninstallation response
 */
export const uninstallPlugin = async (userId, pluginId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/marketplace/uninstall`, {
      userId,
      pluginId,
    });
    return response.data;
  } catch (error) {
    console.error("Error uninstalling plugin:", error);
    throw error;
  }
};

/**
 * Fetch marketplace updates (new plugins, promotions, etc.).
 * @returns {Promise} - List of marketplace updates
 */
export const getMarketplaceUpdates = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/marketplace/updates`);
    return response.data;
  } catch (error) {
    console.error("Error fetching marketplace updates:", error);
    throw error;
  }
};
