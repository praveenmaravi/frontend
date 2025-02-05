// frontend/src/services/chatbot/conversationService.js

import { chatbotManager } from './chatbotManager';
import { historyService } from './historyService';
import { emotionDetectionService } from './emotionDetectionService';
import { nlpClient } from '../nlp/nlpClient';
import { apiClient } from '../api/apiClient';

/**
 * Service to handle the interaction flow for chatbot conversations.
 */
const conversationService = {
  /**
   * Starts a new conversation or resumes an existing one.
   * @param {string} userId - The ID of the user interacting with the chatbot.
   * @param {string} message - The user's message to start or continue the conversation.
   * @returns {Promise} - Resolves with the chatbot's response.
   */
  startOrContinueConversation: async (userId, message) => {
    try {
      // Detect user emotions from the message
      const emotion = await emotionDetectionService.detectEmotion(message);
      console.log('Detected emotion:', emotion);

      // Create the conversation payload
      const conversationPayload = {
        userId,
        message,
        emotion,
      };

      // Add to history (optional)
      historyService.saveMessage(userId, message, emotion);

      // Check if we have a prior conversation context, or start a new one
      const conversationContext = chatbotManager.getConversationContext(userId);
      const response = await chatbotManager.getBotResponse(conversationPayload, conversationContext);

      // Process NLP if necessary (e.g., if language or sentiment analysis is needed)
      const processedResponse = await nlpClient.processResponse(response);

      // Optionally, store or send back to the server if needed
      await apiClient.post('/chatbot/messages', {
        userId,
        message,
        response: processedResponse,
      });

      // Return the chatbot's processed response
      return processedResponse;
    } catch (error) {
      console.error('Error during conversation:', error);
      throw error;
    }
  },

  /**
   * Ends the conversation and stores any final messages.
   * @param {string} userId - The ID of the user.
   * @returns {Promise} - Resolves when the conversation is successfully ended.
   */
  endConversation: async (userId) => {
    try {
      // Clear conversation state in chatbot manager
      chatbotManager.endConversation(userId);

      // Optionally, save the final conversation history to the backend
      const conversationHistory = historyService.getConversationHistory(userId);
      await apiClient.post('/chatbot/endConversation', {
        userId,
        history: conversationHistory,
      });

      // Optionally, return a final message from the bot (e.g., "Goodbye!")
      return 'Goodbye! Have a great day!';
    } catch (error) {
      console.error('Error ending conversation:', error);
      throw error;
    }
  },
};

export { conversationService };
