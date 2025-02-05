// frontend/src/components/utils/APIHelper.js

/**
 * API Helper for making network requests.
 * Handles GET, POST, PUT, DELETE requests with basic error handling and response parsing.
 */

const API_BASE_URL = 'https://api.example.com'; // Set your base API URL

/**
 * Handles API requests with the specified method, endpoint, and options.
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} endpoint - API endpoint to make the request to
 * @param {object} [data] - Data to send in the request body (for POST, PUT)
 * @param {object} [headers] - Custom headers for the request
 * @returns {Promise<object>} The parsed response data
 * @throws {Error} If the request fails
 */
const apiRequest = async (method, endpoint, data = null, headers = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: data ? JSON.stringify(data) : null,
    };

    try {
        const response = await fetch(url, options);

        // Check if response status is OK (2xx)
        if (!response.ok) {
            throw new Error(`API request failed: ${response.statusText}`);
        }

        // Parse the JSON response body
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error(`API Request Error: ${error.message}`);
        throw new Error(`Failed to fetch data from API: ${error.message}`);
    }
};

/**
 * Helper function for GET requests
 */
const get = (endpoint, headers = {}) => {
    return apiRequest('GET', endpoint, null, headers);
};

/**
 * Helper function for POST requests
 */
const post = (endpoint, data, headers = {}) => {
    return apiRequest('POST', endpoint, data, headers);
};

/**
 * Helper function for PUT requests
 */
const put = (endpoint, data, headers = {}) => {
    return apiRequest('PUT', endpoint, data, headers);
};

/**
 * Helper function for DELETE requests
 */
const del = (endpoint, headers = {}) => {
    return apiRequest('DELETE', endpoint, null, headers);
};

// Exporting functions for usage in other components
export { get, post, put, del };
