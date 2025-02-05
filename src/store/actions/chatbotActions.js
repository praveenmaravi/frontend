// actions/chatbotActions.js

import {
    SEND_MESSAGE,
    RECEIVE_MESSAGE,
    SET_CHATBOT_STATUS,
    CLEAR_CHAT_HISTORY,
    UPDATE_CHATBOT_SETTINGS,
  } from '../types/chatbotTypes';
  
  // Action to send a message from the user to the chatbot
  export const sendMessage = (message) => {
    return {
      type: SEND_MESSAGE,
      payload: message,
    };
  };
  
  // Action to receive a message from the chatbot
  export const receiveMessage = (message) => {
    return {
      type: RECEIVE_MESSAGE,
      payload: message,
    };
  };
  
  // Action to set the current status of the chatbot (e.g., 'active', 'inactive', 'thinking')
  export const setChatbotStatus = (status) => {
    return {
      type: SET_CHATBOT_STATUS,
      payload: status,
    };
  };
  
  // Action to clear the chat history
  export const clearChatHistory = () => {
    return {
      type: CLEAR_CHAT_HISTORY,
    };
  };
  
  // Action to update chatbot settings (e.g., language, voice, theme)
  export const updateChatbotSettings = (settings) => {
    return {
      type: UPDATE_CHATBOT_SETTINGS,
      payload: settings,
    };
  };
  