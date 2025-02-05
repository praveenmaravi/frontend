// nlp/nlpClient.js

import axios from 'axios';

// Base URL for your NLP API (can be configured based on environment)
const NLP_API_BASE_URL = process.env.NLP_API_BASE_URL || 'https://api.openai.com/v1';
const API_KEY = process.env.NLP_API_KEY;

// Create an Axios instance with the necessary configuration
const nlpClient = axios.create({
  baseURL: NLP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

// Function to send a prompt to an NLP model (e.g., GPT-3/4)
export const sendPromptToNLP = async (prompt) => {
  try {
    const response = await nlpClient.post('/completions', {
      model: 'gpt-4', // Example model, can be changed to any supported model
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7,
    });
    return response.data;
  } catch (error) {
    console.error('Error in sending prompt to NLP:', error);
    throw error;
  }
};

// Function to analyze sentiment of a text input
export const analyzeSentiment = async (text) => {
  try {
    const response = await nlpClient.post('/completions', {
      model: 'gpt-4',
      prompt: `Analyze the sentiment of the following text: "${text}"`,
      max_tokens: 50,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error in sentiment analysis:', error);
    throw error;
  }
};

// Function to detect emotions based on text input
export const detectEmotion = async (text) => {
  try {
    const response = await nlpClient.post('/completions', {
      model: 'gpt-4',
      prompt: `What is the emotion expressed in the following text: "${text}"`,
      max_tokens: 50,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error in emotion detection:', error);
    throw error;
  }
};

// Function for language translation (example: English to Spanish)
export const translateText = async (text, targetLanguage = 'es') => {
  try {
    const response = await nlpClient.post('/completions', {
      model: 'gpt-4',
      prompt: `Translate the following text to ${targetLanguage}: "${text}"`,
      max_tokens: 100,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error in translating text:', error);
    throw error;
  }
};

export default {
  sendPromptToNLP,
  analyzeSentiment,
  detectEmotion,
  translateText,
};
