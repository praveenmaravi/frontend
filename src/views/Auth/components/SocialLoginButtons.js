// src/views/Auth/components/SocialLoginButtons.js

import React from 'react';

// Import social login providers (e.g., Firebase or NextAuth.js)
// Here, I'll assume we're using NextAuth.js for simplicity
import { signIn } from 'next-auth/react';

const SocialLoginButtons = () => {
  // Handler for Google login
  const handleGoogleLogin = () => {
    signIn('google'); // NextAuth.js will handle the redirect to Google
  };

  // Handler for Facebook login
  const handleFacebookLogin = () => {
    signIn('facebook'); // NextAuth.js will handle the redirect to Facebook
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Google Login Button */}
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
      >
        <img src="/icons/google-icon.svg" alt="Google" className="w-6 h-6 mr-2" />
        <span>Sign in with Google</span>
      </button>

      {/* Facebook Login Button */}
      <button
        onClick={handleFacebookLogin}
        className="flex items-center justify-center p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
      >
        <img src="/icons/facebook-icon.svg" alt="Facebook" className="w-6 h-6 mr-2" />
        <span>Sign in with Facebook</span>
      </button>
    </div>
  );
};

export default SocialLoginButtons;
