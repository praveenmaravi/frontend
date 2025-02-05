// authUtils.js

/**
 * Retrieves the JWT token from localStorage or sessionStorage
 * @returns {string|null} The JWT token or null if not found
 */
export function getAuthToken() {
    return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
  }
  
  /**
   * Saves the JWT token to localStorage or sessionStorage
   * @param {string} token - The JWT token to save
   * @param {boolean} remember - Whether to store the token in localStorage (default) or sessionStorage
   */
  export function setAuthToken(token, remember = true) {
    if (remember) {
      localStorage.setItem('authToken', token);
    } else {
      sessionStorage.setItem('authToken', token);
    }
  }
  
  /**
   * Removes the JWT token from localStorage and sessionStorage
   */
  export function removeAuthToken() {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
  }
  
  /**
   * Checks if the user is authenticated based on the presence of the token
   * @returns {boolean} True if the user is authenticated, false otherwise
   */
  export function isAuthenticated() {
    return getAuthToken() !== null;
  }
  
  /**
   * Verifies if the current user has the required role to access a certain feature
   * @param {string} role - The role to check against (e.g., 'admin', 'user')
   * @returns {boolean} True if the user has the required role, false otherwise
   */
  export function hasPermission(role) {
    const userRole = localStorage.getItem('userRole'); // Assuming user role is saved in localStorage
    return userRole === role;
  }
  
  /**
   * Redirects to a login page if the user is not authenticated
   * @param {string} redirectUrl - The URL to redirect to after login
   */
  export function redirectIfNotAuthenticated(redirectUrl = '/login') {
    if (!isAuthenticated()) {
      window.location.href = redirectUrl;
    }
  }
  
  /**
   * Refresh the JWT token and extend the user session (optional: implement with API call)
   */
  export function refreshAuthToken() {
    // Example logic for refreshing the token
    // This can be implemented with an API call to refresh the token
    // Example: apiUtils.refreshToken()
    // localStorage.setItem('authToken', newToken);
  }
  