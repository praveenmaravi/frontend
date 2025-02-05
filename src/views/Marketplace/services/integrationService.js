import axios from 'axios';

const API_BASE_URL = '/api/integrations';

const integrationService = {
  /**
   * Fetch all integrations the user has added
   * @returns {Promise} List of user-integrated services
   */
  getUserIntegrations: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user integrations:', error);
      throw error;
    }
  },

  /**
   * Add a new integration from the marketplace
   * @param {string} integrationId - The ID of the marketplace item to integrate
   * @returns {Promise} Response status
   */
  addIntegration: async (integrationId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/add`, { integrationId });
      return response.data;
    } catch (error) {
      console.error('Error adding integration:', error);
      throw error;
    }
  },

  /**
   * Remove an existing integration
   * @param {string} integrationId - The ID of the integration to remove
   * @returns {Promise} Response status
   */
  removeIntegration: async (integrationId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/remove/${integrationId}`);
      return response.data;
    } catch (error) {
      console.error('Error removing integration:', error);
      throw error;
    }
  },
};

export default integrationService;
