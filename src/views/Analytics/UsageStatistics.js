// frontend/src/views/Analytics/UsageStatistics.js

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';  // For charting the statistics
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UsageStatistics = () => {
    const [stats, setStats] = useState({
        dailyUsage: [],
        monthlyUsage: [],
        activeHours: []
    });

    const fetchStatistics = async () => {
        // Simulate an API call to fetch usage statistics
        const response = await fetch('/api/statistics/usage');
        const data = await response.json();
        setStats(data);
    };

    useEffect(() => {
        fetchStatistics();
    }, []);

    const dailyUsageData = {
        labels: stats.dailyUsage.map(item => item.date),
        datasets: [
            {
                label: 'Daily Active Users',
                data: stats.dailyUsage.map(item => item.activeUsers),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const monthlyUsageData = {
        labels: stats.monthlyUsage.map(item => item.month),
        datasets: [
            {
                label: 'Monthly Active Users',
                data: stats.monthlyUsage.map(item => item.activeUsers),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const activeHoursData = {
        labels: stats.activeHours.map(item => item.hour),
        datasets: [
            {
                label: 'Active Users by Hour',
                data: stats.activeHours.map(item => item.activeUsers),
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="usage-statistics">
            <h2>Chatbot Usage Statistics</h2>
            <div className="chart-container">
                <h3>Daily Usage</h3>
                <Line data={dailyUsageData} />
            </div>
            <div className="chart-container">
                <h3>Monthly Usage</h3>
                <Line data={monthlyUsageData} />
            </div>
            <div className="chart-container">
                <h3>Active Users by Hour</h3>
                <Line data={activeHoursData} />
            </div>
        </div>
    );
};

export default UsageStatistics;
