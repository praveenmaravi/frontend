import { useState } from 'react';

// Regex for email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Regex for password strength (at least 8 characters, including at least one number and one special character)
const passwordStrengthRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const useFormValidation = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Validate email
  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  // Validate password
  const validatePassword = (password) => {
    return passwordStrengthRegex.test(password);
  };

  // Validate form fields
  const validate = () => {
    let validationErrors = {};

    if (!values.email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(values.email)) {
      validationErrors.email = 'Please enter a valid email';
    }

    if (!values.password) {
      validationErrors.password = 'Password is required';
    } else if (!validatePassword(values.password)) {
      validationErrors.password = 'Password must be at least 8 characters, include one number, and one special character';
    }

    if (values.password !== values.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission (e.g., API call)
      // Call submit function here, for example: submitForm(values);
    } else {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useFormValidation;
