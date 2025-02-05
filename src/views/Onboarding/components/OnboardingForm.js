import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormValidation } from '../hooks/useFormValidation';

const OnboardingForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { validateEmail, validateRequired } = useFormValidation();

  const onFormSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Pass the data to parent component or API
      await onSubmit(data);
    } catch (error) {
      console.error('Error during form submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          id="email"
          type="email"
          {...register('email', { 
            required: 'Email is required', 
            validate: validateEmail 
          })}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
        <select
          id="industry"
          {...register('industry', { required: 'Please select an industry' })}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="">Select an industry</option>
          <option value="healthcare">Healthcare</option>
          <option value="e-commerce">E-commerce</option>
          <option value="education">Education</option>
          {/* Add more industries here */}
        </select>
        {errors.industry && <p className="text-red-500 text-sm">{errors.industry.message}</p>}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-300"
        >
          {isSubmitting ? 'Submitting...' : 'Next'}
        </button>
      </div>
    </form>
  );
};

export default OnboardingForm;
