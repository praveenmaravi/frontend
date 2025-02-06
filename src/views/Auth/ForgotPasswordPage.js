// src/views/Auth/ForgotPasswordPage.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';  // Assuming you're using react-toastify for notifications
import authService from './services/authService';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import AuthHeader from './components/AuthHeader';

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Send request to API for password reset
      await authService.forgotPassword(data.email);
      toast.success('Password reset link sent to your email!');
      router.push('/auth/login'); // Redirect to login after success
    } catch (error) {
      toast.error('Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
        <AuthHeader />
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <ForgotPasswordForm 
            register={register} 
            errors={errors}
            loading={loading}
          />
          <div className="flex justify-center">
            <button 
              type="submit" 
              className={`w-full p-3 bg-blue-500 text-white rounded-lg ${loading ? 'opacity-50' : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p>
            Remembered your password?{' '}
            <a href="/auth/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
