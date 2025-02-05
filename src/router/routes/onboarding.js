// routes/onboarding.js

import React from 'react';
import { Route } from 'react-router-dom';
import OnboardingPage from '../views/OnboardingPage';
import { authGuard } from '../guards/authGuard'; // Assuming you have an authentication guard

// Onboarding route for first-time users
const OnboardingRoute = () => {
  return (
    <Route
      path="/onboarding"
      element={
        // Apply the auth guard to ensure only unauthenticated users access the onboarding page
        authGuard(<OnboardingPage />)
      }
    />
  );
};

export default OnboardingRoute;
