import axios from 'axios';

const BASE_URL = '/api/dashboard'; // Adjust this to the appropriate base URL for your backend

// Function to fetch dashboard overview data (e.g., total users, messages processed)
const getOverviewData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/overview`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch overview data: ' + error.message);
  }
};

// Function to fetch performance data (e.g., response time, bot performance)
const getPerformanceData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/performance`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch performance data: ' + error.message);
  }
};

// Function to fetch user engagement data (e.g., daily active users, sentiment)
const getEngagementData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/engagement`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch engagement data: ' + error.message);
  }
};

// Function to fetch recent activity data (e.g., recent interactions or admin actions)
const getRecentActivity = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/recent-activity`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch recent activity data: ' + error.message);
  }
};

// Function to fetch user metrics data (e.g., active users, user satisfaction)
const getUserMetrics = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user-metrics`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user metrics: ' + error.message);
  }
};

// Main function to fetch all dashboard data at once
const getDashboardData = async () => {
  try {
    const [overview, performance, engagement, recentActivity, userMetrics] = await Promise.all([
      getOverviewData(),
      getPerformanceData(),
      getEngagementData(),
      getRecentActivity(),
      getUserMetrics(),
    ]);

    return {
      overviewStats: overview,
      performanceData: performance,
      engagementData: engagement,
      recentActivity: recentActivity,
      userMetrics: userMetrics,
    };
  } catch (error) {
    throw new Error('Failed to fetch all dashboard data: ' + error.message);
  }
};

export default {
  getDashboardData,
  getOverviewData,
  getPerformanceData,
  getEngagementData,
  getRecentActivity,
  getUserMetrics,
};
