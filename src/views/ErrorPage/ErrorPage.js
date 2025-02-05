// frontend/src/views/ErrorPage/ErrorPage.js
import React from 'react';
import ErrorMessage from './components/ErrorMessage';
import ErrorImage from './components/ErrorImage';
import RetryButton from './components/RetryButton';
import useErrorHandling from './hooks/useErrorHandling';
import { handleApiError } from './services/errorService';

const ErrorPage = ({ retryAction }) => {
  const { isError, errorMessage, errorCode, handleError, retry } = useErrorHandling(retryAction);

  // Example of triggering an error (this would be used in your app for error handling)
  const triggerError = () => {
    const error = new Error('Request failed');
    const errorDetails = handleApiError(error);
    handleError(errorDetails.message, errorDetails.errorCode);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isError ? (
        <>
          <ErrorImage />
          <ErrorMessage message={errorMessage} errorCode={errorCode} />
          <RetryButton onRetry={retry || triggerError} />
        </>
      ) : (
        <div className="text-center text-lg text-gray-600">No error encountered</div>
      )}
    </div>
  );
};

export default ErrorPage;
