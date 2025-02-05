import React from 'react';

const SuccessMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 bg-green-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-green-600 mb-4">
        Congratulations!
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        You’ve successfully completed the onboarding process. Your chatbot is ready to go!
      </p>
      <div className="flex space-x-4">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          onClick={() => window.location.href = '/dashboard'} // Redirect to dashboard
        >
          Go to Dashboard
        </button>
        <button
          className="px-6 py-3 bg-transparent border-2 border-gray-500 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none"
          onClick={() => window.location.href = '/chatbot'} // Redirect to chatbot
        >
          Start Chatbot
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
