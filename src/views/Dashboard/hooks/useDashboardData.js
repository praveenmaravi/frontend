import { useState, useEffect } from 'react';
import dashboardAPI from '../services/dashboardAPI';

/**
 * Custom hook to fetch and return dashboard data.
 * It handles the loading, error, and data state.
 */
const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch dashboard data
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const data = await dashboardAPI.getDashboardData();
        setDashboardData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function when the component mounts
    fetchDashboardData();
  }, []);

  return { dashboardData, loading, error };
};

export default useDashboardData;
