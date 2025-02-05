// frontend/src/views/Auth/ForgotPassword.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const history = useHistory();

  // Handle input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      // Simulate an API call to send reset password link
      const response = await fakeApiRequest(email);
      if (response.success) {
        setSuccessMessage('A reset link has been sent to your email!');
        setTimeout(() => {
          history.push('/login');  // Redirect to login page after success
        }, 3000);
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fake API request to simulate password reset email sending
  const fakeApiRequest = (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@example.com') {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 2000);
    });
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Enter your email address to receive a password reset link.</p>
      
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      <div className="back-to-login">
        <button onClick={() => history.push('/login')} className="btn-secondary">
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
