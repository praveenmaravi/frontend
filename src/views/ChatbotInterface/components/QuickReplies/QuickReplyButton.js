// frontend/src/views/ChatbotInterface/components/QuickReplies/QuickReplyButton.js

import React from 'react';

const QuickReplyButton = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none ${className}`}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
};

export default QuickReplyButton;
