// src/views/Auth/index.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContextProvider from './AuthContext'; // Wrap the app in AuthContext provider
import AuthPage from './AuthPage'; // The main authentication page that conditionally renders forms
import LoginPage from './LoginPage'; // Login page
import SignupPage from './SignupPage'; // Signup page
import ForgotPasswordPage from './ForgotPasswordPage'; // Forgot password page
import ResetPasswordPage from './ResetPasswordPage'; // Reset password page
import AuthRoute from './AuthRoute'; // Protect routes for authenticated users

const Index = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          {/* Public routes */}
          <Route exact path="/auth" component={AuthPage} />
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/auth/signup" component={SignupPage} />
          <Route path="/auth/forgot-password" component={ForgotPasswordPage} />
          <Route path="/auth/reset-password" component={ResetPasswordPage} />
          
          {/* Protected routes */}
          <AuthRoute path="/dashboard" component={Dashboard} /> {/* Example protected route */}
          
          {/* Default route */}
          <Route path="/" component={AuthPage} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
};

export default Index;
