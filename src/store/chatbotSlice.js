// src/store/chatbotSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state for the chatbot slice
const initialState = {
  messages: [],
  isLoading: false,
  error: null,
  userMessage: '',
  chatbotResponse: '',
};

// Async thunk for sending a message to the chatbot and receiving a response
export const sendMessageToChatbot = createAsyncThunk(
  'chatbot/sendMessageToChatbot',
  async (message, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/chatbot', { message });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

// Slice to handle chatbot-related state
const chatbotSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    setUserMessage(state, action) {
      state.userMessage = action.payload;
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    clearMessages(state) {
      state.messages = [];
      state.userMessage = '';
      state.chatbotResponse = '';
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessageToChatbot.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendMessageToChatbot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages.push({
          sender: 'user',
          text: action.meta.arg,
        });
        state.messages.push({
          sender: 'chatbot',
          text: action.payload.message,
        });
        state.chatbotResponse = action.payload.message;
      })
      .addCase(sendMessageToChatbot.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export actions to be used in components
export const { setUserMessage, addMessage, clearMessages, setError } = chatbotSlice.actions;

// Selectors to access the chatbot state
export const selectMessages = (state) => state.chatbot.messages;
export const selectIsLoading = (state) => state.chatbot.isLoading;
export const selectError = (state) => state.chatbot.error;
export const selectUserMessage = (state) => state.chatbot.userMessage;
export const selectChatbotResponse = (state) => state.chatbot.chatbotResponse;

// Export reducer to be used in store configuration
export default chatbotSlice.reducer;
