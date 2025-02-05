// formUtils.js

/**
 * Validates an email address using a regular expression.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, otherwise false.
 */
export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  /**
   * Validates a phone number using a regular expression.
   * @param {string} phone - The phone number to validate.
   * @returns {boolean} - True if the phone number is valid, otherwise false.
   */
  export const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 international format
    return phoneRegex.test(phone);
  };
  
  /**
   * Validates if a string is a valid URL.
   * @param {string} url - The URL to validate.
   * @returns {boolean} - True if the URL is valid, otherwise false.
   */
  export const validateURL = (url) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
  };
  
  /**
   * Sanitizes user input by removing potentially dangerous characters.
   * @param {string} input - The user input to sanitize.
   * @returns {string} - The sanitized input.
   */
  export const sanitizeInput = (input) => {
    // Simple sanitization by escaping HTML special characters
    return input.replace(/[<>&"']/g, (char) => `&#${char.charCodeAt(0)};`);
  };
  
  /**
   * Checks if a string is empty (null, undefined, or consists of only whitespace).
   * @param {string} str - The string to check.
   * @returns {boolean} - True if the string is empty, otherwise false.
   */
  export const isEmpty = (str) => {
    return !str || str.trim().length === 0;
  };
  
  /**
   * Generates an error message for a specific form field.
   * @param {string} fieldName - The name of the form field.
   * @param {string} errorType - The type of error (e.g., 'required', 'invalid').
   * @returns {string} - The error message.
   */
  export const generateErrorMessage = (fieldName, errorType) => {
    const messages = {
      required: `${fieldName} is required.`,
      invalid: `The ${fieldName} is invalid.`,
      minLength: `${fieldName} must be at least 6 characters.`,
      maxLength: `${fieldName} cannot be more than 100 characters.`,
    };
  
    return messages[errorType] || 'Invalid input.';
  };
  
  /**
   * Validates that the value of a field is not empty.
   * @param {string} value - The value of the form field.
   * @returns {boolean} - True if the value is not empty, otherwise false.
   */
  export const validateRequired = (value) => {
    return !isEmpty(value);
  };
  
  /**
   * Validates the length of a string.
   * @param {string} value - The value to check.
   * @param {number} minLength - The minimum length of the string.
   * @param {number} maxLength - The maximum length of the string.
   * @returns {boolean} - True if the value's length is within the specified range, otherwise false.
   */
  export const validateLength = (value, minLength, maxLength) => {
    return value.length >= minLength && value.length <= maxLength;
  };
  