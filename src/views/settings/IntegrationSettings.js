import React, { useEffect, useState } from 'react';
import { useIntegrationSettings } from './hooks/useIntegrationSettings';
import { integrationService } from './services/integrationService';
import SettingsCard from './components/SettingsCard';
import SelectDropdown from './components/SelectDropdown';
import { Spinner } from './components/Spinner'; // Assuming there's a spinner component for loading states

const IntegrationSettings = () => {
  const { integrations, loading, error, fetchIntegrations } = useIntegrationSettings();
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  useEffect(() => {
    // Fetch available integrations when the component mounts
    fetchIntegrations();
  }, [fetchIntegrations]);

  const handleIntegrationChange = (integrationId) => {
    setSelectedIntegration(integrationId);
  };

  const handleSaveIntegration = async () => {
    if (selectedIntegration) {
      try {
        // Call backend service to save the selected integration
        await integrationService.saveIntegration(selectedIntegration);
        alert('Integration saved successfully!');
      } catch (err) {
        alert('Error saving integration: ' + err.message);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className="error-message">Failed to load integrations: {error.message}</div>;
  }

  return (
    <div className="settings-page">
      <SettingsCard title="Manage Integrations">
        <div className="flex flex-col space-y-4">
          <SelectDropdown
            label="Select Integration"
            options={integrations.map((integration) => ({
              value: integration.id,
              label: integration.name,
            }))}
            onChange={handleIntegrationChange}
            value={selectedIntegration}
          />

          <button
            className="btn btn-primary mt-4"
            onClick={handleSaveIntegration}
            disabled={!selectedIntegration}
          >
            Save Integration
          </button>
        </div>
      </SettingsCard>
    </div>
  );
};

export default IntegrationSettings;
