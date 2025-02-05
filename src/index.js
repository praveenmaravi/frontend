import React from 'react';
import ReactDOM from 'react-dom';

// Global styles for the app
import './assets/styles/base/index.scss'; 

// Main app component
import App from './App'; 

// For handling routing
import { BrowserRouter as Router } from 'react-router-dom'; 

// For global state management (Redux)
import { Provider } from 'react-redux'; 
import store from './store'; // Redux store

// Optional: For toast notifications
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; // Toast styles

// Service worker for PWA support (optional)
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; 

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

// Register service worker for Progressive Web App (PWA) support (optional)
serviceWorkerRegistration.register();
