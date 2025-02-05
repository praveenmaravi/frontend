// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles for the app
import App from './App'; // Main app component
import { BrowserRouter as Router } from 'react-router-dom'; // For handling routing
import { Provider } from 'react-redux'; // For global state management
import store from './store'; // Redux store (or Vuex if using Vue.js)
import reportWebVitals from './reportWebVitals'; // Performance metrics (optional)
import { ToastContainer } from 'react-toastify'; // Optional: For toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Toast styles
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Service worker for PWA support

// Main render function
ReactDOM.render(
  <React.StrictMode>
    {/* Wrapping the app with Router for routing */}
    <Router>
      {/* Wrapping the app with Provider for Redux state management */}
      <Provider store={store}>
        <App />
        {/* Toast notifications component */}
        <ToastContainer />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root') // This is where the app is injected into the DOM
);

// Optional: Report web vitals for performance monitoring
reportWebVitals();

// Register service worker for Progressive Web App (PWA) support (optional)
serviceWorkerRegistration.register();
