import React, { useEffect, useState } from 'react';
import { useAnalyticsData } from '../hooks/useAnalyticsData';
import { usePerformanceData } from '../hooks/usePerformanceData';
import { useEngagementData } from '../hooks/useEngagementData';
import { useSentimentData } from '../hooks/useSentimentData';
import PerformanceChart from '../components/PerformanceChart';
import UserEngagementChart from '../components/UserEngagementChart';
import SentimentAnalysisChart from '../components/SentimentAnalysisChart';
import FeedbackTable from '../components/FeedbackTable';
import AnalyticsSidebar from '../components/AnalyticsSidebar';
import LoadingSpinner from '../components/LoadingSpinner';

const AnalyticsDashboard = () => {
  const { data: analyticsData, loading: analyticsLoading } = useAnalyticsData();
  const { data: performanceData, loading: performanceLoading } = usePerformanceData();
  const { data: engagementData, loading: engagementLoading } = useEngagementData();
  const { data: sentimentData, loading: sentimentLoading } = useSentimentData();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      !analyticsLoading &&
      !performanceLoading &&
      !engagementLoading &&
      !sentimentLoading
    ) {
      setIsLoading(false);
    }
  }, [analyticsLoading, performanceLoading, engagementLoading, sentimentLoading]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="analytics-dashboard flex">
      <AnalyticsSidebar />
      <div className="analytics-main-content w-full p-6">
        <h1 className="text-2xl font-semibold mb-6">Analytics Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <PerformanceChart data={performanceData} />
          </div>
          <div className="col-span-1">
            <UserEngagementChart data={engagementData} />
          </div>
          <div className="col-span-1">
            <SentimentAnalysisChart data={sentimentData} />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">User Feedback</h2>
          <FeedbackTable data={analyticsData?.feedback} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
