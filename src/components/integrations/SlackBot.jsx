// integrations/SlackBot.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// SlackBot component
const SlackBot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to send message to Slack channel
  const sendMessageToSlack = async () => {
    if (!message) return;
    setLoading(true);

    try {
      const slackWebhookUrl = process.env.REACT_APP_SLACK_WEBHOOK_URL; // Add your Slack Webhook URL in .env
      const payload = {
        text: message,
      };

      const result = await axios.post(slackWebhookUrl, payload);
      setResponse('Message sent successfully!');
    } catch (error) {
      setResponse('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  // Function to listen for new messages (optional: implement event listeners if required)
  useEffect(() => {
    // Set up logic for listening to Slack events (if needed)
    // You could use Slack Events API or WebSocket for real-time message updates
  }, []);

  return (
    <div className="slack-bot-container">
      <h2>Slack Bot Integration</h2>
      <div className="slack-bot-form">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        ></textarea>
        <button onClick={sendMessageToSlack} disabled={loading}>
          {loading ? 'Sending...' : 'Send to Slack'}
        </button>
      </div>
      {response && <div className="slack-bot-response">{response}</div>}
    </div>
  );
};

export default SlackBot;
