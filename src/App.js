import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated for React Router v6
import { useDispatch } from 'react-redux';
import { ProtectedRoute } from './router/guards/ProtectedRoute';  // Route guard
import { ErrorBoundary } from './components/utils/ErrorBoundary'; // Error boundary
import Layout from './components/layout/Layout'; // Layout component

// Importing Views (Updated for proper structure and file names)
import DashboardHome from './views/Dashboard/DashboardHome';
import ChatbotInterface from './views/ChatbotInterface/ChatbotInterface';
import Settings from './views/Settings';
import AnalyticsPage from './views/analytics/AnalyticsPage'; // Updated Analytics import
import Marketplace from './views/Marketplace';
import ErrorPage from './views/ErrorPage/ErrorPage';
import Authentication from './views/Auth/Authentication';

// Importing Store Actions
import { loadUserData } from './store/actions/userActions';

// Importing Global Styles
import './assets/styles/base/_global.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserData());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Router>
        <Layout>
          <ErrorBoundary>
            <Routes>
              {/* Protected Routes */}
              <ProtectedRoute path="/" element={<DashboardHome />} />
              <ProtectedRoute path="/chatbot" element={<ChatbotInterface />} />

              {/* Regular Routes */}
              <Route path="/settings" element={<Settings />} />
              <Route path="/analytics" element={<AnalyticsPage />} />  {/* Updated route */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/auth" element={<Authentication />} />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
