import { useState, useEffect } from 'react';
import dashboardAPI from '../services/dashboardAPI';

const usePerformanceMetrics = () => {
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        // Fetch performance data from the API
        const data = await dashboardAPI.getPerformanceMetrics();
        
        // Process or format the data if necessary
        const formattedData = {
          responseTime: data.responseTime, // Average response time of the bot
          accuracy: data.accuracy,         // Bot's response accuracy
          engagementScore: data.engagementScore, // Engagement score based on user interaction
        };

        // Set the state with formatted performance data
        setPerformanceData(formattedData);
      } catch (err) {
        setError('Failed to fetch performance data');
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, []);

  return { performanceData, loading, error };
};

export default usePerformanceMetrics;
