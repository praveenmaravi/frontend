import axios from 'axios';

const API_URL = '/api/engagement';  // Replace with your actual backend API endpoint

// Fetch user engagement data (active users, message volume, session lengths)
export const fetchEngagementData = async (filters = {}) => {
  try {
    const response = await axios.get(API_URL, {
      params: filters,  // Optional: pass query parameters for filtering
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching engagement data:', error);
    throw error;
  }
};

// Fetch engagement data by a specific time range or other filter criteria
export const fetchEngagementDataByRange = async (startDate, endDate) => {
  try {
    const response = await axios.get(API_URL, {
      params: { startDate, endDate },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching engagement data by range:', error);
    throw error;
  }
};

// Fetch engagement data for a specific user group or segment
export const fetchEngagementDataByUserGroup = async (userGroup) => {
  try {
    const response = await axios.get(`${API_URL}/group/${userGroup}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching engagement data for group ${userGroup}:`, error);
    throw error;
  }
};
