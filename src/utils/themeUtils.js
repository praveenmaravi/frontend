// themeUtils.js

/**
 * Utility functions for handling theme switching (light/dark mode)
 * and applying global CSS styles.
 */

/**
 * Set the current theme (light or dark) and apply the corresponding styles.
 * @param {string} theme - The theme to set ('light' or 'dark').
 */
export function setTheme(theme) {
    // Validate the theme
    if (theme !== 'light' && theme !== 'dark') {
      console.error('Invalid theme selected');
      return;
    }
  
    // Apply the theme to the body element
    document.body.setAttribute('data-theme', theme);
  
    // Store the theme preference in localStorage
    localStorage.setItem('theme', theme);
  }
  
  /**
   * Get the current theme from localStorage or default to 'light' if not set.
   * @returns {string} - The current theme ('light' or 'dark').
   */
  export function getCurrentTheme() {
    // Retrieve the theme from localStorage, default to 'light' if not found
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'light';
  }
  
  /**
   * Toggle between light and dark themes.
   */
  export function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  
  /**
   * Apply the saved theme when the application loads.
   */
  export function applySavedTheme() {
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme);
  }
  