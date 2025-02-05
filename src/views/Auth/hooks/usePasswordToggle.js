import { useState } from 'react';

/**
 * Custom hook for toggling password visibility.
 * @returns {Array} - Array containing the password visibility state and the toggle function.
 */
const usePasswordToggle = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  /**
   * Function to toggle password visibility.
   */
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return [isPasswordVisible, togglePasswordVisibility];
};

export default usePasswordToggle;
