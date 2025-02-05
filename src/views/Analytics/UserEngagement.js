// frontend/src/views/Analytics/UserEngagement.js

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'; // For displaying engagement trends over time
import { fetchUserEngagementData } from '../../services/analyticsService'; // API call to fetch data
import { Chart as ChartJS } from 'chart.js/auto'; // Import necessary chart.js components

const UserEngagement = () => {
  const [engagementData, setEngagementData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user engagement data when component mounts
    const getEngagementData = async () => {
      try {
        const data = await fetchUserEngagementData();
        setEngagementData(data);
      } catch (error) {
        console.error('Error fetching user engagement data:', error);
      } finally {
        setLoading(false);
      }
    };

    getEngagementData();
  }, []);

  // Format data for Chart.js (Line Chart)
  const chartData = engagementData ? {
    labels: engagementData.dates, // Dates or time intervals (e.g., days, weeks)
    datasets: [
      {
        label: 'Active Users',
        data: engagementData.activeUsers, // Engagement data (e.g., number of active users)
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Engagement Rate',
        data: engagementData.engagementRate, // Engagement rate (e.g., % of active users)
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1,
      }
    ]
  } : {};

  // Render loading state or chart once data is fetched
  return (
    <div className="user-engagement-container">
      <h2>User Engagement Overview</h2>
      {loading ? (
        <p>Loading engagement data...</p>
      ) : (
        <div className="chart-container">
          <Line data={chartData} options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { beginAtZero: true },
              y: { beginAtZero: true },
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => `${context.dataset.label}: ${context.raw}`,
                }
              }
            }
          }} />
        </div>
      )}
    </div>
  );
};

export default UserEngagement;
