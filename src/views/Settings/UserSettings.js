import React, { useState, useEffect } from 'react';
import { Button, Input, Switch, Select } from 'antd';
import { UserOutlined, BellOutlined, LanguageOutlined } from '@ant-design/icons';

const { Option } = Select;

const UserSettings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch current user settings from API or context
    // For demonstration purposes, we're using static data
    setUsername('JohnDoe');
    setEmail('john.doe@example.com');
    setNotifications(true);
    setLanguage('en');
  }, []);

  const handleSave = () => {
    setLoading(true);
    // Simulate API call to save user settings
    setTimeout(() => {
      setLoading(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  return (
    <div className="user-settings-container">
      <h2>User Settings</h2>
      
      {/* Username */}
      <div className="setting-item">
        <label>Username</label>
        <Input 
          prefix={<UserOutlined />} 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      
      {/* Email */}
      <div className="setting-item">
        <label>Email</label>
        <Input 
          prefix={<UserOutlined />} 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      {/* Notifications */}
      <div className="setting-item">
        <label>Enable Notifications</label>
        <Switch 
          checked={notifications} 
          onChange={(checked) => setNotifications(checked)} 
        />
      </div>

      {/* Language Selection */}
      <div className="setting-item">
        <label>Preferred Language</label>
        <Select 
          value={language} 
          onChange={(value) => setLanguage(value)} 
          suffixIcon={<LanguageOutlined />}
        >
          <Option value="en">English</Option>
          <Option value="es">Spanish</Option>
          <Option value="fr">French</Option>
          <Option value="de">German</Option>
        </Select>
      </div>

      {/* Save Button */}
      <div className="setting-item">
        <Button 
          type="primary" 
          onClick={handleSave} 
          loading={loading}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default UserSettings;
