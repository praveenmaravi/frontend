// utils/apiErrorHandlingService.js

import axios from 'axios';

// Define a maximum retry count
const MAX_RETRIES = 3;

/**
 * Handles API-specific error responses, implements retry logic for transient errors.
 * @param {Error} error - The error object from the API call.
 * @param {Function} retryRequest - The function to retry the failed API request.
 * @param {number} retryCount - The current retry count.
 * @returns {Promise} - Resolves with the response if successful or rejects after retries are exhausted.
 */
export const handleApiError = async (error, retryRequest, retryCount = 0) => {
  if (!error.response) {
    // Network or other errors
    console.error('Network error or no response received:', error);
    throw new Error('Network error or no response received');
  }

  const { status, data } = error.response;

  // Retry logic for specific HTTP status codes
  if (retryCount < MAX_RETRIES) {
    // Handle specific errors that are worth retrying (e.g., 500, 502, 503)
    if (status >= 500 && status < 600) {
      console.log(`Retrying request... Attempt ${retryCount + 1}`);
      return retryRequest(retryCount + 1); // Retry the request by invoking the provided retry function
    }
  }

  // Handle specific error status codes
  switch (status) {
    case 400:
      console.error('Bad request:', data.message || 'Unknown error');
      throw new Error(data.message || 'Bad request');
    case 401:
      console.error('Unauthorized: Authentication failed or session expired');
      throw new Error('Unauthorized: Authentication failed or session expired');
    case 403:
      console.error('Forbidden: You do not have permission');
      throw new Error('Forbidden: You do not have permission');
    case 404:
      console.error('Not found:', data.message || 'Resource not found');
      throw new Error('Not found: Resource not found');
    case 500:
    case 502:
    case 503:
      console.error('Server error:', data.message || 'Internal server error');
      throw new Error('Server error: ' + (data.message || 'Internal server error'));
    default:
      console.error('Unknown API error:', data.message || 'Unknown error');
      throw new Error(data.message || 'Unknown API error');
  }
};

/**
 * Function to retry the API request (used in retry logic).
 * @param {Function} apiCall - The original API request function to be retried.
 * @param {number} retryCount - The current retry count.
 * @returns {Promise} - Resolves with the response of the retry request.
 */
export const retryApiRequest = (apiCall, retryCount = 0) => {
  return apiCall().catch((error) => handleApiError(error, retryApiRequest.bind(null, apiCall), retryCount));
};
