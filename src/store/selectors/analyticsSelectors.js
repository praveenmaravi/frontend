// frontend/src/store/selectors/analyticsSelectors.js

// Selector to get the user engagement data
export const getUserEngagementData = (state) => state.analytics.userEngagement;

// Selector to get the sentiment analysis data
export const getSentimentAnalysis = (state) => state.analytics.sentimentAnalysis;

// Selector to get the chatbot's performance data
export const getChatbotPerformance = (state) => state.analytics.chatbotPerformance;

// Selector to get all analytics data (if you need all data at once)
export const getAllAnalyticsData = (state) => state.analytics;

// Example for handling more specific data retrieval
export const getDailyActiveUsers = (state) => state.analytics.dailyActiveUsers;
export const getMostPopularIntents = (state) => state.analytics.mostPopularIntents;
