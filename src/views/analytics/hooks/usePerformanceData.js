// src/hooks/usePerformanceData.js

import { useState, useEffect } from 'react';
import { performanceService } from '../services/performanceService';

const usePerformanceData = (startDate, endDate) => {
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      setLoading(true);
      try {
        const data = await performanceService.getPerformanceData(startDate, endDate);
        setPerformanceData(data);
      } catch (err) {
        setError('Failed to fetch performance data');
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, [startDate, endDate]);  // Refetch when date range changes

  return { performanceData, loading, error };
};

export default usePerformanceData;
