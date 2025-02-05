// nlp/sentimentAnalysisService.js

import axios from 'axios';
import { apiConfig } from '../config/apiConfig';  // Assuming you have an apiConfig file for API setup

// Sentiment analysis service
class SentimentAnalysisService {
  static async analyzeSentiment(text) {
    try {
      // Example of sending a request to an NLP API for sentiment analysis
      const response = await axios.post(`${apiConfig.apiBaseUrl}/analyzeSentiment`, {
        data: {
          text,
        },
      });

      // Handle the response from the NLP model
      if (response.data && response.data.sentiment) {
        return response.data.sentiment;  // Sentiment could be 'positive', 'negative', or 'neutral'
      } else {
        throw new Error('Invalid response from sentiment analysis API');
      }
    } catch (error) {
      console.error('Error in sentiment analysis service:', error);
      throw error;  // Rethrow the error for handling at the component or controller level
    }
  }
}

export default SentimentAnalysisService;
