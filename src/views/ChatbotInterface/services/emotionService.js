// services/emotionService.js

import axios from 'axios';

// Example API endpoint for emotion/sentiment analysis (replace with actual endpoint)
const EMOTION_API_URL = 'https://api.example.com/analyze-emotion';

export const analyzeEmotion = async (text) => {
  try {
    // Send the user's message to the emotion analysis API
    const response = await axios.post(EMOTION_API_URL, { text });
    
    // Extract the emotion analysis result from the API response
    const emotionData = response.data;

    if (emotionData && emotionData.emotion) {
      // Return the emotion data (e.g., happy, sad, angry)
      return emotionData.emotion;
    } else {
      throw new Error('Emotion analysis failed');
    }
  } catch (error) {
    console.error('Error in emotion analysis:', error);
    throw new Error('Failed to analyze emotion');
  }
};
