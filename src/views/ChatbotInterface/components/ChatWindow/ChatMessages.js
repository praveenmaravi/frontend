import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MessageInput from './MessageInput'; // A reusable component for individual messages
import { selectMessages } from '../../store/chatbotSlice'; // Redux selector for chatbot messages

const ChatMessages = () => {
  // Fetch messages from the Redux store
  const messages = useSelector(selectMessages);

  return (
    <div className="chat-messages-container overflow-auto h-full p-4">
      <div className="chat-messages flex flex-col space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500">No messages yet...</div>
        ) : (
          messages.map((message, index) => (
            <Message
              key={index}
              sender={message.sender} // 'user' or 'bot'
              content={message.content}
              timestamp={message.timestamp}
            />
          ))
        )}
      </div>
    </div>
  );
};

ChatMessages.propTypes = {
  // Optionally, pass messages as props if not using Redux
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.oneOf(['user', 'bot']).isRequired,
      content: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ),
};

export default ChatMessages;
