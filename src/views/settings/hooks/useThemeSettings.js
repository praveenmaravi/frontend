// src/hooks/useThemeSettings.js

import { useState, useEffect } from 'react';

// Custom hook to handle theme-related settings (e.g., dark/light mode)
const useThemeSettings = () => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  // Effect to check and apply the saved theme on component mount
  useEffect(() => {
    // Check localStorage or other storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to light theme if no preference is set
      setTheme('light');
    }
  }, []);

  // Effect to apply theme changes to the document body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }

    // Save the selected theme to localStorage for persistence across sessions
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useThemeSettings;
