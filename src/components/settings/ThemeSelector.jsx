import React, { useState, useEffect } from 'react';

// Utility function to switch themes
const setTheme = (theme) => {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
};

const ThemeSelector = () => {
  const [theme, setThemeState] = useState(localStorage.getItem('theme') || 'light');

  // Effect to apply the theme on initial render
  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setThemeState(newTheme);
  };

  return (
    <div className="theme-selector">
      <h3>Select Theme</h3>
      <div className="theme-options">
        <button
          className={`theme-option ${theme === 'light' ? 'active' : ''}`}
          onClick={() => handleThemeChange('light')}
        >
          Light
        </button>
        <button
          className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => handleThemeChange('dark')}
        >
          Dark
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;
