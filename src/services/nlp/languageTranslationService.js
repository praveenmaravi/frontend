// frontend/src/services/nlp/languageTranslationService.js

import axios from 'axios';

// Example of Google Translate API setup (replace with your actual API key or provider)
const TRANSLATION_API_URL = 'https://translation.googleapis.com/language/translate/v2';
const API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Replace with your API key

// Function to detect the source language and translate the text
export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(
      TRANSLATION_API_URL,
      {
        q: text,
        target: targetLanguage,
        format: 'text',
        key: API_KEY,
      }
    );
    // Return translated text from the API response
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error('Unable to translate text at the moment.');
  }
};

// Function to detect the language of the text (if required by your use case)
export const detectLanguage = async (text) => {
  try {
    const response = await axios.post(
      'https://translation.googleapis.com/language/translate/v2/detect',
      {
        q: text,
        key: API_KEY,
      }
    );
    // Return detected language from the API response
    return response.data.data.detections[0][0].language;
  } catch (error) {
    console.error('Language detection error:', error);
    throw new Error('Unable to detect language at the moment.');
  }
};
