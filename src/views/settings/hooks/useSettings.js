// src/hooks/useSettings.js

import { useState, useEffect } from 'react';
import { settingsService } from '../services/settingsService';

const useSettings = () => {
  const [settings, setSettings] = useState(null); // Holds the current settings
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [error, setError] = useState(null); // Error state for API calls

  // Fetch settings from API on initial load
  useEffect(() => {
    const fetchSettings = async () => {
      setLoading(true);
      try {
        const data = await settingsService.getSettings(); // API call to fetch settings
        setSettings(data); // Update state with fetched settings
      } catch (err) {
        setError('Failed to load settings');
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []); // Empty dependency array ensures this runs once on component mount

  // Update settings via API
  const updateSettings = async (updatedSettings) => {
    setLoading(true);
    try {
      await settingsService.updateSettings(updatedSettings); // API call to update settings
      setSettings(updatedSettings); // Update state with new settings
    } catch (err) {
      setError('Failed to update settings');
    } finally {
      setLoading(false);
    }
  };

  return {
    settings,
    loading,
    error,
    updateSettings,
  };
};

export default useSettings;
