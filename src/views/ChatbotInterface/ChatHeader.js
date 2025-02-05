// frontend/src/views/ChatbotInterface/ChatHeader.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCog, FaMicrophoneSlash, FaMicrophone } from 'react-icons/fa';
import './ChatHeader.css'; // Assume you have a CSS file for styling

const ChatHeader = ({ chatbotName, chatbotLogo, onSettingsClick, onMuteToggle, isMuted }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
    if (onSettingsClick) onSettingsClick();
  };

  const handleMuteClick = () => {
    if (onMuteToggle) onMuteToggle();
  };

  return (
    <div className="chat-header">
      <div className="chat-header-left">
        {chatbotLogo && <img src={chatbotLogo} alt="Chatbot Logo" className="chat-logo" />}
        <h2 className="chatbot-name">{chatbotName}</h2>
      </div>

      <div className="chat-header-right">
        {/* Mute Button */}
        <button
          className="mute-button"
          onClick={handleMuteClick}
          aria-label={isMuted ? "Unmute Chatbot" : "Mute Chatbot"}
        >
          {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
        </button>

        {/* Settings Button */}
        <button
          className="settings-button"
          onClick={handleSettingsClick}
          aria-label="Chatbot Settings"
        >
          <FaCog />
        </button>

        {/* Settings Dropdown */}
        {isSettingsOpen && (
          <div className="settings-dropdown">
            <ul>
              <li><button>General Settings</button></li>
              <li><button>Language</button></li>
              <li><button>Privacy</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

ChatHeader.propTypes = {
  chatbotName: PropTypes.string.isRequired,
  chatbotLogo: PropTypes.string,
  onSettingsClick: PropTypes.func,
  onMuteToggle: PropTypes.func,
  isMuted: PropTypes.bool,
};

ChatHeader.defaultProps = {
  chatbotLogo: '',
  onSettingsClick: () => {},
  onMuteToggle: () => {},
  isMuted: false,
};

export default ChatHeader;
