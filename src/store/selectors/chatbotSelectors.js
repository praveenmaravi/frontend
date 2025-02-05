// selectors/chatbotSelectors.js

// Selector to get all chatbot messages from state
export const selectMessages = (state) => state.chatbot.messages;

// Selector to get the current chatbot status (e.g., idle, waiting, processing)
export const selectChatbotStatus = (state) => state.chatbot.status;

// Selector to get the current conversation ID or session ID
export const selectConversationId = (state) => state.chatbot.conversationId;

// Selector to check if the chatbot is currently active or not
export const selectIsChatbotActive = (state) => state.chatbot.isActive;

// Selector to get the last message sent by the user
export const selectLastUserMessage = (state) => {
  const messages = state.chatbot.messages;
  return messages[messages.length - 1]?.userMessage || null;
};

// Selector to get the last message sent by the bot
export const selectLastBotMessage = (state) => {
  const messages = state.chatbot.messages;
  return messages[messages.length - 1]?.botResponse || null;
};

// Selector to get the chatbot error, if any
export const selectChatbotError = (state) => state.chatbot.error;

// Selector to get the bot's response delay (useful for metrics)
export const selectBotResponseTime = (state) => state.chatbot.responseTime;
