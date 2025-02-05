import axios from 'axios';

// Base API URL
const BASE_URL = '/api/integrations';

/**
 * Fetches the list of available integrations.
 * @returns {Promise<Array>} List of available integrations
 */
export const fetchIntegrations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching integrations:', error);
    throw new Error('Failed to fetch integrations.');
  }
};

/**
 * Adds a new integration by providing the integration's details.
 * @param {Object} integrationData Data for the new integration
 * @returns {Promise<Object>} The added integration's details
 */
export const addIntegration = async (integrationData) => {
  try {
    const response = await axios.post(`${BASE_URL}/add`, integrationData);
    return response.data;
  } catch (error) {
    console.error('Error adding integration:', error);
    throw new Error('Failed to add integration.');
  }
};

/**
 * Removes an integration by its ID.
 * @param {string} integrationId The ID of the integration to remove
 * @returns {Promise<void>} Resolves when the integration is removed
 */
export const removeIntegration = async (integrationId) => {
  try {
    await axios.delete(`${BASE_URL}/remove/${integrationId}`);
  } catch (error) {
    console.error('Error removing integration:', error);
    throw new Error('Failed to remove integration.');
  }
};

/**
 * Fetches the status/details of a specific integration by its ID.
 * @param {string} integrationId The ID of the integration
 * @returns {Promise<Object>} The integration's details
 */
export const getIntegrationStatus = async (integrationId) => {
  try {
    const response = await axios.get(`${BASE_URL}/status/${integrationId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching integration status:', error);
    throw new Error('Failed to fetch integration status.');
  }
};

/**
 * Updates the settings or configuration of an integration.
 * @param {string} integrationId The ID of the integration to update
 * @param {Object} settings The settings to update
 * @returns {Promise<Object>} The updated integration details
 */
export const updateIntegrationSettings = async (integrationId, settings) => {
  try {
    const response = await axios.put(`${BASE_URL}/update/${integrationId}`, settings);
    return response.data;
  } catch (error) {
    console.error('Error updating integration settings:', error);
    throw new Error('Failed to update integration settings.');
  }
};
