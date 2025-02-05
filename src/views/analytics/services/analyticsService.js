// frontend/src/services/analyticsService.js

import axios from 'axios';

// Base URL for your API (you might want to configure this in a separate file)
const API_URL = 'https://api.yourdomain.com/analytics';

/**
 * Fetch general analytics data
 * @param {Object} params - Query parameters for fetching analytics data (e.g., date range, filters)
 * @returns {Promise<Object>} - General analytics data
 */
export const fetchAnalyticsData = async (params) => {
  try {
    const response = await axios.get(`${API_URL}/general`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching general analytics data:', error);
    throw error;
  }
};

/**
 * Fetch chatbot performance metrics (e.g., accuracy, response time)
 * @param {Object} params - Query parameters (e.g., date range)
 * @returns {Promise<Object>} - Performance metrics data
 */
export const fetchPerformanceData = async (params) => {
  try {
    const response = await axios.get(`${API_URL}/performance`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching performance data:', error);
    throw error;
  }
};

/**
 * Fetch user engagement data (e.g., active users, message volume)
 * @param {Object} params - Query parameters (e.g., time range, filters)
 * @returns {Promise<Object>} - Engagement metrics data
 */
export const fetchEngagementData = async (params) => {
  try {
    const response = await axios.get(`${API_URL}/engagement`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching engagement data:', error);
    throw error;
  }
};

/**
 * Fetch sentiment analysis data (e.g., positive/neutral/negative trends)
 * @param {Object} params - Query parameters (e.g., sentiment threshold, time range)
 * @returns {Promise<Object>} - Sentiment analysis data
 */
export const fetchSentimentData = async (params) => {
  try {
    const response = await axios.get(`${API_URL}/sentiment`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching sentiment data:', error);
    throw error;
  }
};
