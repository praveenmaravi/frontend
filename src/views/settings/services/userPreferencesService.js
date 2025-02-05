// src/services/userPreferencesService.js

import axios from 'axios';

// Define the base URL for your API (adjust as needed)
const API_URL = '/api/user/preferences';

// Function to fetch user preferences from the backend
export const getUserPreferences = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;  // Returning the user preferences data from the API
  } catch (error) {
    console.error('Error fetching user preferences:', error);
    throw new Error('Unable to fetch user preferences');
  }
};

// Function to update user preferences
export const updateUserPreferences = async (userId, preferences) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, preferences);
    return response.data;  // Returning the updated user preferences from the API
  } catch (error) {
    console.error('Error updating user preferences:', error);
    throw new Error('Unable to update user preferences');
  }
};

// Function to update specific notification preferences
export const updateNotificationPreferences = async (userId, notificationPreferences) => {
  try {
    const response = await axios.put(`${API_URL}/notifications/${userId}`, notificationPreferences);
    return response.data;  // Returning the updated notification preferences
  } catch (error) {
    console.error('Error updating notification preferences:', error);
    throw new Error('Unable to update notification preferences');
  }
};

// Function to reset user preferences to default values
export const resetUserPreferences = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/reset/${userId}`);
    return response.data;  // Returning confirmation that preferences have been reset
  } catch (error) {
    console.error('Error resetting user preferences:', error);
    throw new Error('Unable to reset user preferences');
  }
};
