import React, { useEffect, useState } from 'react';
import { useThemeSettings } from '../../hooks/useThemeSettings'; // Custom hook for theme-related settings
import { ToggleSwitch } from '../../components/ToggleSwitch'; // Custom toggle switch component
import styles from './styles/settings.module.css'; // CSS styles for the settings page

const ThemeSettings = () => {
  const { theme, setTheme } = useThemeSettings(); // Get current theme and setter function from the custom hook
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark'); // Local state to handle the toggle switch

  useEffect(() => {
    // Update the theme when the local state changes
    setTheme(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode, setTheme]);

  return (
    <div className={styles.settingsContainer}>
      <h2 className={styles.settingsTitle}>Theme Settings</h2>
      <div className={styles.settingsCard}>
        <h3>Appearance</h3>
        <p>Choose between light or dark mode for your chatbot interface.</p>
        <div className={styles.toggleWrapper}>
          <span>Dark Mode</span>
          <ToggleSwitch 
            checked={isDarkMode} 
            onChange={() => setIsDarkMode(!isDarkMode)} 
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
