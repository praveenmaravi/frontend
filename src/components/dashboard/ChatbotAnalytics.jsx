import React, { useState, useEffect } from 'react';
import { Card, ProgressBar, Spinner } from '../ui';
import { fetchChatbotAnalytics } from '../../utils/APIHelper'; // Assuming you have a utility function to fetch data

const ChatbotAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnalytics = async () => {
      try {
        setLoading(true);
        const data = await fetchChatbotAnalytics(); // Fetch the chatbot performance data
        setAnalyticsData(data);
      } catch (err) {
        setError('Failed to load analytics');
      } finally {
        setLoading(false);
      }
    };

    getAnalytics();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <Card className="analytics-card">
      <h3>Chatbot Analytics</h3>
      <div className="metrics">
        <div className="metric">
          <h4>Total Conversations</h4>
          <p>{analyticsData.totalConversations}</p>
        </div>
        <div className="metric">
          <h4>Active Users</h4>
          <p>{analyticsData.activeUsers}</p>
        </div>
        <div className="metric">
          <h4>Sentiment Analysis</h4>
          <p>{analyticsData.sentimentAnalysis}</p>
        </div>
        <div className="metric">
          <h4>Engagement Rate</h4>
          <ProgressBar progress={analyticsData.engagementRate} />
        </div>
        <div className="metric">
          <h4>Response Time</h4>
          <p>{analyticsData.averageResponseTime} sec</p>
        </div>
      </div>
    </Card>
  );
};

export default ChatbotAnalytics;
