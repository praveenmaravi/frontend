import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/chatbotSlice'; // Assuming Redux is used for state management
import { FaPaperPlane } from 'react-icons/fa'; // For the send icon

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch(); // To dispatch message action to store

  // Handle input change
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle form submission (send message)
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(sendMessage(message)); // Send the message to the store or API
      setMessage(''); // Clear the input field after sending
    }
  };

  return (
    <div className="w-full flex items-center p-4 border-t border-gray-200 bg-white">
      <textarea
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message..."
        rows="1"
        className="flex-grow p-2 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSendMessage}
        className="ml-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
        aria-label="Send Message"
      >
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default MessageInput;
