// utils/routeHelpers.js

/**
 * Helper function to dynamically construct routes with parameters.
 * @param {string} path - The route path, e.g., "/user/:id"
 * @param {object} params - The parameters to inject into the path, e.g., { id: 123 }
 * @returns {string} - The constructed route path, e.g., "/user/123"
 */
export const createRouteWithParams = (path, params) => {
    return path.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => params[key] || '');
  };
  
  /**
   * Helper function to handle redirection based on certain conditions.
   * @param {string} condition - The condition to check (e.g., 'unauthenticated', 'admin-only')
   * @param {object} router - The router instance to perform redirection
   * @param {string} redirectPath - The path to redirect to if the condition is met
   */
  export const handleRedirect = (condition, router, redirectPath) => {
    if (condition === 'unauthenticated') {
      // Redirect to login if the user is not authenticated
      router.push(redirectPath || '/authentication');
    } else if (condition === 'admin-only') {
      // Redirect to the dashboard if the user is not an admin
      router.push(redirectPath || '/dashboard');
    }
  };
  
  /**
   * Utility function to check if the user has permission to access a route.
   * @param {object} user - The current user object
   * @param {string} requiredRole - The role required to access the route (e.g., 'admin', 'user')
   * @returns {boolean} - True if the user has the required role, false otherwise
   */
  export const hasAccess = (user, requiredRole) => {
    return user && user.role === requiredRole;
  };
  
  /**
   * Function to get the query parameters from the URL.
   * @param {string} url - The URL to extract query parameters from
   * @returns {object} - An object containing the query parameters as key-value pairs
   */
  export const getQueryParams = (url) => {
    const queryParams = {};
    const urlParams = new URLSearchParams(url);
    
    urlParams.forEach((value, key) => {
      queryParams[key] = value;
    });
    
    return queryParams;
  };
  