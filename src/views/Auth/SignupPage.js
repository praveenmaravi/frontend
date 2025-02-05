// src/views/Auth/SignupPage.js

import React, { useState } from 'react';
import SignupForm from '../components/SignupForm';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useFormValidation } from '../hooks/useFormValidation';
import { authService } from '../services/authService';
import AuthHeader from '../components/AuthHeader';

const SignupPage = () => {
  const [error, setError] = useState(null);
  const { signUp } = useAuth(); // Custom hook for authentication
  const { validateEmail, validatePassword } = useFormValidation(); // Form validation hooks
  const history = useHistory(); // To navigate after successful signup

  const handleSignup = async (formData) => {
    const { email, password, confirmPassword } = formData;

    // Basic validations
    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const user = await authService.signup(email, password); // Call authService to handle signup
      signUp(user); // Use the signUp function from the custom hook to update auth state
      history.push('/dashboard'); // Redirect to the dashboard after successful signup
    } catch (err) {
      setError(err.message || 'An error occurred during signup.');
    }
  };

  return (
    <div className="signup-page">
      <AuthHeader />
      <div className="signup-form-container">
        <h2 className="text-center">Create Your Account</h2>
        {error && <div className="error-message">{error}</div>}
        <SignupForm onSubmit={handleSignup} />
      </div>
    </div>
  );
};

export default SignupPage;
