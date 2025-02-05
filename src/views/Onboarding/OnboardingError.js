import React from 'react';

const OnboardingError = ({ message, onRetry }) => {
  return (
    <div className="onboarding-error-container">
      <div className="error-message">
        <h2>Oops! Something went wrong.</h2>
        <p>{message || 'We encountered an unexpected error during your onboarding process.'}</p>
      </div>
      <button className="retry-button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
};

export default OnboardingError;
