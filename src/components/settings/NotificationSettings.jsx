import React, { useState } from 'react';

// Simulate fetching user settings (this could come from an API)
const fetchUserNotificationSettings = () => {
  return {
    email: true,
    push: false,
    sms: true,
  };
};

// Simulate saving user settings
const saveNotificationSettings = (settings) => {
  console.log("Settings saved:", settings);
};

const NotificationSettings = () => {
  const [settings, setSettings] = useState(fetchUserNotificationSettings());

  const handleToggle = (type) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [type]: !prevSettings[type],
    }));
  };

  const handleSave = () => {
    saveNotificationSettings(settings);
    alert('Notification settings saved!');
  };

  return (
    <div className="notification-settings">
      <h2>Notification Settings</h2>
      <div className="setting-option">
        <label>Email Notifications</label>
        <input
          type="checkbox"
          checked={settings.email}
          onChange={() => handleToggle('email')}
        />
      </div>
      <div className="setting-option">
        <label>Push Notifications</label>
        <input
          type="checkbox"
          checked={settings.push}
          onChange={() => handleToggle('push')}
        />
      </div>
      <div className="setting-option">
        <label>SMS Notifications</label>
        <input
          type="checkbox"
          checked={settings.sms}
          onChange={() => handleToggle('sms')}
        />
      </div>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default NotificationSettings;
