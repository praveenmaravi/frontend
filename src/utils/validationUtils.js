// validationUtils.js

/**
 * Validates if a string is a valid email format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
export function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  /**
   * Validates if a string is a valid phone number format.
   * @param {string} phoneNumber - The phone number to validate.
   * @returns {boolean} - True if the phone number is valid, false otherwise.
   */
  export function isPhoneNumberValid(phoneNumber) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 international format
    return phoneRegex.test(phoneNumber);
  }
  
  /**
   * Validates if a string is a valid URL.
   * @param {string} url - The URL to validate.
   * @returns {boolean} - True if the URL is valid, false otherwise.
   */
  export function isValidURL(url) {
    const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?$/i;
    return urlRegex.test(url);
  }
  
  /**
   * Validates if a string contains only alphabetic characters.
   * @param {string} str - The string to validate.
   * @returns {boolean} - True if the string contains only alphabetic characters, false otherwise.
   */
  export function isAlphabetic(str) {
    const alphabeticRegex = /^[A-Za-z]+$/;
    return alphabeticRegex.test(str);
  }
  
  /**
   * Validates if a string is a valid number.
   * @param {string} str - The string to check.
   * @returns {boolean} - True if the string is a valid number, false otherwise.
   */
  export function isNumber(str) {
    const numberRegex = /^-?\d+(\.\d+)?$/;
    return numberRegex.test(str);
  }
  
  /**
   * Validates if a string contains only alphanumeric characters (letters and numbers).
   * @param {string} str - The string to validate.
   * @returns {boolean} - True if the string is alphanumeric, false otherwise.
   */
  export function isAlphanumeric(str) {
    const alphanumericRegex = /^[A-Za-z0-9]+$/;
    return alphanumericRegex.test(str);
  }
  
  /**
   * Validates if a string matches a minimum length.
   * @param {string} str - The string to validate.
   * @param {number} minLength - The minimum length of the string.
   * @returns {boolean} - True if the string length is greater than or equal to minLength, false otherwise.
   */
  export function isValidLength(str, minLength) {
    return str.length >= minLength;
  }
  
  /**
   * Validates if a password meets a specific strength requirement (at least one number, one letter, and 6 characters).
   * @param {string} password - The password to validate.
   * @returns {boolean} - True if the password is strong, false otherwise.
   */
  export function isStrongPassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  }
  
  