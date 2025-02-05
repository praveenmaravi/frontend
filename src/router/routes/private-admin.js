// frontend/src/router/routes/private-admin.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management
import AdminDashboard from '../../views/AdminDashboard';
import AdminSettings from '../../views/AdminSettings';
import UserPermissions from '../../views/UserPermissions';
import { authSelector, userRoleSelector } from '../../store/selectors'; // Selectors to get auth state and user role

const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(authSelector); // Check if user is authenticated
  const userRole = useSelector(userRoleSelector); // Get the user's role (e.g., admin)

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated && userRole === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/authentication" /> // Redirect to login if not authenticated or not admin
        )
      }
    />
  );
};

const PrivateAdminRoutes = () => (
  <>
    <PrivateAdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
    <PrivateAdminRoute exact path="/admin/settings" component={AdminSettings} />
    <PrivateAdminRoute exact path="/admin/user-permissions" component={UserPermissions} />
    {/* Add more admin-specific routes here */}
  </>
);

export default PrivateAdminRoutes;
