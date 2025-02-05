// src/views/analytics/services/performanceService.js

import axios from 'axios';

const BASE_URL = 'https://your-backend-api.com/api/'; // Replace with your actual API base URL

/**
 * Fetches chatbot performance metrics.
 * @param {string} chatbotId - The ID of the chatbot.
 * @param {string} startDate - The start date for the performance data.
 * @param {string} endDate - The end date for the performance data.
 * @returns {Promise<Object>} The performance data.
 */
export const fetchPerformanceData = async (chatbotId, startDate, endDate) => {
  try {
    const response = await axios.get(`${BASE_URL}performance`, {
      params: {
        chatbotId,
        startDate,
        endDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching performance data:', error);
    throw new Error('Failed to fetch performance data');
  }
};

/**
 * Fetches overall chatbot accuracy.
 * @param {string} chatbotId - The ID of the chatbot.
 * @returns {Promise<Object>} The accuracy data.
 */
export const fetchChatbotAccuracy = async (chatbotId) => {
  try {
    const response = await axios.get(`${BASE_URL}performance/accuracy`, {
      params: { chatbotId },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching chatbot accuracy:', error);
    throw new Error('Failed to fetch chatbot accuracy');
  }
};

/**
 * Fetches response time data for the chatbot.
 * @param {string} chatbotId - The ID of the chatbot.
 * @returns {Promise<Object>} The response time data.
 */
export const fetchResponseTimeData = async (chatbotId) => {
  try {
    const response = await axios.get(`${BASE_URL}performance/response-time`, {
      params: { chatbotId },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching response time data:', error);
    throw new Error('Failed to fetch response time data');
  }
};
