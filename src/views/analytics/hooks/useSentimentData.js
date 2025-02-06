// src/views/analytics/hooks/useSentimentData.js

import { useState, useEffect } from 'react';
import { sentimentService } from '../services/sentimentService';

const useSentimentData = (startDate, endDate) => {
  const [sentimentData, setSentimentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSentimentData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await sentimentService.fetchSentimentData(startDate, endDate);
        setSentimentData(response.data);
      } catch (err) {
        setError('Failed to fetch sentiment data');
      } finally {
        setLoading(false);
      }
    };

    if (startDate && endDate) {
      fetchSentimentData();
    }
  }, [startDate, endDate]);

  return {
    sentimentData,
    loading,
    error
  };
};

export default useSentimentData;
