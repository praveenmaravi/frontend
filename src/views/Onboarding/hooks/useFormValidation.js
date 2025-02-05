import { useState } from 'react';

// Utility function for basic validation
const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const useFormValidation = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    industry: '',
    preferences: {
      language: 'en',
      tone: 'neutral',
    },
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validate = () => {
    let validationErrors = {};

    // Basic validation for the name field
    if (!formValues.name) {
      validationErrors.name = 'Name is required';
    }

    // Email validation
    if (!formValues.email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(formValues.email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    // Industry selection validation
    if (!formValues.industry) {
      validationErrors.industry = 'Industry selection is required';
    }

    // User preferences validation (if needed)
    if (!formValues.preferences.language) {
      validationErrors.language = 'Language preference is required';
    }

    if (!formValues.preferences.tone) {
      validationErrors.tone = 'Tone preference is required';
    }

    setErrors(validationErrors);
    return validationErrors;
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with the form submission logic (e.g., API call)
      console.log('Form is valid. Proceeding with submission...');
    } else {
      setIsSubmitting(false);
    }
  };

  return {
    formValues,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
};

export default useFormValidation;
