import apiClient from '../apiClient';  // Import the API client for making requests

// Define the security service functions
const securityService = {
  
  /**
   * Login the user by sending their credentials
   * @param {string} username - The username of the user
   * @param {string} password - The password of the user
   * @returns {Promise} - The API response
   */
  login: async (username, password) => {
    try {
      const response = await apiClient.post('/auth/login', { username, password });
      if (response.data && response.data.token) {
        // Store the JWT token in localStorage or sessionStorage
        localStorage.setItem('auth_token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  /**
   * Register a new user
   * @param {object} userData - The user registration data
   * @returns {Promise} - The API response
   */
  register: async (userData) => {
    try {
      const response = await apiClient.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  /**
   * Logout the user by removing their token from storage
   * @returns {Promise} - The API response
   */
  logout: async () => {
    try {
      // Remove the JWT token from localStorage
      localStorage.removeItem('auth_token');
      return { message: 'Logged out successfully' };
    } catch (error) {
      throw new Error('Logout failed');
    }
  },

  /**
   * Get the currently authenticated user
   * @returns {Promise} - The API response containing user data
   */
  getCurrentUser: async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        throw new Error('No auth token found');
      }
      const response = await apiClient.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch current user');
    }
  },

  /**
   * Refresh the authentication token
   * @returns {Promise} - The API response containing the new token
   */
  refreshToken: async () => {
    try {
      const response = await apiClient.post('/auth/refresh', {
        refresh_token: localStorage.getItem('refresh_token'),
      });
      if (response.data && response.data.token) {
        // Update the auth token in localStorage
        localStorage.setItem('auth_token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to refresh token');
    }
  },

  /**
   * Protect routes that require authentication
   * @returns {boolean} - Whether the user is authenticated
   */
  isAuthenticated: () => {
    const token = localStorage.getItem('auth_token');
    return token ? true : false;
  },
};

export default securityService;
