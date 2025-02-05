import React, { useEffect, useState } from 'react';
import { fetchSentimentData } from '../../utils/APIHelper'; // Assuming this is a utility function for API calls
import { Card } from '../ui/Card';
import { Spinner } from '../ui/Spinner';
import { ProgressBar } from '../ui/ProgressBar';

const SentimentAnalysis = () => {
  const [sentimentData, setSentimentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSentimentData = async () => {
      try {
        const data = await fetchSentimentData();
        setSentimentData(data);
      } catch (err) {
        setError('Failed to fetch sentiment data.');
      } finally {
        setLoading(false);
      }
    };

    getSentimentData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <Card>
      <h2>Sentiment Analysis</h2>
      <div className="sentiment-summary">
        <div className="sentiment-score">
          <h3>Positive Sentiment</h3>
          <ProgressBar percentage={sentimentData.positive} color="green" />
          <p>{sentimentData.positive}%</p>
        </div>
        <div className="sentiment-score">
          <h3>Neutral Sentiment</h3>
          <ProgressBar percentage={sentimentData.neutral} color="yellow" />
          <p>{sentimentData.neutral}%</p>
        </div>
        <div className="sentiment-score">
          <h3>Negative Sentiment</h3>
          <ProgressBar percentage={sentimentData.negative} color="red" />
          <p>{sentimentData.negative}%</p>
        </div>
      </div>
    </Card>
  );
};

export default SentimentAnalysis;
