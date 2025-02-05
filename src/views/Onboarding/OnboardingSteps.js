import React, { useState } from 'react';
import { Button, Stepper, Step, StepLabel, Box } from '@mui/material';

const OnboardingSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Welcome to the Chatbot', 'Set up Your Profile', 'Select Your Industry', 'Complete Onboarding'];

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleSkip = () => {
    setActiveStep(steps.length - 1); // Skip directly to the final step
  };

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <h3>Welcome to the Chatbot!</h3>
            <p>Let's get you started with a quick walkthrough.</p>
          </div>
        );
      case 1:
        return (
          <div>
            <h3>Set up Your Profile</h3>
            <p>Enter your personal details to create your profile.</p>
            {/* Add form elements to collect user profile details */}
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Select Your Industry</h3>
            <p>Choose the industry you're in so we can tailor the chatbot experience to your needs.</p>
            {/* Add industry selection options */}
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Complete Onboarding</h3>
            <p>You're all set! You can start using the chatbot now.</p>
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>{renderStepContent(activeStep)}</div>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Button onClick={handleBack} disabled={activeStep === 0} variant="outlined">
          Back
        </Button>
        <div>
          <Button onClick={handleSkip} variant="text">
            Skip
          </Button>
          <Button onClick={handleNext} variant="contained">
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default OnboardingSteps;
