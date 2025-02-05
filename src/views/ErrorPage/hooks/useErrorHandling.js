// frontend/src/views/ErrorPage/hooks/useErrorHandling.js
import { useState, useCallback } from 'react';

/**
 * Custom hook for managing error state and retry logic.
 * 
 * @param {function} retryAction - A function to be called when retrying the action.
 * @returns {object} Contains state and methods to handle errors and retries.
 */
const useErrorHandling = (retryAction) => {
  const [isError, setIsError] = useState(false);  // Tracks if an error has occurred
  const [errorMessage, setErrorMessage] = useState('');  // Stores the error message
  const [errorCode, setErrorCode] = useState('');  // Stores the error code (if any)

  /**
   * Handle error state when an error occurs.
   * 
   * @param {string} message - The error message.
   * @param {string} code - The error code.
   */
  const handleError = (message, code) => {
    setIsError(true);
    setErrorMessage(message);
    setErrorCode(code);
  };

  /**
   * Retry the action that failed.
   */
  const retry = useCallback(() => {
    setIsError(false);  // Reset error state
    retryAction();  // Execute the retry action
  }, [retryAction]);

  return { isError, errorMessage, errorCode, handleError, retry };
};

export default useErrorHandling;
