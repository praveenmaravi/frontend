// integrations/WhatsAppIntegration.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WhatsAppIntegration = ({ apiKey, onIntegrationSuccess, onIntegrationError }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  // Simulate API integration connection process
  const handleConnect = async () => {
    try {
      // Validate phone number
      if (!phoneNumber.match(/^\d{10}$/)) {
        setError('Please enter a valid 10-digit phone number');
        return;
      }

      // Simulate an API request to integrate WhatsApp with the provided API key
      const response = await fetch('/api/integrate-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey,
          phoneNumber,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsConnected(true);
        onIntegrationSuccess(data.message);
      } else {
        throw new Error(data.message || 'Failed to integrate with WhatsApp');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while integrating with WhatsApp');
      onIntegrationError(err.message);
    }
  };

  return (
    <div className="whatsapp-integration">
      <h2>WhatsApp Integration</h2>
      <p>Integrate your chatbot with WhatsApp to enable real-time communication.</p>

      {isConnected ? (
        <div className="success">
          <p>Successfully connected to WhatsApp!</p>
        </div>
      ) : (
        <div className="connection-form">
          <label htmlFor="phoneNumber">Enter Your WhatsApp Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g. 1234567890"
          />
          {error && <p className="error">{error}</p>}
          <button onClick={handleConnect}>Connect to WhatsApp</button>
        </div>
      )}
    </div>
  );
};

WhatsAppIntegration.propTypes = {
  apiKey: PropTypes.string.isRequired,
  onIntegrationSuccess: PropTypes.func.isRequired,
  onIntegrationError: PropTypes.func.isRequired,
};

export default WhatsAppIntegration;
