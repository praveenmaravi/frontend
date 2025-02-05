// routes/chatbot.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ChatbotInterface from '../views/ChatbotInterface'; // Your chatbot UI component
import { useAuth } from '../hooks/useAuth'; // Custom hook for checking auth status

// Chatbot route definition
const ChatbotRoute = () => {
  const { isAuthenticated } = useAuth(); // Assuming useAuth returns authentication state

  return (
    <Route
      path="/chatbot"
      render={() => {
        // Check if user is authenticated
        if (!isAuthenticated) {
          // Redirect to login page if not authenticated
          return <Redirect to="/authentication/login" />;
        }

        // Render the chatbot interface if authenticated
        return <ChatbotInterface />;
      }}
    />
  );
};

export default ChatbotRoute;
