// frontend/src/components/utils/Validator.js

const Validator = {
    // Validates if a string is a valid email address
    isEmailValid: (email) => {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);
    },
  
    // Validates if a string is not empty
    isNotEmpty: (value) => {
      return value.trim() !== '';
    },
  
    // Validates if the password is strong (minimum 8 characters, includes uppercase, lowercase, number, and symbol)
    isPasswordStrong: (password) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(password);
    },
  
    // Validates if a phone number is valid (simple check for 10 digits)
    isPhoneNumberValid: (phoneNumber) => {
      const regex = /^[0-9]{10}$/;
      return regex.test(phoneNumber);
    },
  
    // Validates if a string contains only letters and spaces
    isAlphaSpace: (value) => {
      const regex = /^[A-Za-z\s]+$/;
      return regex.test(value);
    },
  
    // Validates if a value is a valid date (YYYY-MM-DD format)
    isDateValid: (date) => {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      return regex.test(date);
    },
  
    // Validates if a string contains only numbers
    isNumeric: (value) => {
      const regex = /^[0-9]+$/;
      return regex.test(value);
    },
  
    // Custom error handling for form validation
    validateForm: (fields) => {
      let errors = {};
  
      for (let field in fields) {
        const value = fields[field];
        if (value.required && !Validator.isNotEmpty(value.input)) {
          errors[field] = `${field} is required`;
        }
        if (value.type === 'email' && !Validator.isEmailValid(value.input)) {
          errors[field] = `Invalid ${field}`;
        }
        if (value.type === 'password' && !Validator.isPasswordStrong(value.input)) {
          errors[field] = `Password must be at least 8 characters, including a number, an uppercase letter, and a symbol`;
        }
        if (value.type === 'phone' && !Validator.isPhoneNumberValid(value.input)) {
          errors[field] = `Invalid phone number`;
        }
      }
  
      return errors;
    }
  };
  
  export default Validator;
  