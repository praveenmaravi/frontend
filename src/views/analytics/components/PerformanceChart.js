// src/views/analytics/components/PerformanceChart.js

import React from 'react';
import { usePerformanceData } from '../hooks/usePerformanceData';
import ApexCharts from 'react-apexcharts';

const PerformanceChart = () => {
  const { data, isLoading, error } = usePerformanceData();

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error loading data</div>;
  }

  const chartOptions = {
    chart: {
      id: 'performance-chart',
      type: 'line',
      height: 350,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Chatbot Performance Over Time',
      align: 'center',
    },
    xaxis: {
      categories: data.map((item) => item.date),
    },
    yaxis: {
      title: {
        text: 'Performance Metric',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const chartSeries = [
    {
      name: 'Accuracy (%)',
      data: data.map((item) => item.accuracy),
    },
    {
      name: 'Response Time (ms)',
      data: data.map((item) => item.responseTime),
    },
  ];

  return (
    <div className="chart-card">
      <ApexCharts
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
    </div>
  );
};

export default PerformanceChart;
