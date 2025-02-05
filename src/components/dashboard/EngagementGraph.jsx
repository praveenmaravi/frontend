// frontend/src/components/dashboard/EngagementGraph.jsx

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EngagementGraph = () => {
  const [data, setData] = useState(null);

  // Sample engagement data (replace with real API data)
  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = () => {
      return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Monthly labels
        datasets: [
          {
            label: 'User Engagement',
            data: [20, 50, 75, 100, 125, 150, 175], // User engagement count (can be interactions, active sessions, etc.)
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            fill: true,
            tension: 0.4, // Smooth curve
          },
        ],
      };
    };

    const engagementData = fetchData();
    setData(engagementData);
  }, []);

  // Check if data is available
  if (!data) return <div>Loading...</div>;

  return (
    <div className="engagement-graph-container">
      <h3>Chatbot Engagement Trend</h3>
      <Line data={data} options={{ responsive: true, plugins: { title: { display: true, text: 'Engagement Over Time' } } }} />
    </div>
  );
};

export default EngagementGraph;
