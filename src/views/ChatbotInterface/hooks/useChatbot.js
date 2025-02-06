import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../store/chatbotSlice'; // Corrected import path
import axios from 'axios';

const useChatbot = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // Function to send a message to the chatbot
  const sendMessage = useCallback(async (messageText) => {
    setLoading(true);
    setError(null);

    try {
      // Add the user's message to the store (or UI)
      dispatch(addMessage({ sender: 'user', text: messageText }));

      // Send the message to the backend (API call)
      const response = await axios.post('/api/chatbot', { message: messageText });

      // Dispatch the chatbot's response to the store
      dispatch(addMessage({ sender: 'bot', text: response.data.reply }));

      setLoading(false);
    } catch (err) {
      // Handle error (show error message or retry)
      setError('Failed to send message');
      setLoading(false);
    }
  }, [dispatch]);

  // Function to handle quick replies (for predefined buttons)
  const sendQuickReply = useCallback((quickReplyText) => {
    sendMessage(quickReplyText);
  }, [sendMessage]);

  return {
    loading,
    error,
    sendMessage,
    sendQuickReply,
  };
};

export default useChatbot;
