// frontend/src/App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Assuming you're using Redux for state management

// Importing Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Importing Views (Pages)
import Dashboard from './views/Dashboard';
import ChatbotInterface from './views/ChatbotInterface';
import Onboarding from './views/Onboarding';
import Settings from './views/Settings';
import Analytics from './views/Analytics';
import Marketplace from './views/Marketplace';
import ErrorHandling from './views/ErrorHandling';
import Authentication from './views/Authentication';

// Importing Store Actions (for example, to load user data)
import { loadUserData } from './store/actions/userActions';

// Importing Global Styles
import './styles/global.css';

const App = () => {
  const dispatch = useDispatch();

  // Load user data or check authentication status on app load
  useEffect(() => {
    dispatch(loadUserData());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Router>
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <Sidebar />

        <main className="main-content">
          <Switch>
            {/* Defining Routes */}
            <Route exact path="/" component={Dashboard} />
            <Route path="/chatbot" component={ChatbotInterface} />
            <Route path="/onboarding" component={Onboarding} />
            <Route path="/settings" component={Settings} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/marketplace" component={Marketplace} />
            <Route path="/error" component={ErrorHandling} />
            <Route path="/auth" component={Authentication} />
            {/* You can add other routes as needed */}
          </Switch>
        </main>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
