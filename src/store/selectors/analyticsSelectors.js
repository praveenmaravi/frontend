// selectors/analyticsSelectors.js

// Selector to get all analytics data
export const getAllAnalyticsData = (state) => state.analytics.data;

// Selector to get user engagement metrics
export const getUserEngagementMetrics = (state) => state.analytics.userEngagement;

// Selector to get bot performance metrics
export const getBotPerformanceMetrics = (state) => state.analytics.botPerformance;

// Selector to get error logs related to analytics
export const getAnalyticsErrorLogs = (state) => state.analytics.errorLogs;

// Selector to get real-time performance data
export const getRealTimePerformance = (state) => state.analytics.realTimePerformance;

// Selector to check if analytics data is loading
export const isAnalyticsLoading = (state) => state.analytics.isLoading;

// Selector to check if there’s an error in fetching analytics data
export const isAnalyticsError = (state) => state.analytics.isError;
