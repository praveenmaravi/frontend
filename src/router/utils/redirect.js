// utils/redirect.js

/**
 * Redirects the user to the login page if they are not authenticated.
 * Can be used in route guards or any component that requires authentication.
 *
 * @param {Object} history - The history object to navigate to different pages.
 */
export const redirectToLogin = (history) => {
    // If the user is not authenticated, redirect to login page
    history.push('/authentication');
  };
  
  /**
   * Redirects the user to the previous page or a default route.
   * Can be used after successful login or after navigating to restricted areas.
   *
   * @param {Object} history - The history object to navigate to different pages.
   * @param {string} fallbackRoute - A fallback route if the previous page is not available.
   */
  export const redirectToPreviousPage = (history, fallbackRoute = '/') => {
    const previousPage = history.location.state?.from || fallbackRoute;
    history.push(previousPage);
  };
  
  /**
   * Redirects the user to an error page (e.g., 404 or 500).
   * Can be used in cases where the user tries to access a non-existent or invalid page.
   *
   * @param {Object} history - The history object to navigate to different pages.
   */
  export const redirectToErrorPage = (history) => {
    history.push('/error');
  };
  