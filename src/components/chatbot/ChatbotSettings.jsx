import React, { useState } from 'react';
import { Button, InputField, SelectDropdown, ToggleSwitch } from '../ui';
import { APIHelper } from '../../utils/APIHelper';
import './ChatbotSettings.css';

const ChatbotSettings = () => {
  const [botName, setBotName] = useState('');
  const [botAvatar, setBotAvatar] = useState('');
  const [greetingMessage, setGreetingMessage] = useState('');
  const [language, setLanguage] = useState('English');
  const [isTypingIndicatorEnabled, setIsTypingIndicatorEnabled] = useState(true);

  const handleSaveSettings = () => {
    // Here you can call an API to save the settings
    APIHelper.saveBotSettings({
      botName,
      botAvatar,
      greetingMessage,
      language,
      isTypingIndicatorEnabled
    })
    .then(response => {
      alert('Settings saved successfully!');
    })
    .catch(error => {
      console.error('Error saving settings', error);
    });
  };

  return (
    <div className="chatbot-settings">
      <h2>Chatbot Settings</h2>
      
      <div className="setting-group">
        <label>Bot Name</label>
        <InputField 
          type="text" 
          value={botName} 
          onChange={(e) => setBotName(e.target.value)} 
          placeholder="Enter bot name"
        />
      </div>
      
      <div className="setting-group">
        <label>Bot Avatar</label>
        <InputField 
          type="text" 
          value={botAvatar} 
          onChange={(e) => setBotAvatar(e.target.value)} 
          placeholder="Enter avatar URL"
        />
      </div>
      
      <div className="setting-group">
        <label>Greeting Message</label>
        <InputField 
          type="text" 
          value={greetingMessage} 
          onChange={(e) => setGreetingMessage(e.target.value)} 
          placeholder="Enter a greeting message"
        />
      </div>
      
      <div className="setting-group">
        <label>Language</label>
        <SelectDropdown 
          value={language} 
          options={['English', 'Spanish', 'French', 'German']} 
          onChange={(e) => setLanguage(e.target.value)} 
        />
      </div>
      
      <div className="setting-group">
        <label>Enable Typing Indicator</label>
        <ToggleSwitch 
          checked={isTypingIndicatorEnabled} 
          onChange={() => setIsTypingIndicatorEnabled(!isTypingIndicatorEnabled)} 
        />
      </div>

      <Button onClick={handleSaveSettings}>Save Settings</Button>
    </div>
  );
};

export default ChatbotSettings;
