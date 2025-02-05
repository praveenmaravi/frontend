// frontend/src/services/api/settingsService.js

import apiClient from './apiClient';  // Import the base API client

/**
 * Fetch user settings from the backend.
 * @returns {Promise} A promise that resolves with the user settings data.
 */
export const getUserSettings = async () => {
  try {
    const response = await apiClient.get('/user/settings');
    return response.data;
  } catch (error) {
    console.error("Error fetching user settings:", error);
    throw error;  // Rethrow to handle it higher up
  }
};

/**
 * Update user settings in the backend.
 * @param {Object} settings - The settings object to update.
 * @returns {Promise} A promise that resolves with the updated settings data.
 */
export const updateUserSettings = async (settings) => {
  try {
    const response = await apiClient.put('/user/settings', settings);
    return response.data;
  } catch (error) {
    console.error("Error updating user settings:", error);
    throw error;  // Rethrow to handle it higher up
  }
};

/**
 * Reset user settings to default values.
 * @returns {Promise} A promise that resolves when settings are reset.
 */
export const resetUserSettings = async () => {
  try {
    const response = await apiClient.delete('/user/settings');
    return response.data;
  } catch (error) {
    console.error("Error resetting user settings:", error);
    throw error;  // Rethrow to handle it higher up
  }
};
