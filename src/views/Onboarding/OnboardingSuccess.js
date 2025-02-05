import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '../../components/Button'; // Assuming Button is a reusable component
import SuccessIcon from '../../assets/icons/success-icon.svg'; // Success icon for the success screen

const OnboardingSuccess = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    // Redirect the user to the chatbot interface or dashboard after successful onboarding
    router.push('/chatbot');
  };

  return (
    <div className="onboarding-success-container flex flex-col items-center justify-center p-6">
      <img src={SuccessIcon} alt="Success" className="w-24 h-24 mb-6" />
      <h1 className="text-2xl font-semibold text-center text-green-600 mb-4">
        You're all set up!
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        Your onboarding is complete. You're ready to start interacting with your Vision AI chatbot.
      </p>
      <Button onClick={handleGetStarted} className="bg-green-600 text-white py-2 px-6 rounded-md">
        Get Started
      </Button>
    </div>
  );
};

export default OnboardingSuccess;
