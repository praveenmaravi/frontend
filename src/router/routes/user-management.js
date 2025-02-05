// routes/user-management.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserManagementPage from '../views/UserManagementPage';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../store/selectors';
import { ADMIN_ROLE } from '../constants/roles';
import { authGuard } from '../guards/authGuard';
import { roleGuard } from '../guards/roleGuard';

const UserManagementRoute = () => {
  const userRole = useSelector(selectUserRole);  // Get user role from store

  // Protect the route with both authentication and role guards
  const isAuthenticated = authGuard();
  const isAuthorized = roleGuard(userRole, ADMIN_ROLE);

  if (!isAuthenticated) {
    return <Redirect to="/authentication" />;
  }

  if (!isAuthorized) {
    return <Redirect to="/error" />;
  }

  return (
    <Route
      path="/user-management"
      component={UserManagementPage}
    />
  );
};

export default UserManagementRoute;
