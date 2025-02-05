import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const SentimentAnalysis = () => {
  const [sentimentData, setSentimentData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Positive Sentiment',
        data: [],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Negative Sentiment',
        data: [],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
      {
        label: 'Neutral Sentiment',
        data: [],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    // Simulate fetching sentiment data from the backend
    const fetchSentimentData = async () => {
      // Example data for sentiment analysis
      const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Positive Sentiment',
            data: [50, 60, 70, 80, 75, 90],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
          },
          {
            label: 'Negative Sentiment',
            data: [10, 20, 30, 25, 20, 15],
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1,
          },
          {
            label: 'Neutral Sentiment',
            data: [40, 20, 10, 15, 30, 25],
            fill: false,
            borderColor: 'rgba(153, 102, 255, 1)',
            tension: 0.1,
          },
        ],
      };
      setSentimentData(data);
    };

    fetchSentimentData();
  }, []);

  return (
    <div className="sentiment-analysis">
      <h2>Sentiment Analysis</h2>
      <p>Track the sentiment of user interactions over time.</p>
      <div className="chart-container" style={{ width: '80%', height: '400px', margin: '0 auto' }}>
        <Line data={sentimentData} />
      </div>
    </div>
  );
};

export default SentimentAnalysis;
