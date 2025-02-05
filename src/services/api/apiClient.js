// frontend/src/services/api/apiClient.js

import axios from 'axios';

// Create an instance of axios with default settings
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || 'https://api.example.com', // Use an environment variable for the base URL
  timeout: 10000, // Set a timeout for requests (10 seconds)
  headers: {
    'Content-Type': 'application/json', // Default content type for requests
  },
});

// Request interceptor to add token to the headers if user is authenticated
apiClient.interceptors.request.use(
  (config) => {
    // Check if there's a token in localStorage or other secure location
    const token = localStorage.getItem('authToken'); // Or use a different method for token storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token to the headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors and log responses
apiClient.interceptors.response.use(
  (response) => {
    return response; // Return the response data directly
  },
  (error) => {
    // Handle specific API error codes or responses here
    if (error.response) {
      const { status, data } = error.response;
      if (status === 401) {
        // Unauthorized error (e.g., redirect to login page)
        console.error('Unauthorized, please log in again.');
      } else if (status === 500) {
        // Server error
        console.error('Server error, please try again later.');
      } else {
        // Other error
        console.error(`API error: ${data.message || 'Unknown error'}`);
      }
    } else {
      console.error('Network error or no response from server');
    }
    return Promise.reject(error); // Reject the promise with the error
  }
);

export default apiClient;
