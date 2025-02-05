import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, InputField, Spinner } from '../../ui'; // Import reusable UI components
import { APIHelper } from '../../utils/APIHelper'; // Helper for API requests
import './ForgotPassword.css'; // Custom styling for this component

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await APIHelper.post('/auth/forgot-password', { email });

      if (response.success) {
        setSuccessMessage('Password reset link has been sent to your email.');
        setTimeout(() => history.push('/login'), 5000); // Redirect to login after 5 seconds
      } else {
        setError(response.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Enter your email address and we will send you a link to reset your password.</p>
      
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <Button type="submit" disabled={loading}>
          {loading ? <Spinner /> : 'Send Reset Link'}
        </Button>
      </form>

      <div className="redirect-to-login">
        <p>Remembered your password? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default ForgotPassword;
