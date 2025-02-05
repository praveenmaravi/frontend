// frontend/src/views/ErrorPage/components/ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ message, errorCode }) => {
  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold text-red-600">Error {errorCode}</h1>
      <p className="text-lg text-gray-700 mt-2">{message}</p>
    </div>
  );
};

export default ErrorMessage;
