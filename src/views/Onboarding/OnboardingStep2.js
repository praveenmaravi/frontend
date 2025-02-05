import React, { useState, useEffect } from 'react';
import { useIndustrySelection } from '../hooks/useIndustrySelection';
import { useFormValidation } from '../hooks/useFormValidation';
import { onboardingService } from '../services/onboardingService';
import IndustrySelection from '../components/IndustrySelection';
import WorkflowPreview from '../components/WorkflowPreview';

const OnboardingStep2 = ({ nextStep, previousStep }) => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [error, setError] = useState(null);
  const { isValid, validateIndustrySelection } = useFormValidation();
  const { fetchIndustryWorkflows, industryWorkflows } = useIndustrySelection();

  useEffect(() => {
    if (selectedIndustry) {
      fetchIndustryWorkflows(selectedIndustry);
    }
  }, [selectedIndustry, fetchIndustryWorkflows]);

  const handleIndustrySelection = (industry) => {
    setSelectedIndustry(industry);
  };

  const handleNext = async () => {
    if (!isValid(selectedIndustry)) {
      setError('Please select an industry to proceed.');
      return;
    }

    try {
      // Save selected industry in the backend
      await onboardingService.saveIndustrySelection(selectedIndustry);
      nextStep();
    } catch (error) {
      setError('An error occurred while saving your industry selection. Please try again.');
    }
  };

  return (
    <div className="onboarding-step">
      <h2 className="step-title">Step 2: Select Your Industry</h2>
      <p className="step-description">
        Please choose your industry to help us customize your chatbot experience.
      </p>

      {error && <div className="error-message">{error}</div>}

      <IndustrySelection
        selectedIndustry={selectedIndustry}
        onSelect={handleIndustrySelection}
      />

      {selectedIndustry && (
        <div className="workflow-preview">
          <h3>Preview Workflow</h3>
          <WorkflowPreview workflows={industryWorkflows} />
        </div>
      )}

      <div className="step-buttons">
        <button className="btn-back" onClick={previousStep}>
          Back
        </button>
        <button className="btn-next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep2;
