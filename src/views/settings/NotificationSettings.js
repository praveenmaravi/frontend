// frontend/src/views/settings/NotificationSettings.js

import React, { useState, useEffect } from 'react';
import { useUserPreferences } from './hooks/useUserPreferences'; // Custom hook to manage user preferences
import { ToggleSwitch } from './components/ToggleSwitch'; // Custom toggle switch component
import { settingsService } from './services/settingsService'; // Service to handle API calls
import styles from './styles/settings.module.css'; // Import the CSS for styling

const NotificationSettings = () => {
  const { userPreferences, updateUserPreferences } = useUserPreferences(); // Retrieve user preferences
  const [emailNotifications, setEmailNotifications] = useState(userPreferences.emailNotifications);
  const [smsNotifications, setSmsNotifications] = useState(userPreferences.smsNotifications);
  const [pushNotifications, setPushNotifications] = useState(userPreferences.pushNotifications);

  // Effect to sync user preferences when settings change
  useEffect(() => {
    setEmailNotifications(userPreferences.emailNotifications);
    setSmsNotifications(userPreferences.smsNotifications);
    setPushNotifications(userPreferences.pushNotifications);
  }, [userPreferences]);

  // Handle notification settings update
  const handleUpdateSettings = async () => {
    try {
      const updatedPreferences = {
        emailNotifications,
        smsNotifications,
        pushNotifications,
      };
      await settingsService.updateUserPreferences(updatedPreferences);
      updateUserPreferences(updatedPreferences); // Update context or global state with the new preferences
    } catch (error) {
      console.error('Failed to update notification settings:', error);
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <h2 className={styles.sectionTitle}>Notification Settings</h2>
      <div className={styles.settingsSection}>
        <label className={styles.settingLabel}>Email Notifications</label>
        <ToggleSwitch
          isChecked={emailNotifications}
          onChange={() => setEmailNotifications(!emailNotifications)}
        />
      </div>
      <div className={styles.settingsSection}>
        <label className={styles.settingLabel}>SMS Notifications</label>
        <ToggleSwitch
          isChecked={smsNotifications}
          onChange={() => setSmsNotifications(!smsNotifications)}
        />
      </div>
      <div className={styles.settingsSection}>
        <label className={styles.settingLabel}>Push Notifications</label>
        <ToggleSwitch
          isChecked={pushNotifications}
          onChange={() => setPushNotifications(!pushNotifications)}
        />
      </div>
      <button className={styles.saveButton} onClick={handleUpdateSettings}>
        Save Changes
      </button>
    </div>
  );
};

export default NotificationSettings;
