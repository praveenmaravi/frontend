// frontend/src/views/ChatbotInterface/EmotionDisplay.js

import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmotionDisplay Component
 * Displays the detected emotion based on user input.
 */
const EmotionDisplay = ({ emotion }) => {
  const getEmotionIcon = () => {
    switch (emotion) {
      case 'happy':
        return '😊'; // Happy icon
      case 'sad':
        return '😢'; // Sad icon
      case 'angry':
        return '😠'; // Angry icon
      case 'neutral':
        return '😐'; // Neutral icon
      default:
        return '🤔'; // Thinking or undefined emotion
    }
  };

  const getEmotionText = () => {
    switch (emotion) {
      case 'happy':
        return 'You seem happy! 😊';
      case 'sad':
        return 'I sense you might be feeling sad. 😢';
      case 'angry':
        return 'It looks like you’re upset. 😠';
      case 'neutral':
        return 'You seem calm. 😐';
      default:
        return 'I’m not sure what you’re feeling, but I’m here to help! 🤔';
    }
  };

  return (
    <div className="emotion-display">
      <span className="emotion-icon">{getEmotionIcon()}</span>
      <p className="emotion-text">{getEmotionText()}</p>
    </div>
  );
};

// Prop types to enforce correct usage
EmotionDisplay.propTypes = {
  emotion: PropTypes.string.isRequired, // Emotion received (e.g., 'happy', 'sad', etc.)
};

export default EmotionDisplay;
