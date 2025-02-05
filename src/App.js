import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ProtectedRoute } from './router/guards/ProtectedRoute';  // Route guard
import { ErrorBoundary } from './components/utils/ErrorBoundary';       // Error boundary
import Layout from './components/layout/Layout';                         // Layout component

// Importing Views
import DashboardHome from './views/Dashboard/DashboardHome';
import ChatbotInterface from './views/ChatbotInterface';
import Onboarding from './views/Onboarding';
import Settings from './views/Settings';
import Analytics from './views/Analytics';
import Marketplace from './views/Marketplace';
import ErrorPage from './views/ErrorPage/ErrorPage';
import Authentication from './views/Auth/Authentication';


// Importing Store Actions
import { loadUserData } from './store/actions/userActions';

// Importing Global Styles
import "@/assets/styles/base/_global.scss";


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
            <Switch>
              <ProtectedRoute exact path="/" component={Dashboard} />
              <ProtectedRoute path="/chatbot" component={ChatbotInterface} />
              <Route path="/onboarding" component={Onboarding} />
              <Route path="/settings" component={Settings} />
              <Route path="/analytics" component={Analytics} />
              <Route path="/marketplace" component={Marketplace} />
              <Route path="/error" component={ErrorHandling} />
              <Route path="/auth" component={Authentication} />
            </Switch>
          </ErrorBoundary>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
