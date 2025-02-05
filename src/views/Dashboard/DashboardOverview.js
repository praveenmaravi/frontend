import React from 'react';
import OverviewStats from './components/OverviewStats';
import PerformanceChart from './components/PerformanceChart';
import EngagementGraph from './components/EngagementGraph';
import useDashboardData from './hooks/useDashboardData';

const DashboardOverview = () => {
  // Fetching the dashboard data using the custom hook
  const { dashboardData, loading, error } = useDashboardData();

  if (loading) {
    return <div>Loading dashboard overview...</div>;
  }

  if (error) {
    return <div>Error loading dashboard overview data: {error.message}</div>;
  }

  return (
    <div className="dashboard-overview-container">
      {/* Overview Section */}
      <div className="overview-stats">
        <OverviewStats data={dashboardData.overviewStats} />
      </div>

      {/* Performance Section */}
      <div className="performance-chart">
        <PerformanceChart data={dashboardData.performanceData} />
      </div>

      {/* Engagement Section */}
      <div className="engagement-graph">
        <EngagementGraph data={dashboardData.engagementData} />
      </div>
    </div>
  );
};

export default DashboardOverview;
