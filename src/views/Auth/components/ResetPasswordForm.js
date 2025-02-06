// src/views/Auth/components/ResetPasswordForm.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePasswordToggle } from '../hooks/usePasswordToggle';
import { resetPassword } from '../services/authService';
import { useHistory } from 'react-router-dom';

const ResetPasswordForm = () => {
  const [passwordVisible, setPasswordVisible] = usePasswordToggle();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      // Call the reset password service with the new password
      await resetPassword(data.password);
      history.push('/login'); // Redirect to login page after successful reset
    } catch (error) {
      setErrorMessage('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Reset Password</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="reset-password-form">
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            id="password"
            type={passwordVisible ? 'text' : 'password'}
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' }
            })}
            placeholder="Enter new password"
            className="input-field"
          />
          {errors.password && <span className="error-text">{errors.password.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type={passwordVisible ? 'text' : 'password'}
            {...register('confirmPassword', {
              required: 'Confirm your password',
              validate: value => value === watch('password') || 'Passwords do not match'
            })}
            placeholder="Confirm new password"
            className="input-field"
          />
          {errors.confirmPassword && <span className="error-text">{errors.confirmPassword.message}</span>}
        </div>

        <div className="form-group password-visibility-toggle">
          <input
            type="checkbox"
            onChange={() => setPasswordVisible(!passwordVisible)}
            id="togglePasswordVisibility"
            className="toggle-checkbox"
          />
          <label htmlFor="togglePasswordVisibility">Show Password</label>
        </div>

        <button type="submit" className="submit-btn">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
