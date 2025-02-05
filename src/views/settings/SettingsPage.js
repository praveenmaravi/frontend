import React, { useState, useEffect } from 'react';
import SettingsCard from './components/SettingsCard';
import ThemeSettings from './ThemeSettings';
import NotificationSettings from './NotificationSettings';
import IntegrationSettings from './IntegrationSettings';
import PrivacySettings from './PrivacySettings';
import { useSettings } from './hooks/useSettings';
import './styles/settings.module.css';

const SettingsPage = () => {
  const { settings, updateSettings } = useSettings();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch settings on initial load
    const fetchSettings = async () => {
      try {
        await settings();
      } catch (error) {
        console.error("Error loading settings:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading settings...</div>;
  }

  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>

      <div className="settings-sections">
        {/* Theme Settings */}
        <SettingsCard title="Theme Settings">
          <ThemeSettings settings={settings.theme} updateSettings={updateSettings} />
        </SettingsCard>

        {/* Notification Settings */}
        <SettingsCard title="Notification Settings">
          <NotificationSettings settings={settings.notifications} updateSettings={updateSettings} />
        </SettingsCard>

        {/* Integration Settings */}
        <SettingsCard title="Integration Settings">
          <IntegrationSettings settings={settings.integrations} updateSettings={updateSettings} />
        </SettingsCard>

        {/* Privacy Settings */}
        <SettingsCard title="Privacy Settings">
          <PrivacySettings settings={settings.privacy} updateSettings={updateSettings} />
        </SettingsCard>
      </div>
    </div>
  );
};

export default SettingsPage;
