// frontend/src/views/ErrorPage/services/errorService.js

// This function processes the API error and returns a user-friendly error message
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with a status code outside of the 2xx range
    switch (error.response.status) {
      case 400:
        return {
          message: 'Bad Request. Please check your input and try again.',
          errorCode: 400,
        };
      case 401:
        return {
          message: 'Unauthorized. Please log in to continue.',
          errorCode: 401,
        };
      case 404:
        return {
          message: 'Not Found. The resource you are looking for does not exist.',
          errorCode: 404,
        };
      case 500:
        return {
          message: 'Internal Server Error. Please try again later.',
          errorCode: 500,
        };
      case 503:
        return {
          message: 'Service Unavailable. The server is temporarily down.',
          errorCode: 503,
        };
      default:
        return {
          message: 'Something went wrong. Please try again.',
          errorCode: error.response.status,
        };
    }
  } else if (error.request) {
    // No response was received (network issues, timeouts, etc.)
    return {
      message: 'Network error. Please check your internet connection.',
      errorCode: 503,  // Service Unavailable
    };
  } else {
    // Other types of errors (e.g., incorrect setup or issues with the request)
    return {
      message: 'An unknown error occurred.',
      errorCode: 500,  // Internal Server Error
    };
  }
};
