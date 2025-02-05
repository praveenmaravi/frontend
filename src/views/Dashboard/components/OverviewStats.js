import React from 'react';

// Sample data structure for OverviewStats
const OverviewStats = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  const { totalUsers, totalMessages, activeSessions, botUptime } = data;

  return (
    <div className="overview-stats bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">Overview Stats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        <div className="stat-card bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
        </div>
        <div className="stat-card bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Messages</h3>
          <p className="text-2xl font-bold text-gray-900">{totalMessages}</p>
        </div>
        <div className="stat-card bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Active Sessions</h3>
          <p className="text-2xl font-bold text-gray-900">{activeSessions}</p>
        </div>
        <div className="stat-card bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Bot Uptime</h3>
          <p className="text-2xl font-bold text-gray-900">{botUptime} hours</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewStats;
