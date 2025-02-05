// ResetPassword.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { resetPassword } from '../services/authService';  // Assume there's an authService for API calls

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const history = useHistory();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    try {
      const response = await resetPassword(email, newPassword);
      if (response.success) {
        setSuccess(true);
        setTimeout(() => {
          history.push('/login');  // Redirect to login after successful password reset
        }, 2000);
      } else {
        setError(response.message || 'An error occurred, please try again.');
      }
    } catch (err) {
      setError('An error occurred, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Your Password</h2>

      {success ? (
        <div className="success-message">
          <p>Password reset successfully! Redirecting to login...</p>
        </div>
      ) : (
        <form onSubmit={handleResetPassword} className="reset-password-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading} className="reset-password-btn">
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      )}

      <div className="redirect-to-login">
        <p>
          Remembered your password? <a href="/login">Login here</a>.
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
