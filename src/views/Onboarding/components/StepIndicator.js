import React from 'react';

const StepIndicator = ({ currentStep }) => {
  // Array of step labels
  const steps = ['Step 1: User Details', 'Step 2: Select Industry', 'Step 3: Preferences'];

  return (
    <div className="step-indicator-container">
      <div className="step-indicator">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item ${index + 1 === currentStep ? 'active' : ''} ${
              index + 1 < currentStep ? 'completed' : ''
            }`}
          >
            <span className="step-number">{index + 1}</span>
            <span className="step-label">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
