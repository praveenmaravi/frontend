import React from 'react';
import PropTypes from 'prop-types';
import './MessageBubble.css'; // Assuming you have a CSS file for styling

// MessageBubble Component
const MessageBubble = ({ message, isUser, timestamp }) => {
  return (
    <div className={`message-bubble ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-content">
        <p className="message-text">{message}</p>
      </div>
      <div className="message-footer">
        <span className="message-timestamp">{timestamp}</span>
      </div>
    </div>
  );
};

// Prop Types
MessageBubble.propTypes = {
  message: PropTypes.string.isRequired,  // The message content
  isUser: PropTypes.bool.isRequired,     // True if the message is from the user, false for the bot
  timestamp: PropTypes.string.isRequired // Timestamp for when the message was sent
};

export default MessageBubble;
