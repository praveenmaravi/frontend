// src/views/settings/hooks/useIntegrationSettings.js

import { useState, useEffect } from 'react';
import { getIntegrations, addIntegration, removeIntegration } from '../services/integrationService';

const useIntegrationSettings = () => {
  const [integrations, setIntegrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch integrations from the backend
  useEffect(() => {
    const fetchIntegrations = async () => {
      try {
        const response = await getIntegrations();
        setIntegrations(response.data);
      } catch (err) {
        setError('Failed to load integrations');
      } finally {
        setLoading(false);
      }
    };

    fetchIntegrations();
  }, []);

  // Add a new integration
  const handleAddIntegration = async (integrationData) => {
    try {
      setLoading(true);
      await addIntegration(integrationData);
      const updatedIntegrations = await getIntegrations();
      setIntegrations(updatedIntegrations.data);
    } catch (err) {
      setError('Failed to add integration');
    } finally {
      setLoading(false);
    }
  };

  // Remove an existing integration
  const handleRemoveIntegration = async (integrationId) => {
    try {
      setLoading(true);
      await removeIntegration(integrationId);
      const updatedIntegrations = await getIntegrations();
      setIntegrations(updatedIntegrations.data);
    } catch (err) {
      setError('Failed to remove integration');
    } finally {
      setLoading(false);
    }
  };

  return {
    integrations,
    loading,
    error,
    handleAddIntegration,
    handleRemoveIntegration
  };
};

export default useIntegrationSettings;
