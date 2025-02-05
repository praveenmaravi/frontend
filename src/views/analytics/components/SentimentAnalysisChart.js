// src/views/analytics/components/SentimentAnalysisChart.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample sentiment data
const data = [
  { date: '2025-02-01', positive: 30, neutral: 50, negative: 20 },
  { date: '2025-02-02', positive: 40, neutral: 45, negative: 15 },
  { date: '2025-02-03', positive: 50, neutral: 40, negative: 10 },
  { date: '2025-02-04', positive: 35, neutral: 50, negative: 15 },
  { date: '2025-02-05', positive: 45, neutral: 40, negative: 15 },
];

const SentimentAnalysisChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="positive" stroke="#00C49F" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="neutral" stroke="#FFBB28" strokeWidth={2} />
        <Line type="monotone" dataKey="negative" stroke="#FF8042" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SentimentAnalysisChart;
