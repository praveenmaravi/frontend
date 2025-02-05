// frontend/src/services/chatbotService.js

import axios from 'axios';

// Define the API endpoint for chatbot interaction
const API_URL = 'https://your-api-endpoint.com/chatbot';

// Function to send a message to the chatbot and receive the response
export const sendMessageToChatbot = async (userMessage) => {
  try {
    // Sending user message to the backend
    const response = await axios.post(`${API_URL}/message`, {
      message: userMessage,
    });

    // Returning the response from the chatbot
    return response.data;
  } catch (error) {
    console.error("Error sending message to chatbot:", error);
    throw new Error('Error interacting with the chatbot');
  }
};

// Function to start a new chat session
export const startNewChatSession = async () => {
  try {
    // Making a request to start a new chat session
    const response = await axios.post(`${API_URL}/start`);

    // Returning session ID or initial data for the session
    return response.data;
  } catch (error) {
    console.error("Error starting a new chat session:", error);
    throw new Error('Error starting new chat session');
  }
};

// Function to fetch the chat history
export const fetchChatHistory = async (sessionId) => {
  try {
    // Fetching previous conversation history for the session
    const response = await axios.get(`${API_URL}/history`, {
      params: { sessionId },
    });

    // Returning the chat history data
    return response.data;
  } catch (error) {
    console.error("Error fetching chat history:", error);
    throw new Error('Error fetching chat history');
  }
};
