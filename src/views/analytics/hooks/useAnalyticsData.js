import { useState, useEffect } from 'react';
import { fetchAnalyticsData } from '../services/analyticsService'; // Assuming you have a service for fetching data

const useAnalyticsData = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnalyticsData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAnalyticsData(); // Fetch the data from the service
        setAnalyticsData(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch analytics data');
      } finally {
        setIsLoading(false);
      }
    };

    getAnalyticsData();
  }, []); // Empty dependency array means it runs once when the component mounts

  return { analyticsData, isLoading, error };
};

export default useAnalyticsData;
