// frontend/src/services/api/analyticsService.js

import apiClient from './apiClient'; // Importing the base API client

// Define the analytics service object
const analyticsService = {
  /**
   * Fetches chatbot performance data.
   * @returns {Promise} - A promise that resolves to the performance data.
   */
  getPerformanceData() {
    return apiClient.get('/analytics/performance')
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching performance data:', error);
        throw error;
      });
  },

  /**
   * Fetches user interaction statistics (e.g., number of conversations, average response time).
   * @returns {Promise} - A promise that resolves to the interaction statistics.
   */
  getUserInteractions() {
    return apiClient.get('/analytics/user-interactions')
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching user interactions:', error);
        throw error;
      });
  },

  /**
   * Fetches engagement data (e.g., active users, session duration).
   * @returns {Promise} - A promise that resolves to the engagement data.
   */
  getEngagementData() {
    return apiClient.get('/analytics/engagement')
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching engagement data:', error);
        throw error;
      });
  },

  /**
   * Fetches chatbot error statistics (e.g., failure rates, error messages).
   * @returns {Promise} - A promise that resolves to the error data.
   */
  getErrorData() {
    return apiClient.get('/analytics/errors')
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching error data:', error);
        throw error;
      });
  },

  /**
   * Fetches historical analytics data for a specified time range.
   * @param {string} startDate - The start date in 'YYYY-MM-DD' format.
   * @param {string} endDate - The end date in 'YYYY-MM-DD' format.
   * @returns {Promise} - A promise that resolves to the historical data.
   */
  getHistoricalData(startDate, endDate) {
    return apiClient.get(`/analytics/history?startDate=${startDate}&endDate=${endDate}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching historical data:', error);
        throw error;
      });
  }
};

export default analyticsService;
