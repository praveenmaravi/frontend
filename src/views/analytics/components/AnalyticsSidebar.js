import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDateRange, setMetricFilter } from '../../store/analyticsSlice'; // Redux actions
import { DatePicker } from 'react-datepicker'; // Date picker component (optional)
import 'react-datepicker/dist/react-datepicker.css';

const AnalyticsSidebar = () => {
  const dispatch = useDispatch();
  const { dateRange, metricFilter } = useSelector(state => state.analytics);
  const [selectedDateRange, setSelectedDateRange] = useState(dateRange);
  const [selectedMetric, setSelectedMetric] = useState(metricFilter);

  const handleDateRangeChange = (date) => {
    setSelectedDateRange(date);
    dispatch(setDateRange(date));
  };

  const handleMetricChange = (e) => {
    const metric = e.target.value;
    setSelectedMetric(metric);
    dispatch(setMetricFilter(metric));
  };

  return (
    <div className="analytics-sidebar bg-gray-800 text-white p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Analytics Filters</h3>

      {/* Date Range Picker */}
      <div className="mb-4">
        <label className="block mb-2">Date Range</label>
        <DatePicker
          selected={selectedDateRange}
          onChange={handleDateRangeChange}
          className="w-full p-2 bg-gray-700 text-white rounded-md"
          dateFormat="MM/dd/yyyy"
        />
      </div>

      {/* Metric Filter */}
      <div className="mb-4">
        <label className="block mb-2">Select Metric</label>
        <select
          value={selectedMetric}
          onChange={handleMetricChange}
          className="w-full p-2 bg-gray-700 text-white rounded-md"
        >
          <option value="performance">Performance</option>
          <option value="engagement">Engagement</option>
          <option value="sentiment">Sentiment</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>

      {/* Additional Filters can be added here */}
    </div>
  );
};

export default AnalyticsSidebar;
