// frontend/src/views/ErrorPage/components/RetryButton.js
import React from 'react';

const RetryButton = ({ onRetry }) => {
  return (
    <button
      onClick={onRetry}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Retry
    </button>
  );
};

export default RetryButton;
