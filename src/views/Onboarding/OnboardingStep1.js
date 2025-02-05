import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormValidation } from '../hooks/useFormValidation';
import OnboardingForm from '../components/OnboardingForm';

const OnboardingStep1 = ({ nextStep }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const { validateEmail, validateName } = useFormValidation();

  const onSubmit = (data) => {
    setFormData(data);
    nextStep(); // Proceed to the next step after submission
  };

  return (
    <div className="onboarding-step">
      <h2 className="text-xl font-semibold">Step 1: Enter Your Details</h2>
      <OnboardingForm onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required', validate: validateName })}
            className="input-field"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required', validate: validateEmail })}
            className="input-field"
            placeholder="Enter your email address"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <button
          type="submit"
          className="btn-primary"
        >
          Next
        </button>
      </OnboardingForm>
    </div>
  );
};

export default OnboardingStep1;
