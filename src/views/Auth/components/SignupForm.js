// src/views/Auth/components/SignupForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormValidation } from '../hooks/useFormValidation';
import { authService } from '../services/authService';
import { useRouter } from 'next/router';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { validateEmail, validatePassword } = useFormValidation();
  const router = useRouter();

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Call the signup service to create a new user
      await authService.signup(data);
      router.push('/dashboard'); // Redirect to dashboard or another page on success
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Create an Account</h2>

      {/* Display error message if there's any */}
      {errorMessage && (
        <div className="text-red-500 text-center mb-4">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="fullName"
            type="text"
            {...register('fullName', { required: 'Full name is required' })}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required', 
              validate: validateEmail 
            })}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', { 
              required: 'Password is required', 
              validate: validatePassword 
            })}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', { 
              required: 'Please confirm your password',
              validate: value => value === watch('password') || 'Passwords do not match'
            })}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 bg-blue-600 text-white rounded-md ${isSubmitting ? 'opacity-50' : ''}`}
          >
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
