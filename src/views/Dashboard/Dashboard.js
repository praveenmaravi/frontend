import React from 'react';
import OverviewStats from './components/OverviewStats';
import PerformanceChart from './components/PerformanceChart';
import EngagementGraph from './components/EngagementGraph';
import RecentActivity from './components/RecentActivity';
import BotStatusCard from './components/BotStatusCard';
import UserMetrics from './components/UserMetrics';
import useDashboardData from './hooks/useDashboardData';

const Dashboard = () => {
  // Fetch dashboard data using the custom hook
  const { dashboardData, loading, error } = useDashboardData();

  // Display loading or error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading dashboard data</div>;

  return (
    <div className="dashboard-container">
      {/* Overview Section */}
      <div className="overview">
        <OverviewStats data={dashboardData.overviewStats} />
        <BotStatusCard status={dashboardData.botStatus} />
      </div>

      {/* Charts Section */}
      <div className="charts">
        <PerformanceChart data={dashboardData.performanceData} />
        <EngagementGraph data={dashboardData.engagementData} />
      </div>

      {/* Recent Activity Section */}
      <div className="recent-activity">
        <RecentActivity data={dashboardData.recentActivity} />
      </div>

      {/* User Metrics Section */}
      <div className="user-metrics">
        <UserMetrics data={dashboardData.userMetrics} />
      </div>
    </div>
  );
};

export default Dashboard;
