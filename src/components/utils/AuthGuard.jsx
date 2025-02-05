// frontend/src/components/utils/AuthGuard.jsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management

const AuthGuard = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get authentication status from Redux store

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} /> // If authenticated, render the component
        ) : (
          <Redirect to="/login" /> // If not authenticated, redirect to login
        )
      }
    />
  );
};

export default AuthGuard;
