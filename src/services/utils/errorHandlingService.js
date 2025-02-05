// utils/errorHandlingService.js

class ErrorHandlingService {
    // Logs frontend errors to a central logging system or console
    static logError(error, context = '') {
      // Optionally, send errors to an external logging service like Sentry, LogRocket, etc.
      console.error(`Error occurred in ${context}:`, error);
  
      // Implement custom logging here if needed (e.g., send to server-side logs)
      // Example: logErrorToServer(error, context);
    }
  
    // Handles generic errors, showing a user-friendly message
    static handleGenericError(error, context = '') {
      this.logError(error, context);
      alert('Something went wrong! Please try again later.');
    }
  
    // Handles API-specific errors (e.g., 4xx, 5xx status codes)
    static handleApiError(error, context = '') {
      this.logError(error, context);
  
      if (error.response) {
        // Handle HTTP error responses (e.g., 400, 404, 500)
        switch (error.response.status) {
          case 400:
            alert('Bad Request. Please check your input.');
            break;
          case 401:
            alert('Unauthorized access. Please login again.');
            break;
          case 404:
            alert('Resource not found. Please check the URL.');
            break;
          case 500:
            alert('Server error. Please try again later.');
            break;
          default:
            alert('An unexpected error occurred.');
        }
      } else if (error.request) {
        // Handle no response from server (network error)
        alert('Network error. Please check your internet connection.');
      } else {
        // Handle other errors
        alert('An unexpected error occurred.');
      }
    }
  
    // Handles validation errors (e.g., form input validation errors)
    static handleValidationError(errors, context = '') {
      this.logError(errors, context);
  
      // Example: Display validation errors to the user in the UI
      // You can adapt this to render specific error messages to the user
      errors.forEach((error) => {
        console.warn(`Validation error: ${error.message}`);
        alert(error.message);
      });
    }
  
    // Handles uncaught errors globally (can be used for window.onerror, etc.)
    static handleUncaughtError(error) {
      this.logError(error, 'Uncaught Error');
      alert('An unexpected error occurred. Please try again later.');
    }
  }
  
  export default ErrorHandlingService;
  