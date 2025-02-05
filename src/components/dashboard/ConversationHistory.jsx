import React, { useState, useEffect } from 'react';
import { fetchConversationHistory } from '../../utils/APIHelper'; // Assuming you have a helper function for API calls
import { Card, Spinner } from '../ui'; // Reusable UI elements
import './ConversationHistory.css'; // Add your custom styles

const ConversationHistory = () => {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // Fetch conversation history from the API on component mount
    const getConversationHistory = async () => {
      try {
        const response = await fetchConversationHistory();
        setConversations(response.data);
      } catch (error) {
        console.error("Error fetching conversation history:", error);
      } finally {
        setLoading(false);
      }
    };

    getConversationHistory();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="conversation-history">
      <h2>Conversation History</h2>
      <div className="conversation-list">
        {conversations.length === 0 ? (
          <p>No conversations found</p>
        ) : (
          conversations.map((conversation) => (
            <Card key={conversation.id} className="conversation-card">
              <div className="conversation-summary">
                <p><strong>User:</strong> {conversation.userName}</p>
                <p><strong>Bot:</strong> {conversation.botResponse}</p>
                <p><strong>Date:</strong> {new Date(conversation.timestamp).toLocaleString()}</p>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ConversationHistory;
