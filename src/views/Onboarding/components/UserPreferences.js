import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormValidation } from '../hooks/useFormValidation';
import { useDispatch } from 'react-redux';
import { updateUserPreferences } from '../services/onboardingService';

const UserPreferences = ({ nextStep, previousStep }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  // Form validation using the custom hook
  const { validatePreferences } = useFormValidation();

  // Form submit handler
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call to save preferences
      await dispatch(updateUserPreferences(data));
      nextStep(); // Move to the next step
    } catch (error) {
      console.error('Error saving preferences:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="user-preferences-container">
      <h2 className="text-2xl font-semibold">Step 3: Set Your Preferences</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
        <div className="form-group">
          <label htmlFor="language" className="block text-sm font-medium">Preferred Language</label>
          <select
            id="language"
            {...register('language', {
              required: 'This field is required',
              validate: (value) => validatePreferences(value)
            })}
            className="input"
          >
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
          {errors.language && <p className="text-red-500 text-sm">{errors.language.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="tone" className="block text-sm font-medium">Communication Tone</label>
          <select
            id="tone"
            {...register('tone', {
              required: 'This field is required',
            })}
            className="input"
          >
            <option value="">Select Tone</option>
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
          </select>
          {errors.tone && <p className="text-red-500 text-sm">{errors.tone.message}</p>}
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={previousStep}
            className="btn btn-secondary"
            disabled={isSubmitting}
          >
            Back
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserPreferences;
