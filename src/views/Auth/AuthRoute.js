// src/views/Auth/AuthRoute.js

import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom'; // If using react-router v5
import { useHistory } from 'react-router-dom'; // If using react-router v6
import { AuthContext } from './AuthContext';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext); // Access user state from AuthContext
  const history = useHistory(); // For redirecting if not authenticated
  
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          // If user is logged in, render the component
          return <Component {...props} />;
        } else {
          // If not logged in, redirect to login page
          history.push('/auth/login'); // Adjust path based on your routing structure
          return null; // Can also render a loading state or error message here
        }
      }}
    />
  );
};

export default AuthRoute;
