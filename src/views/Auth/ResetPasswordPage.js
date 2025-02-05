// src/views/Auth/ResetPasswordPage.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ResetPasswordForm from '../components/ResetPasswordForm';
import { useAuth } from '../hooks/useAuth';
import { resetPassword } from '../services/authService';

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { token } = router.query; // Retrieve reset token from the URL

  const handlePasswordReset = async (newPassword) => {
    setLoading(true);
    setError(null);
    
    try {
      // Call the service to reset the password using the token and new password
      await resetPassword(token, newPassword);
      router.push('/login'); // Redirect to login page after successful reset
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Reset Your Password</h2>
      {error && <div className="error-message">{error}</div>}
      
      <ResetPasswordForm onSubmit={handlePasswordReset} loading={loading} />
      
      <p className="auth-footer">
        Remembered your password? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default ResetPasswordPage;
