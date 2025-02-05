// reducers/chatbotReducer.js

import {
    SET_CHATBOT_MESSAGES,
    ADD_CHATBOT_MESSAGE,
    SET_CHATBOT_LOADING,
    SET_CHATBOT_ERROR,
    RESET_CHATBOT_STATE,
  } from '../types/chatbotTypes';
  
  const initialState = {
    messages: [],      // Stores the conversation history (array of messages)
    loading: false,    // Indicates if the chatbot is loading/responding
    error: null,       // Stores any error that occurs during interaction
  };
  
  const chatbotReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CHATBOT_MESSAGES:
        return {
          ...state,
          messages: action.payload, // Replace the entire message history
          loading: false,           // Once messages are set, loading is done
          error: null,              // Clear any previous errors
        };
  
      case ADD_CHATBOT_MESSAGE:
        return {
          ...state,
          messages: [...state.messages, action.payload], // Add a new message to the conversation
          loading: false,                                // Loading done after message is added
          error: null,                                   // Clear any previous errors
        };
  
      case SET_CHATBOT_LOADING:
        return {
          ...state,
          loading: true, // Set loading to true when the chatbot is processing
          error: null,   // Clear any previous errors
        };
  
      case SET_CHATBOT_ERROR:
        return {
          ...state,
          loading: false,    // Stop loading
          error: action.payload, // Set the error message
        };
  
      case RESET_CHATBOT_STATE:
        return {
          ...initialState, // Reset the chatbot state to its initial values
        };
  
      default:
        return state;
    }
  };
  
  export default chatbotReducer;
  