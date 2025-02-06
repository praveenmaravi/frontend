import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { authService } from '../services/authService';

const ForgotPasswordForm = () => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const { handleSubmit, register, formState: { errors } } = useForm();
  const { push } = useHistory();
  const { setLoading } = useAuth(); // Custom hook for managing auth state

  const onSubmit = async (data) => {
    setLoading(true); // Start loading state
    setError(null);
    setSuccessMessage('');

    try {
      await authService.requestPasswordReset(data.email);
      setSuccessMessage('Password reset link sent to your email.');
      setTimeout(() => push('/login'), 3000); // Redirect to login after 3 seconds
    } catch (err) {
      setError('Failed to send password reset link. Please try again.');
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-title">Forgot Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            {...register('email', { 
              required: 'Email is required', 
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              }
            })}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <button type="submit" className="btn btn-primary">Send Reset Link</button>
      </form>
      <div className="auth-footer">
        <p>Remember your password? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
