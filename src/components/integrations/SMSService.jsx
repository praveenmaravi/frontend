import React, { useState } from 'react';

// SMS service helper function (e.g., Twilio or Nexmo API)
const sendSMS = async (phoneNumber, message) => {
  try {
    const response = await fetch('/api/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, message }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
};

const SMSService = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSendSMS = async () => {
    if (!phoneNumber || !message) {
      setStatus('Please provide both phone number and message.');
      return;
    }
    try {
      setStatus('Sending...');
      const result = await sendSMS(phoneNumber, message);
      if (result.success) {
        setStatus('SMS sent successfully!');
      } else {
        setStatus('Failed to send SMS.');
      }
    } catch (error) {
      setStatus('Error sending SMS.');
    }
  };

  return (
    <div className="sms-service">
      <h2>SMS Service Integration</h2>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
      </div>
      <button onClick={handleSendSMS}>Send SMS</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SMSService;
