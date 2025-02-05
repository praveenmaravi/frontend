// src/views/ChatbotInterface/components/EmotionAnalysis/EmotionIcon.js

import React from 'react';
import PropTypes from 'prop-types';

// Emotion icons can be SVGs, images, or simple emoji icons.
// Here, we'll use simple emoji representations for sentiment.
const emotionIcons = {
  happy: '😊',
  sad: '😢',
  angry: '😡',
  surprised: '😲',
  neutral: '😐',
};

const EmotionIcon = ({ emotion }) => {
  // Default to neutral if the emotion is undefined or unrecognized
  const icon = emotionIcons[emotion] || emotionIcons.neutral;

  return (
    <div className="emotion-icon">
      <span role="img" aria-label={emotion}>
        {icon}
      </span>
    </div>
  );
};

EmotionIcon.propTypes = {
  emotion: PropTypes.oneOf(['happy', 'sad', 'angry', 'surprised', 'neutral']),
};

export default EmotionIcon;
