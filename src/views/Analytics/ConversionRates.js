// ConversionRates.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ConversionRates = () => {
  const [conversionData, setConversionData] = useState({
    labels: [],
    data: []
  });

  // Simulate an API call to fetch conversion data
  useEffect(() => {
    const fetchConversionData = async () => {
      // For demonstration purposes, mock data is used here
      const response = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [25, 45, 60, 80]
      };
      setConversionData(response);
    };

    fetchConversionData();
  }, []);

  // Data for the chart
  const chartData = {
    labels: conversionData.labels,
    datasets: [
      {
        label: 'Conversion Rate (%)',
        data: conversionData.data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  // Options for the chart
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Conversion Rates Over Time',
        font: {
          size: 20
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Weeks'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Conversion Rate (%)'
        },
        ticks: {
          beginAtZero: true
        }
      }
    }
  };

  return (
    <div className="conversion-rates">
      <h2>Conversion Rates</h2>
      <p>Track how well the chatbot is converting leads into actions such as sign-ups, purchases, or other goals.</p>
      <div className="chart-container">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ConversionRates;
