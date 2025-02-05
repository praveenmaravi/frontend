// config/apiConfig.js

// Define API base URL based on environment (development, production, etc.)
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

// Define headers for API requests (you can modify this as needed)
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

// Timeout duration for API requests
const TIMEOUT = 10000; // 10 seconds

// Define any specific API endpoints
const ENDPOINTS = {
  CHATBOT: '/chatbot',
  USER: '/user',
  SETTINGS: '/settings',
  ANALYTICS: '/analytics',
  AUTOMATION: '/automation',
  INTEGRATIONS: '/integrations',
};

// Export the configuration object
const apiConfig = {
  API_BASE_URL,
  DEFAULT_HEADERS,
  TIMEOUT,
  ENDPOINTS,
};

export default apiConfig;
