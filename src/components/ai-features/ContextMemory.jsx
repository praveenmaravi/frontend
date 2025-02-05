// components/ai-features/ContextMemory.jsx

import React, { useState, useEffect } from 'react';

/**
 * ContextMemory component remembers past interactions and provides context-aware chatbot conversations.
 */
const ContextMemory = ({ userMessage, botResponse }) => {
  const [contextHistory, setContextHistory] = useState([]);

  // Function to update the memory with new context
  const updateContextMemory = (userMsg, botResp) => {
    setContextHistory((prevContext) => [
      ...prevContext,
      { userMessage: userMsg, botResponse: botResp },
    ]);
  };

  // Effect to update context whenever there is a new message and response
  useEffect(() => {
    if (userMessage && botResponse) {
      updateContextMemory(userMessage, botResponse);
    }
  }, [userMessage, botResponse]);

  // Function to retrieve a summarized context from memory
  const getContextSummary = () => {
    return contextHistory
      .map((entry) => `${entry.userMessage} -> ${entry.botResponse}`)
      .join('\n');
  };

  return (
    <div>
      <h3>Context Memory</h3>
      <p>Here’s what I remember:</p>
      <pre>{getContextSummary()}</pre>
    </div>
  );
};

export default ContextMemory;
