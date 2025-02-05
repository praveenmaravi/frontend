// src/views/Dashboard/components/PerformanceChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const PerformanceChart = ({ data }) => {
  // Define chart options
  const options = {
    chart: {
      id: 'performance-chart',
      type: 'line',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Bot Performance',
      align: 'center',
    },
    xaxis: {
      categories: data?.categories || [], // Categories like time, date, or session number
    },
    yaxis: {
      title: {
        text: 'Response Time (ms)',
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM',
      },
    },
  };

  // Define chart series
  const series = [
    {
      name: 'Response Time',
      data: data?.responseTime || [], // Array of response times corresponding to categories
    },
    {
      name: 'Engagement',
      data: data?.engagement || [], // Array of engagement values (e.g., user interactions)
    },
  ];

  return (
    <div className="performance-chart-container">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default PerformanceChart;
