// src/views/Onboarding/index.js

import React from 'react';
import Onboarding from './Onboarding';
import './onboarding.module.css'; // Import onboarding-specific styles

const OnboardingPage = () => {
  return (
    <div className="onboarding-wrapper">
      <Onboarding />
    </div>
  );
};

export default OnboardingPage;
