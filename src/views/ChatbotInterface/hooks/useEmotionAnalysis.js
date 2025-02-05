import { useState, useEffect } from 'react';
import { getEmotionAnalysis } from '../services/emotionService';

const useEmotionAnalysis = (message) => {
  const [emotion, setEmotion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!message) return;

    // Trigger emotion analysis when the message changes
    const fetchEmotion = async () => {
      setLoading(true);
      setError(null);

      try {
        const analysis = await getEmotionAnalysis(message);
        setEmotion(analysis.emotion); // Assuming `emotion` is part of the response
      } catch (err) {
        setError('Failed to analyze emotion');
      } finally {
        setLoading(false);
      }
    };

    fetchEmotion();
  }, [message]);

  return { emotion, loading, error };
};

export default useEmotionAnalysis;
