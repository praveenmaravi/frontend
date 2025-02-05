import React, { useState } from 'react';
import { DatePicker } from 'antd';  // Assuming you are using Ant Design for UI components
import { Button, Select, Slider } from 'antd';

const { RangePicker } = DatePicker;

const DashboardSettings = ({ onSettingsChange }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [metricFilter, setMetricFilter] = useState('all'); // Example filter (could be 'performance', 'engagement', etc.)
  const [sliderValue, setSliderValue] = useState([0, 100]); // Example range filter for performance metrics
  
  const handleDateChange = (dates) => {
    setDateRange(dates);
    onSettingsChange({ dateRange: dates, metricFilter, sliderValue });
  };

  const handleMetricFilterChange = (value) => {
    setMetricFilter(value);
    onSettingsChange({ dateRange, metricFilter: value, sliderValue });
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
    onSettingsChange({ dateRange, metricFilter, sliderValue: value });
  };

  return (
    <div className="dashboard-settings">
      <h2>Dashboard Settings</h2>

      <div className="setting-option">
        <label htmlFor="date-range">Select Date Range:</label>
        <RangePicker
          id="date-range"
          value={dateRange}
          onChange={handleDateChange}
        />
      </div>

      <div className="setting-option">
        <label htmlFor="metric-filter">Select Metric Filter:</label>
        <Select
          id="metric-filter"
          value={metricFilter}
          onChange={handleMetricFilterChange}
          options={[
            { value: 'all', label: 'All Metrics' },
            { value: 'performance', label: 'Performance' },
            { value: 'engagement', label: 'Engagement' },
            { value: 'user-metrics', label: 'User Metrics' }
          ]}
        />
      </div>

      <div className="setting-option">
        <label htmlFor="performance-range">Performance Range:</label>
        <Slider
          id="performance-range"
          range
          value={sliderValue}
          onChange={handleSliderChange}
          min={0}
          max={100}
        />
      </div>

      <Button 
        type="primary" 
        onClick={() => onSettingsChange({ dateRange, metricFilter, sliderValue })}
      >
        Apply Settings
      </Button>
    </div>
  );
};

export default DashboardSettings;
