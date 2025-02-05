// src/services/analyticsService.js

import axios from 'axios';

// Base URL for the analytics API (replace with your actual endpoint)
const ANALYTICS_API_URL = 'https://your-analytics-api.com/track';

/**
 * Tracks user interaction with the chatbot.
 * 
 * @param {Object} interactionData - The data to be tracked (e.g., message, sentiment, response time).
 * @param {string} interactionData.userMessage - The user's message.
 * @param {string} interactionData.botResponse - The bot's response.
 * @param {string} interactionData.sentiment - Sentiment analysis result (happy, sad, neutral).
 * @param {number} interactionData.responseTime - The time taken for the bot to respond (in ms).
 * @param {string} interactionData.userId - The user’s unique ID.
 */
export const trackInteraction = async (interactionData) => {
  try {
    const response = await axios.post(ANALYTICS_API_URL, interactionData);
    console.log('Interaction tracked successfully:', response.data);
  } catch (error) {
    console.error('Error tracking interaction:', error);
  }
};

/**
 * Tracks chatbot performance, such as average response time, user engagement, etc.
 * 
 * @param {Object} performanceData - Data related to the bot’s performance.
 * @param {number} performanceData.averageResponseTime - The bot's average response time.
 * @param {number} performanceData.messagesProcessed - Number of messages the bot has processed.
 * @param {number} performanceData.activeUsers - Number of active users interacting with the bot.
 */
export const trackPerformance = async (performanceData) => {
  try {
    const response = await axios.post(`${ANALYTICS_API_URL}/performance`, performanceData);
    console.log('Performance tracked successfully:', response.data);
  } catch (error) {
    console.error('Error tracking performance:', error);
  }
};

/**
 * Tracks sentiment analysis data over time, such as overall mood trends.
 * 
 * @param {Object} sentimentData - Data related to sentiment analysis.
 * @param {string} sentimentData.sentiment - The overall sentiment (e.g., positive, negative, neutral).
 * @param {number} sentimentData.count - The count of occurrences of this sentiment.
 */
export const trackSentiment = async (sentimentData) => {
  try {
    const response = await axios.post(`${ANALYTICS_API_URL}/sentiment`, sentimentData);
    console.log('Sentiment tracked successfully:', response.data);
  } catch (error) {
    console.error('Error tracking sentiment:', error);
  }
};

