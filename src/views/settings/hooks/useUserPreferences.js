// src/hooks/useUserPreferences.js

import { useState, useEffect } from 'react';
import { getUserPreferences, updateUserPreferences } from '../services/userPreferencesService';

const useUserPreferences = () => {
  const [preferences, setPreferences] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user preferences on component mount
  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const userPrefs = await getUserPreferences();  // Fetch preferences from the backend
        setPreferences(userPrefs);
        setLoading(false);
      } catch (err) {
        setError('Error fetching preferences');
        setLoading(false);
      }
    };

    fetchPreferences();
  }, []);

  // Update specific preference
  const updatePreference = async (key, value) => {
    try {
      await updateUserPreferences(key, value);  // Update preference in the backend
      setPreferences((prevPrefs) => ({
        ...prevPrefs,
        [key]: value,  // Update local state
      }));
    } catch (err) {
      setError('Error updating preference');
    }
  };

  return {
    preferences,
    loading,
    error,
    updatePreference,
  };
};

export default useUserPreferences;
