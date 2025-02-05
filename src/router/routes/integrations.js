// routes/integrations.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import IntegrationsPage from '../views/IntegrationsPage'; // Import your Integrations page view
import { useAuth } from '../hooks/useAuth'; // A custom hook to check authentication

const IntegrationsRoute = () => {
  const { isAuthenticated, userRole } = useAuth(); // Assuming `useAuth` hook provides auth state

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Redirect to="/authentication" />;
  }

  // Optional: Restrict access based on user roles (if needed)
  // if (userRole !== 'admin') {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <Route path="/integrations" exact>
      <IntegrationsPage /> {/* Your integrations management component */}
    </Route>
  );
};

export default IntegrationsRoute;
