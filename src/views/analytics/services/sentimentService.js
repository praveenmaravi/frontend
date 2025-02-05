// src/views/analytics/services/sentimentService.js

import axios from 'axios';

/**
 * Fetch sentiment analysis data from the backend
 * @param {string} startDate - Start date for the analysis range (optional)
 * @param {string} endDate - End date for the analysis range (optional)
 * @returns {Promise<Object>} - Sentiment analysis data
 */
export const fetchSentimentData = async (startDate, endDate) => {
  try {
    const response = await axios.get('/api/analytics/sentiment', {
      params: { startDate, endDate }
    });
    
    if (response.status === 200) {
      return response.data; // Sentiment data (positive, neutral, negative)
    }
    throw new Error('Failed to fetch sentiment data');
  } catch (error) {
    console.error('Error fetching sentiment data:', error);
    throw error; // Re-throw error for handling in the component
  }
};

/**
 * Fetch sentiment trends over time (e.g., daily, weekly)
 * @param {string} period - Period for trends (e.g., "daily", "weekly")
 * @returns {Promise<Object>} - Sentiment trends data
 */
export const fetchSentimentTrends = async (period = 'daily') => {
  try {
    const response = await axios.get('/api/analytics/sentiment/trends', {
      params: { period }
    });

    if (response.status === 200) {
      return response.data; // Sentiment trends data (time series of positive/negative/neutral)
    }
    throw new Error('Failed to fetch sentiment trends');
  } catch (error) {
    console.error('Error fetching sentiment trends:', error);
    throw error; // Re-throw error for handling in the component
  }
};
