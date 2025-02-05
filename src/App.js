import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated for React Router v6
import { useDispatch } from 'react-redux';
import { ProtectedRoute } from './router/guards/ProtectedRoute';  // Route guard
import { ErrorBoundary } from './components/utils/ErrorBoundary'; // Error boundary
import Layout from './components/layout/Layout'; // Layout component

// Importing Views (Updated for proper structure and file names)
import DashboardHome from './views/Dashboard/DashboardHome';
import ChatbotInterface from './views/ChatbotInterface';
import Onboarding from './views/Onboarding/Onboarding';  // Import individual components if needed
import Settings from './views/Settings';
import AnalyticsPage from './views/Analytics/AnalyticsPage';  // Updated for correct page
import Marketplace from './views/Marketplace';
import ErrorPage from './views/ErrorPage/ErrorPage';
import Authentication from './views/Auth/Authentication';

// Importing Store Actions
import { loadUserData } from './store/actions/userActions';

// Importing Global Styles
import './assets/styles/base/_global.scss';

// Onboarding imports
import FeatureTutorial from './views/Onboarding/FeatureTutorial';
import IndustrySelection from './views/Onboarding/IndustrySelection';
import OnboardingComplete from './views/Onboarding/OnboardingComplete';
import OnboardingSteps from './views/Onboarding/OnboardingSteps';
import PreferencesSetup from './views/Onboarding/PreferencesSetup';

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
              <Route path="/onboarding" element={<FeatureTutorial />} />  {/* Example for the first step */}
              <Route path="/onboarding/industry-selection" element={<IndustrySelection />} />
              <Route path="/onboarding/complete" element={<OnboardingComplete />} />
              <Route path="/onboarding/steps" element={<OnboardingSteps />} />
              <Route path="/onboarding/preferences" element={<PreferencesSetup />} />

              <Route path="/settings" element={<Settings />} />
              <Route path="/analytics" element={<AnalyticsPage />} />  {/* Updated Analytics Route */}
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
