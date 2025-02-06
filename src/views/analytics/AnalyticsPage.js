import React, { useEffect, useState } from 'react';
import { useAnalyticsData } from './hooks/useAnalyticsData';
import { usePerformanceData } from './hooks/usePerformanceData';
import { useEngagementData } from './hooks/useEngagementData';
import { useSentimentData } from './hooks/useSentimentData';
import PerformanceChart from './components/PerformanceChart';
import UserEngagementChart from './components/UserEngagementChart';
import SentimentAnalysisChart from './components/SentimentAnalysisChart';
import FeedbackTable from './components/FeedbackTable';
import AnalyticsSidebar from './components/AnalyticsSidebar';
import LoadingSpinner from './components/LoadingSpinner';
import './analyticsStyles.css';


const AnalyticsPage = () => {
  const [loading, setLoading] = useState(true);

  // Fetching data with hooks
  const { data: analyticsData, isLoading: isAnalyticsLoading } = useAnalyticsData();
  const { data: performanceData, isLoading: isPerformanceLoading } = usePerformanceData();
  const { data: engagementData, isLoading: isEngagementLoading } = useEngagementData();
  const { data: sentimentData, isLoading: isSentimentLoading } = useSentimentData();

  // Combine loading states for all data fetching
  useEffect(() => {
    if (!isAnalyticsLoading && !isPerformanceLoading && !isEngagementLoading && !isSentimentLoading) {
      setLoading(false);
    }
  }, [isAnalyticsLoading, isPerformanceLoading, isEngagementLoading, isSentimentLoading]);

  // Show loading spinner until data is fully loaded
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="analytics-page">
      <div className="flex">
        <AnalyticsSidebar />
        <div className="w-full pl-4">
          {/* Analytics Summary */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Analytics Overview</h1>
            <p className="text-gray-500">Insights into chatbot performance, user engagement, and sentiment trends.</p>
          </div>

          {/* Performance Chart */}
          <div className="mb-6">
            <PerformanceChart data={performanceData} />
          </div>

          {/* User Engagement Chart */}
          <div className="mb-6">
            <UserEngagementChart data={engagementData} />
          </div>

          {/* Sentiment Analysis Chart */}
          <div className="mb-6">
            <SentimentAnalysisChart data={sentimentData} />
          </div>

          {/* Feedback Table */}
          <div>
            <FeedbackTable data={analyticsData.feedback} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
