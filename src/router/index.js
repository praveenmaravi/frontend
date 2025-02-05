// frontend/src/router/index.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import route views
import Dashboard from '../views/Dashboard';
import Chatbot from '../views/Chatbot';
import Onboarding from '../views/Onboarding';
import Settings from '../views/Settings';
import Analytics from '../views/Analytics';
import Marketplace from '../views/Marketplace';
import Error from '../views/Error';
import Authentication from '../views/Authentication';
import UserManagement from '../views/UserManagement';
import PrivateAdmin from '../views/PrivateAdmin';
import Integrations from '../views/Integrations';

// Import guards
import { authGuard, roleGuard, accessGuard } from './guards';

// Import utility functions
import { redirect } from './utils/redirect';

const AppRouter = () => (
  <Router>
    <Switch>
      {/* Public routes */}
      <Route exact path="/login" component={Authentication} />
      <Route exact path="/signup" component={Authentication} />
      
      {/* Protected routes */}
      <Route 
        exact path="/dashboard" 
        render={(props) => authGuard(<Dashboard {...props} />)} 
      />
      <Route 
        exact path="/chatbot" 
        render={(props) => authGuard(<Chatbot {...props} />)} 
      />
      <Route 
        exact path="/onboarding" 
        render={(props) => authGuard(<Onboarding {...props} />)} 
      />
      <Route 
        exact path="/settings" 
        render={(props) => authGuard(<Settings {...props} />)} 
      />
      <Route 
        exact path="/analytics" 
        render={(props) => authGuard(<Analytics {...props} />)} 
      />
      <Route 
        exact path="/marketplace" 
        render={(props) => authGuard(<Marketplace {...props} />)} 
      />
      <Route 
        exact path="/integrations" 
        render={(props) => authGuard(<Integrations {...props} />)} 
      />

      {/* Admin-only routes */}
      <Route 
        exact path="/user-management" 
        render={(props) => roleGuard(<UserManagement {...props} />)} 
      />
      <Route 
        exact path="/private-admin" 
        render={(props) => roleGuard(<PrivateAdmin {...props} />)} 
      />

      {/* Error page */}
      <Route component={Error} />
    </Switch>
  </Router>
);

export default AppRouter;
