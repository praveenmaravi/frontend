import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MessageInput.css';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && message.trim() !== '') {
      handleSend();
    }
  };

  return (
    <div className="message-input-container">
      <input
        type="text"
        className="message-input"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
      <button
        className="send-button"
        onClick={handleSend}
        disabled={!message.trim()}
      >
        Send
      </button>
    </div>
  );
};

MessageInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageInput;
