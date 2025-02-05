import React, { useState, useEffect } from 'react';
import { Card, Spinner } from '../ui'; // Reusable UI elements
import './AIInsights.css'; // Add any necessary styling for the component

const AIInsights = () => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch AI insights (this could be an API call)
  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true);
        // Example API call (replace with real API)
        const response = await fetch('/api/ai/insights');
        const data = await response.json();
        setInsights(data);
      } catch (error) {
        setError('Failed to fetch insights');
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  if (loading) {
    return (
      <div className="ai-insights-spinner">
        <Spinner /> {/* Loading spinner component */}
        <p>Loading insights...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ai-insights-error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="ai-insights-container">
      <Card className="ai-insights-card">
        <h2>AI Insights</h2>
        {insights ? (
          <div className="insight-list">
            <div className="insight-item">
              <strong>Chatbot Performance:</strong>
              <p>{insights.chatbotPerformance}</p>
            </div>
            <div className="insight-item">
              <strong>User Engagement:</strong>
              <p>{insights.userEngagement}</p>
            </div>
            <div className="insight-item">
              <strong>Recommendation:</strong>
              <p>{insights.recommendation}</p>
            </div>
          </div>
        ) : (
          <p>No insights available at the moment.</p>
        )}
      </Card>
    </div>
  );
};

export default AIInsights;
