// routes/authentication.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../views/LoginPage';
import SignupPage from '../views/SignupPage';
import PasswordResetPage from '../views/PasswordResetPage';
import { useSelector } from 'react-redux'; // Assuming you use Redux for state management

// A higher-order component to protect routes requiring authentication
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

const AuthenticationRoutes = () => {
  return (
    <>
      {/* Public routes (login, signup, password reset) */}
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/password-reset" component={PasswordResetPage} />

      {/* Protected routes (e.g., if authentication is required) */}
      <ProtectedRoute path="/dashboard" component={DashboardPage} />
      <ProtectedRoute path="/settings" component={SettingsPage} />
      {/* Add more protected routes as needed */}
    </>
  );
};

export default AuthenticationRoutes;
