// frontend/src/router/routes/settings.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom'; // Or use appropriate router for your framework
import SettingsPage from '../../views/SettingsPage'; // Import your SettingsPage component
import { useAuth } from '../../store/auth'; // Example hook for checking authentication

const SettingsRoute = () => {
  const { isAuthenticated } = useAuth(); // Check if the user is authenticated

  // If the user is not authenticated, redirect them to the login page
  if (!isAuthenticated) {
    return <Redirect to="/authentication" />;
  }

  // If authenticated, render the SettingsPage component
  return <Route path="/settings" component={SettingsPage} />;
};

export default SettingsRoute;
