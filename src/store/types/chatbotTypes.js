// types/chatbotTypes.js

// Chatbot Action Types
export const SEND_MESSAGE = 'SEND_MESSAGE'; // Action to send a message to the chatbot
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'; // Action to receive a message from the chatbot
export const SET_CHATBOT_LOADING = 'SET_CHATBOT_LOADING'; // Action to set chatbot's loading state
export const SET_CHATBOT_ERROR = 'SET_CHATBOT_ERROR'; // Action to set chatbot error state
export const SET_CHATBOT_HISTORY = 'SET_CHATBOT_HISTORY'; // Action to update conversation history
export const CLEAR_CHATBOT_HISTORY = 'CLEAR_CHATBOT_HISTORY'; // Action to clear conversation history
export const SET_CHATBOT_STATUS = 'SET_CHATBOT_STATUS'; // Action to set chatbot's status (e.g., active, idle)

// Action Types for chatbot interactions with the user
export const INITIATE_CHAT = 'INITIATE_CHAT'; // Action to initiate a new chat session
export const END_CHAT = 'END_CHAT'; // Action to end the current chat session
export const TOGGLE_CHATBOT_VISIBILITY = 'TOGGLE_CHATBOT_VISIBILITY'; // Action to toggle chatbot UI visibility

// Action Types for chatbot settings (e.g., preferences)
export const SET_CHATBOT_THEME = 'SET_CHATBOT_THEME'; // Action to set chatbot's theme (light/dark)
export const SET_CHATBOT_LANGUAGE = 'SET_CHATBOT_LANGUAGE'; // Action to set chatbot's language
export const SET_CHATBOT_CUSTOMIZATION = 'SET_CHATBOT_CUSTOMIZATION'; // Action to apply customizations to chatbot appearance
