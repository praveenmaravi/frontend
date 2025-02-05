import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useDashboardData from '../hooks/useDashboardData'; // Assuming you have this hook for fetching data

const EngagementGraph = () => {
  const { dashboardData, loading, error } = useDashboardData(); // Fetching dashboard data from hook
  const [engagementData, setEngagementData] = useState([]);

  useEffect(() => {
    if (dashboardData && dashboardData.engagementData) {
      setEngagementData(dashboardData.engagementData);
    }
  }, [dashboardData]);

  if (loading) return <div>Loading engagement data...</div>;
  if (error) return <div>Error loading engagement data</div>;

  return (
    <div className="engagement-graph">
      <h2>User Engagement Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={engagementData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sentiment" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EngagementGraph;
