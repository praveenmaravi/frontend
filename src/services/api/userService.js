// userService.js

import apiClient from './apiClient';

/**
 * Authenticates the user with the backend.
 * @param {Object} credentials - User login credentials (username/email, password).
 * @returns {Promise} - A promise that resolves to the user authentication data.
 */
export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
};

/**
 * Registers a new user.
 * @param {Object} userDetails - New user details (username, email, password, etc.).
 * @returns {Promise} - A promise that resolves to the registered user data.
 */
export const register = async (userDetails) => {
  try {
    const response = await apiClient.post('/auth/register', userDetails);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed: ' + error.message);
  }
};

/**
 * Fetches the current user's profile information.
 * @returns {Promise} - A promise that resolves to the user's profile data.
 */
export const getProfile = async () => {
  try {
    const response = await apiClient.get('/user/profile');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch profile: ' + error.message);
  }
};

/**
 * Updates the user's profile information.
 * @param {Object} updatedProfile - The profile details to update (e.g., name, email, etc.).
 * @returns {Promise} - A promise that resolves to the updated profile data.
 */
export const updateProfile = async (updatedProfile) => {
  try {
    const response = await apiClient.put('/user/profile', updatedProfile);
    return response.data;
  } catch (error) {
    throw new Error('Profile update failed: ' + error.message);
  }
};

/**
 * Logs the user out of the system.
 * @returns {Promise} - A promise that resolves to the logout status.
 */
export const logout = async () => {
  try {
    const response = await apiClient.post('/auth/logout');
    return response.data;
  } catch (error) {
    throw new Error('Logout failed: ' + error.message);
  }
};
