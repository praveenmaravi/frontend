// emotionDetectionService.js

import { sentimentAnalysisService } from '../nlp/sentimentAnalysisService';

/**
 * Emotion Detection Service
 * This service detects the emotions in the user's input by analyzing sentiment and other emotional cues.
 * It can return moods such as happy, frustrated, angry, or neutral.
 */

class EmotionDetectionService {

  /**
   * Detects the emotion in the user's message.
   * @param {string} userInput - The text input from the user.
   * @returns {Object} - An object containing the detected emotion and sentiment score.
   */
  async detectEmotion(userInput) {
    try {
      const sentimentResult = await sentimentAnalysisService.analyzeSentiment(userInput);

      const emotion = this._mapSentimentToEmotion(sentimentResult);

      return {
        emotion,
        sentimentScore: sentimentResult.score,
      };
    } catch (error) {
      console.error('Error detecting emotion:', error);
      return {
        emotion: 'neutral', // Default to neutral if an error occurs
        sentimentScore: 0,
      };
    }
  }

  /**
   * Maps the sentiment result to an emotion.
   * @param {Object} sentimentResult - The sentiment analysis result containing the sentiment score.
   * @returns {string} - The detected emotion.
   */
  _mapSentimentToEmotion(sentimentResult) {
    const { score } = sentimentResult;

    if (score > 0.5) {
      return 'happy';
    } else if (score < -0.5) {
      return 'angry';
    } else if (score >= 0 && score <= 0.5) {
      return 'neutral';
    } else {
      return 'frustrated';
    }
  }
}

export default new EmotionDetectionService();
