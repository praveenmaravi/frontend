// frontend/src/views/settings/PrivacySettings.js

import React, { useState, useEffect } from 'react';
import { useUserPreferences } from '../../hooks/useUserPreferences';
import { settingsService } from '../../services/settingsService';
import SettingsCard from '../../components/SettingsCard';
import ToggleSwitch from '../../components/ToggleSwitch';
import InputField from '../../components/InputField';
import { useNotification } from '../../hooks/useNotification';

const PrivacySettings = () => {
  const { userPreferences, updatePreferences } = useUserPreferences();
  const { notify } = useNotification();
  
  const [isGDPRCompliant, setIsGDPRCompliant] = useState(userPreferences.isGDPRCompliant || false);
  const [dataRetentionPeriod, setDataRetentionPeriod] = useState(userPreferences.dataRetentionPeriod || 30);

  useEffect(() => {
    // Load current settings from the backend or local storage
    settingsService.getPrivacySettings()
      .then((settings) => {
        setIsGDPRCompliant(settings.isGDPRCompliant);
        setDataRetentionPeriod(settings.dataRetentionPeriod);
      })
      .catch((error) => {
        console.error('Error loading privacy settings:', error);
      });
  }, []);

  const handleSaveSettings = () => {
    const updatedSettings = {
      isGDPRCompliant,
      dataRetentionPeriod,
    };

    settingsService.updatePrivacySettings(updatedSettings)
      .then(() => {
        notify('Privacy settings updated successfully!', 'success');
        updatePreferences(updatedSettings);  // Update user preferences in the context
      })
      .catch((error) => {
        console.error('Error saving privacy settings:', error);
        notify('Error saving privacy settings. Please try again.', 'error');
      });
  };

  return (
    <div className="p-6">
      <SettingsCard title="Privacy Settings">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">GDPR Compliance</h3>
            <p className="text-sm text-gray-600">
              Ensure that your data handling practices comply with GDPR regulations.
            </p>
            <ToggleSwitch
              label="Enable GDPR Compliance"
              isChecked={isGDPRCompliant}
              onChange={() => setIsGDPRCompliant(!isGDPRCompliant)}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium">Data Retention Period</h3>
            <p className="text-sm text-gray-600">
              Specify the number of days to retain user data. After this period, data will be automatically deleted.
            </p>
            <InputField
              label="Retention Period (in days)"
              type="number"
              value={dataRetentionPeriod}
              onChange={(e) => setDataRetentionPeriod(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSaveSettings}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Settings
            </button>
          </div>
        </div>
      </SettingsCard>
    </div>
  );
};

export default PrivacySettings;
