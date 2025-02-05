// components/ai-features/SentimentDetector.jsx

import React, { useState } from 'react';

// Assuming we use a simple API for sentiment analysis
const SentimentDetector = ({ text }) => {
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeSentiment = async (text) => {
    try {
      setLoading(true);
      setError(null);

      // Example API call to a sentiment analysis service
      const response = await fetch('https://api.example.com/sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      if (data && data.sentiment) {
        setSentiment(data.sentiment);
      } else {
        throw new Error('No sentiment data found');
      }
    } catch (err) {
      setError('Error analyzing sentiment');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (text) {
      analyzeSentiment(text);
    }
  }, [text]);

  return (
    <div className="sentiment-detector">
      <h3>Sentiment Analysis</h3>
      {loading && <p>Analyzing...</p>}
      {error && <p className="error">{error}</p>}
      {sentiment && (
        <div>
          <p>Sentiment: <strong>{sentiment}</strong></p>
          <p>
            {sentiment === 'positive' ? '😊 Positive Sentiment' :
             sentiment === 'negative' ? '☹️ Negative Sentiment' :
             '😐 Neutral Sentiment'}
          </p>
        </div>
      )}
    </div>
  );
};

export default SentimentDetector;
