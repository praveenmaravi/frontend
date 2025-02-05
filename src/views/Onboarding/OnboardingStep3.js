import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UserPreferences from '../components/UserPreferences';
import { useFormValidation } from '../hooks/useFormValidation';
import { useHistory } from 'react-router-dom';

const OnboardingStep3 = ({ nextStep, previousStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { validateForm } = useFormValidation();
  const history = useHistory();

  const onSubmit = async (data) => {
    setIsLoading(true);

    // Validate and save user preferences here (can call an API or update state)
    const isValid = await validateForm(data);
    if (isValid) {
      // Proceed to the next step
      nextStep();
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="onboarding-step">
      <h2 className="text-xl font-semibold mb-4">Step 3: Set Your Preferences</h2>
      <p className="text-sm mb-6">Select your preferences for chatbot interaction.</p>

      {/* User Preferences Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <UserPreferences register={register} errors={errors} />

        {/* Optional settings such as language, tone, etc. */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="language" className="block text-sm font-medium">Preferred Language</label>
            <select
              id="language"
              {...register('language', { required: 'Please select a language.' })}
              className="input-field"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              {/* Add other languages here */}
            </select>
            {errors.language && <p className="text-red-500 text-sm">{errors.language.message}</p>}
          </div>

          <div className="flex-1">
            <label htmlFor="tone" className="block text-sm font-medium">Preferred Tone</label>
            <select
              id="tone"
              {...register('tone', { required: 'Please select a tone.' })}
              className="input-field"
            >
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="friendly">Friendly</option>
            </select>
            {errors.tone && <p className="text-red-500 text-sm">{errors.tone.message}</p>}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={previousStep}
            className="btn-secondary"
          >
            Previous
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className={`btn-primary ${isLoading ? 'opacity-50' : ''}`}
          >
            {isLoading ? 'Saving...' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingStep3;
