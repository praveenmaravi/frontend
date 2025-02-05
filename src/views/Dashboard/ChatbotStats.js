// Dashboard/ChatbotStats.js

import React, { useState, useEffect } from 'react';
import { fetchChatbotStats } from '../../utils/APIHelper'; // hypothetical API helper function
import { Card, ProgressBar, Tooltip } from '../../components/ui'; // Reusable UI components

const ChatbotStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchChatbotStats(); // Fetch chatbot performance data from API
        setStats(data);
      } catch (error) {
        console.error("Failed to load stats", error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chatbot-stats">
      <h2>Chatbot Performance Stats</h2>
      
      <div className="stats-cards">
        <Card title="Total Conversations">
          <h3>{stats.totalConversations}</h3>
        </Card>

        <Card title="Active Users">
          <h3>{stats.activeUsers}</h3>
        </Card>

        <Card title="Response Time">
          <h3>{stats.avgResponseTime} ms</h3>
        </Card>

        <Card title="Task Completion Rate">
          <h3>{stats.taskCompletionRate}%</h3>
          <ProgressBar progress={stats.taskCompletionRate} />
        </Card>

        <Card title="Sentiment Score">
          <h3>{stats.sentimentScore}</h3>
          <Tooltip content="Sentiment score is based on the positive, neutral, and negative sentiment detected in conversations.">
            <span>?</span>
          </Tooltip>
        </Card>
      </div>

      <div className="engagement-chart">
        <h3>Chatbot Engagement Over Time</h3>
        {/* Insert a chart component to visualize engagement trends */}
        <div className="chart-placeholder">[Engagement Chart]</div>
      </div>
    </div>
  );
};

export default ChatbotStats;
