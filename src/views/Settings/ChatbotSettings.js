// frontend/src/views/Settings/ChatbotSettings.js

import React, { useState } from 'react';
import { Button, Input, Select, Switch } from 'antd';
import { saveSettings } from '../../utils/settingsService'; // Assuming a utility function to save settings

const ChatbotSettings = () => {
  const [chatbotName, setChatbotName] = useState('Chatbot'); // Default name for the chatbot
  const [responseTone, setResponseTone] = useState('Friendly'); // Default tone
  const [language, setLanguage] = useState('English'); // Default language
  const [enableVoice, setEnableVoice] = useState(false); // Toggle for voice support
  const [autoResponse, setAutoResponse] = useState(true); // Enable/disable auto responses

  const handleSaveSettings = () => {
    const settings = {
      chatbotName,
      responseTone,
      language,
      enableVoice,
      autoResponse
    };

    // Call utility function to save settings (e.g., localStorage, backend API)
    saveSettings(settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="chatbot-settings-container">
      <h2>Chatbot Settings</h2>

      {/* Chatbot Name */}
      <div className="setting-item">
        <label>Chatbot Name:</label>
        <Input
          value={chatbotName}
          onChange={(e) => setChatbotName(e.target.value)}
          placeholder="Enter chatbot name"
        />
      </div>

      {/* Response Tone */}
      <div className="setting-item">
        <label>Response Tone:</label>
        <Select
          value={responseTone}
          onChange={(value) => setResponseTone(value)}
          options={[
            { label: 'Friendly', value: 'Friendly' },
            { label: 'Professional', value: 'Professional' },
            { label: 'Casual', value: 'Casual' }
          ]}
        />
      </div>

      {/* Language */}
      <div className="setting-item">
        <label>Language:</label>
        <Select
          value={language}
          onChange={(value) => setLanguage(value)}
          options={[
            { label: 'English', value: 'English' },
            { label: 'Spanish', value: 'Spanish' },
            { label: 'French', value: 'French' },
            { label: 'German', value: 'German' }
          ]}
        />
      </div>

      {/* Enable Voice */}
      <div className="setting-item">
        <label>Enable Voice:</label>
        <Switch
          checked={enableVoice}
          onChange={setEnableVoice}
        />
      </div>

      {/* Auto Response */}
      <div className="setting-item">
        <label>Enable Auto-Response:</label>
        <Switch
          checked={autoResponse}
          onChange={setAutoResponse}
        />
      </div>

      {/* Save Button */}
      <div className="setting-item">
        <Button type="primary" onClick={handleSaveSettings}>
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default ChatbotSettings;
