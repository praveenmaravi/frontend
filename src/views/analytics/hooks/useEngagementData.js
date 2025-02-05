import { useState, useEffect } from 'react';
import { engagementService } from '../services/engagementService';

const useEngagementData = (filters = {}) => {
  const [engagementData, setEngagementData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEngagementData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await engagementService.fetchEngagementData(filters);
        setEngagementData(data);
      } catch (err) {
        setError('Failed to load engagement data');
      } finally {
        setLoading(false);
      }
    };

    fetchEngagementData();
  }, [filters]);

  return { engagementData, loading, error };
};

export default useEngagementData;
