import { useState } from 'react';

const useOnboardingSteps = () => {
  // Step tracking state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    userDetails: {},
    industry: '',
    preferences: {},
  });

  // Total number of steps
  const totalSteps = 3;

  // Handle the next step
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  // Handle the previous step
  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  // Set form data for a specific step
  const updateFormData = (stepData) => {
    setFormData(prevData => ({
      ...prevData,
      ...stepData,
    }));
  };

  // Check if onboarding is complete
  const isComplete = currentStep > totalSteps;

  // Return values and functions to be used in onboarding steps
  return {
    currentStep,
    nextStep,
    previousStep,
    updateFormData,
    formData,
    isComplete,
  };
};

export default useOnboardingSteps;
