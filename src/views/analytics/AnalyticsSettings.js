// src/views/analytics/AnalyticsSettings.js

import React, { useState } from 'react';

const AnalyticsSettings = ({ onFilterChange }) => {
  const [dateRange, setDateRange] = useState('last_30_days');
  const [metricType, setMetricType] = useState('performance');
  const [userSegment, setUserSegment] = useState('all_users');

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
    onFilterChange({ dateRange: e.target.value, metricType, userSegment });
  };

  const handleMetricTypeChange = (e) => {
    setMetricType(e.target.value);
    onFilterChange({ dateRange, metricType: e.target.value, userSegment });
  };

  const handleUserSegmentChange = (e) => {
    setUserSegment(e.target.value);
    onFilterChange({ dateRange, metricType, userSegment: e.target.value });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Analytics Settings</h2>
      
      <div className="mb-4">
        <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">
          Date Range
        </label>
        <select
          id="dateRange"
          value={dateRange}
          onChange={handleDateRangeChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="last_30_days">Last 30 Days</option>
          <option value="last_7_days">Last 7 Days</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="metricType" className="block text-sm font-medium text-gray-700">
          Metric Type
        </label>
        <select
          id="metricType"
          value={metricType}
          onChange={handleMetricTypeChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="performance">Performance</option>
          <option value="engagement">User Engagement</option>
          <option value="sentiment">Sentiment Analysis</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="userSegment" className="block text-sm font-medium text-gray-700">
          User Segment
        </label>
        <select
          id="userSegment"
          value={userSegment}
          onChange={handleUserSegmentChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="all_users">All Users</option>
          <option value="new_users">New Users</option>
          <option value="active_users">Active Users</option>
        </select>
      </div>
      
      <button
        type="button"
        onClick={() => onFilterChange({ dateRange, metricType, userSegment })}
        className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-md"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default AnalyticsSettings;
