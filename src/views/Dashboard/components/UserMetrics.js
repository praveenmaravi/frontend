// src/views/Dashboard/components/UserMetrics.js
import React from 'react';

const UserMetrics = ({ data }) => {
  if (!data) {
    return <div>Loading user metrics...</div>;
  }

  const { activeUsers, userSatisfaction, feedbackCount } = data;

  return (
    <div className="user-metrics-card p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800">User Metrics</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="metric-item flex justify-between items-center p-2 border-b">
          <span className="text-gray-600">Active Users</span>
          <span className="font-bold text-gray-800">{activeUsers}</span>
        </div>
        <div className="metric-item flex justify-between items-center p-2 border-b">
          <span className="text-gray-600">User Satisfaction</span>
          <span className="font-bold text-gray-800">{userSatisfaction}%</span>
        </div>
        <div className="metric-item flex justify-between items-center p-2 border-b">
          <span className="text-gray-600">Feedback Count</span>
          <span className="font-bold text-gray-800">{feedbackCount}</span>
        </div>
      </div>
    </div>
  );
};

export default UserMetrics;
