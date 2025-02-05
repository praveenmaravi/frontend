// apiUtils.js

/**
 * Utility function to send an HTTP request.
 * @param {string} endpoint - The API endpoint to call.
 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE).
 * @param {Object} [data] - The data to send with the request (optional).
 * @returns {Promise} - A promise that resolves with the response or rejects with an error.
 */
export const sendRequest = async (endpoint, method, data = null) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
            // 'Authorization': `Bearer ${getAuthToken()}`
        };

        const options = {
            method: method,
            headers: headers,
            body: data ? JSON.stringify(data) : null,
        };

        const response = await fetch(endpoint, options);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};

/**
 * Utility function to handle API errors.
 * @param {Error} error - The error object thrown by the API call.
 */
export const handleApiError = (error) => {
    console.error("API Error:", error);
    // Custom logic to handle different error codes or log errors to an external service
    // For example: 
    // if (error.message.includes('401')) {
    //     // Handle unauthorized error
    // }
};

/**
 * Utility function to perform a GET request.
 * @param {string} endpoint - The API endpoint to call.
 * @returns {Promise} - A promise that resolves with the response data.
 */
export const get = async (endpoint) => {
    return await sendRequest(endpoint, 'GET');
};

/**
 * Utility function to perform a POST request.
 * @param {string} endpoint - The API endpoint to call.
 * @param {Object} data - The data to send in the request body.
 * @returns {Promise} - A promise that resolves with the response data.
 */
export const post = async (endpoint, data) => {
    return await sendRequest(endpoint, 'POST', data);
};

/**
 * Utility function to perform a PUT request.
 * @param {string} endpoint - The API endpoint to call.
 * @param {Object} data - The data to send in the request body.
 * @returns {Promise} - A promise that resolves with the response data.
 */
export const put = async (endpoint, data) => {
    return await sendRequest(endpoint, 'PUT', data);
};

/**
 * Utility function to perform a DELETE request.
 * @param {string} endpoint - The API endpoint to call.
 * @returns {Promise} - A promise that resolves with the response data.
 */
export const deleteRequest = async (endpoint) => {
    return await sendRequest(endpoint, 'DELETE');
};
