// frontend/src/store/selectors/chatbotSelectors.js

// Selector to get the list of all chat messages
export const getChatMessages = (state) => state.chatbot.messages;

// Selector to get the current user’s query/input
export const getCurrentUserQuery = (state) => state.chatbot.currentQuery;

// Selector to get the status of the chatbot (e.g., loading, idle, error)
export const getBotStatus = (state) => state.chatbot.status;

// Selector to get the bot's response to the user's query
export const getBotResponse = (state) => state.chatbot.response;

// Selector to check if the chatbot is currently in an active conversation
export const isChatActive = (state) => state.chatbot.isActive;

// Selector to get any error messages related to chatbot operations
export const getChatbotError = (state) => state.chatbot.error;

// Selector to get chatbot configurations, such as default settings
export const getChatbotConfig = (state) => state.chatbot.config;

// Selector to get chatbot’s sentiment analysis (if integrated)
export const getChatbotSentiment = (state) => state.chatbot.sentiment;

// Selector to get the current chatbot's personality or behavior mode (e.g., formal, casual)
export const getChatbotPersonality = (state) => state.chatbot.personality;

