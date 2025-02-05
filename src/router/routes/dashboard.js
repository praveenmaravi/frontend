// routes/dashboard.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DashboardLayout from '../components/DashboardLayout';
import { authGuard } from '../guards/authGuard';

const Dashboard = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const userRole = useSelector(state => state.auth.userRole); // Assuming user role is stored in state
  
  if (!isAuthenticated) {
    // Redirect to the authentication route if not logged in
    return <Redirect to="/authentication" />;
  }

  // Add any role-based guards here if needed (e.g., only allow admins)
  if (userRole !== 'admin') {
    return <Redirect to="/error" />;
  }

  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      {/* Add your dashboard content here */}
      <p>Welcome to your dashboard. Here you'll find all relevant stats and bot performance data.</p>
    </DashboardLayout>
  );
};

const DashboardRoute = () => (
  <Route
    path="/dashboard"
    render={() => <Dashboard />}
  />
);

export default DashboardRoute;
