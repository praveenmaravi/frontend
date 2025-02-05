// src/services/settingsService.js

import axios from 'axios';

// Base URL for the backend API (this should be configured based on your actual API endpoint)
const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

// Function to fetch the user's settings
export const fetchSettings = async () => {
  try {
    const response = await axios.get(`${API_URL}/settings`);
    return response.data;
  } catch (error) {
    console.error("Error fetching settings:", error);
    throw error; // Rethrow the error so it can be handled elsewhere
  }
};

// Function to update the user's settings
export const updateSettings = async (settings) => {
  try {
    const response = await axios.put(`${API_URL}/settings`, settings);
    return response.data; // Return the updated settings data
  } catch (error) {
    console.error("Error updating settings:", error);
    throw error; // Rethrow the error for handling elsewhere
  }
};

// Function to fetch specific user preferences (e.g., notifications, theme)
export const fetchUserPreferences = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/preferences`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user preferences:", error);
    throw error;
  }
};

// Function to update specific user preferences
export const updateUserPreferences = async (preferences) => {
  try {
    const response = await axios.put(`${API_URL}/user/preferences`, preferences);
    return response.data;
  } catch (error) {
    console.error("Error updating user preferences:", error);
    throw error;
  }
};

// Function to manage third-party integrations (e.g., adding/removing integrations)
export const manageIntegrations = async (action, integrationData) => {
  try {
    let response;
    if (action === 'add') {
      response = await axios.post(`${API_URL}/integrations`, integrationData);
    } else if (action === 'remove') {
      response = await axios.delete(`${API_URL}/integrations`, { data: integrationData });
    }
    return response.data;
  } catch (error) {
    console.error("Error managing integrations:", error);
    throw error;
  }
};
