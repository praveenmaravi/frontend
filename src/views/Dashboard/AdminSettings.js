// frontend/src/views/Dashboard/AdminSettings.js

import React, { useState, useEffect } from 'react';
import { Button, Input, Select, Form } from 'antd';
import { getAdminSettings, updateAdminSettings } from '../../api/adminApi'; // Hypothetical API functions

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    userRoles: [],
    securityLevel: '',
    apiKey: '',
    notificationPrefs: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch current admin settings when the component mounts
    const fetchSettings = async () => {
      try {
        const response = await getAdminSettings();
        setSettings(response.data);
      } catch (error) {
        console.error('Error fetching admin settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleSaveSettings = async () => {
    setLoading(true);
    try {
      await updateAdminSettings(settings);
      alert('Settings updated successfully!');
    } catch (error) {
      alert('Error updating settings!');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (key, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  return (
    <div className="admin-settings">
      <h2>Admin Settings</h2>
      {loading ? (
        <p>Loading settings...</p>
      ) : (
        <Form layout="vertical">
          <Form.Item label="User Roles">
            <Select
              value={settings.userRoles}
              onChange={(value) => handleChange('userRoles', value)}
              mode="multiple"
              placeholder="Select user roles"
            >
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="moderator">Moderator</Select.Option>
              <Select.Option value="user">User</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Security Level">
            <Select
              value={settings.securityLevel}
              onChange={(value) => handleChange('securityLevel', value)}
              placeholder="Select security level"
            >
              <Select.Option value="low">Low</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="high">High</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="API Key">
            <Input
              type="text"
              value={settings.apiKey}
              onChange={(e) => handleChange('apiKey', e.target.value)}
              placeholder="Enter API key"
            />
          </Form.Item>

          <Form.Item label="Notification Preferences">
            <Select
              value={settings.notificationPrefs}
              onChange={(value) => handleChange('notificationPrefs', value)}
              placeholder="Select notification preference"
            >
              <Select.Option value="email">Email</Select.Option>
              <Select.Option value="push">Push</Select.Option>
              <Select.Option value="sms">SMS</Select.Option>
            </Select>
          </Form.Item>

          <Button type="primary" onClick={handleSaveSettings} loading={loading}>
            Save Settings
          </Button>
        </Form>
      )}
    </div>
  );
};

export default AdminSettings;
