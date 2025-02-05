import apiClient from './apiClient'; // Import the base API client for HTTP requests

// Define the chatbot service with functions for sending messages, getting responses, etc.
const chatbotService = {
  
  // Sends a message to the chatbot and receives a response
  sendMessage: async (message) => {
    try {
      const response = await apiClient.post('/chatbot/message', { message });
      return response.data; // Return the response from the API
    } catch (error) {
      console.error('Error sending message:', error);
      throw error; // Rethrow the error for further handling
    }
  },

  // Fetches the chatbot's conversation history
  getConversationHistory: async () => {
    try {
      const response = await apiClient.get('/chatbot/history');
      return response.data; // Return the conversation history
    } catch (error) {
      console.error('Error fetching conversation history:', error);
      throw error; // Rethrow the error for further handling
    }
  },

  // Starts a new conversation with the chatbot
  startNewConversation: async () => {
    try {
      const response = await apiClient.post('/chatbot/start');
      return response.data; // Return the response from the API
    } catch (error) {
      console.error('Error starting new conversation:', error);
      throw error; // Rethrow the error for further handling
    }
  },

  // Sends user feedback to improve chatbot responses
  sendFeedback: async (feedback) => {
    try {
      const response = await apiClient.post('/chatbot/feedback', { feedback });
      return response.data; // Return the response from the API
    } catch (error) {
      console.error('Error sending feedback:', error);
      throw error; // Rethrow the error for further handling
    }
  },

};

export default chatbotService;
