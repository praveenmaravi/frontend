// frontend/src/views/ChatbotInterface/components/ChatbotAvatar/ChatbotAvatar.js

import React from 'react';
import PropTypes from 'prop-types';
import './style/ChatbotAvatar.css';

const ChatbotAvatar = ({ avatarUrl, altText }) => {
  return (
    <div className="chatbot-avatar">
      <img
        src={avatarUrl || '/default-avatar.png'} // Default avatar if none is provided
        alt={altText || 'Chatbot Avatar'}
        className="chatbot-avatar-img"
      />
    </div>
  );
};

ChatbotAvatar.propTypes = {
  avatarUrl: PropTypes.string,
  altText: PropTypes.string,
};

export default ChatbotAvatar;
