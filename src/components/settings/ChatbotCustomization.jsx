// frontend/src/components/settings/ChatbotCustomization.jsx

import React, { useState } from 'react';

const ChatbotCustomization = () => {
  const [botName, setBotName] = useState('');
  const [botAvatar, setBotAvatar] = useState('');
  const [responseStyle, setResponseStyle] = useState('formal');

  const handleBotNameChange = (event) => setBotName(event.target.value);
  const handleBotAvatarChange = (event) => setBotAvatar(event.target.value);
  const handleResponseStyleChange = (event) => setResponseStyle(event.target.value);

  const handleSaveSettings = () => {
    // This is where you'd integrate saving functionality (e.g., API call)
    console.log('Chatbot Settings Saved:', { botName, botAvatar, responseStyle });
  };

  return (
    <div className="customization-container">
      <h2>Chatbot Customization</h2>
      
      <div className="form-group">
        <label htmlFor="botName">Chatbot Name</label>
        <input
          type="text"
          id="botName"
          value={botName}
          onChange={handleBotNameChange}
          placeholder="Enter chatbot name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="botAvatar">Chatbot Avatar URL</label>
        <input
          type="text"
          id="botAvatar"
          value={botAvatar}
          onChange={handleBotAvatarChange}
          placeholder="Enter avatar image URL"
        />
      </div>

      <div className="form-group">
        <label htmlFor="responseStyle">Response Style</label>
        <select
          id="responseStyle"
          value={responseStyle}
          onChange={handleResponseStyleChange}
        >
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
          <option value="friendly">Friendly</option>
        </select>
      </div>

      <button className="save-btn" onClick={handleSaveSettings}>
        Save Settings
      </button>
    </div>
  );
};

export default ChatbotCustomization;
