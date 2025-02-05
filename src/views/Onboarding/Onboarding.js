import React, { useState } from 'react';
import OnboardingStep1 from './OnboardingStep1';
import OnboardingStep2 from './OnboardingStep2';
import OnboardingStep3 from './OnboardingStep3';
import SuccessMessage from './components/SuccessMessage';
import ErrorMessage from './components/ErrorMessage';
import StepIndicator from './components/StepIndicator';
import { useOnboardingSteps } from './hooks/useOnboardingSteps';

const Onboarding = () => {
  const { currentStep, nextStep, previousStep, isComplete } = useOnboardingSteps();
  const [error, setError] = useState(null);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <OnboardingStep1 nextStep={nextStep} />;
      case 2:
        return <OnboardingStep2 nextStep={nextStep} previousStep={previousStep} />;
      case 3:
        return <OnboardingStep3 nextStep={nextStep} previousStep={previousStep} />;
      default:
        return <SuccessMessage />;
    }
  };

  return (
    <div className="onboarding-container">
      <StepIndicator currentStep={currentStep} />
      {error ? <ErrorMessage message={error} /> : renderStep()}
    </div>
  );
};

export default Onboarding;
