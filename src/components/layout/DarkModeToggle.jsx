import React, { useState, useEffect } from 'react';

// A utility to detect the current theme (light/dark)
const getCurrentTheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const DarkModeToggle = () => {
  // State to track the current theme
  const [theme, setTheme] = useState(getCurrentTheme);

  // Set theme to localStorage for persistence
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
      <span className="theme-label">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default DarkModeToggle;
