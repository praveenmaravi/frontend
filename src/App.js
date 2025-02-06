import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated for React Router v6
import { useDispatch } from 'react-redux';
import { ProtectedRoute } from './router/guards/ProtectedRoute';  // Route guard
import { ErrorBoundary } from './components/utils/ErrorBoundary'; // Error boundary
import Layout from './components/layout/Layout'; // Layout component

// Importing Views
import Dashboard from './views/Dashboard/Dashboard';  
import ChatbotInterface from './views/ChatbotInterface/ChatbotInterface';
import SettingsPage from './views/settings/SettingsPage';  
import AnalyticsPage from './views/analytics/AnalyticsPage';
import MarketplacePage from './views/Marketplace/MarketplacePage';
import ErrorPage from './views/ErrorPage/ErrorPage';

// Authentication Views
import AuthPage from './views/Auth/AuthPage';
import LoginPage from './views/Auth/LoginPage';
import SignupPage from './views/Auth/SignupPage';
import ForgotPasswordPage from './views/Auth/ForgotPasswordPage';
import ResetPasswordPage from './views/Auth/ResetPasswordPage';

// Importing Store Actions
import * as actions from './store/actions'; // Import all actions

// Importing Global Styles
import './assets/styles/base/_global.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatching an action to load user data when the component mounts
    dispatch(actions.loadUserData());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Router>
        <Layout>
          <ErrorBoundary>
            <Routes>
              {/* Protected Routes */}
              <ProtectedRoute path="/" element={<Dashboard />} />
              <ProtectedRoute path="/chatbot" element={<ChatbotInterface />} />

              {/* Regular Routes */}
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/error" element={<ErrorPage />} />

              {/* Authentication Routes */}
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
