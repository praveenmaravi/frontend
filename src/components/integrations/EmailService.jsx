// frontend/src/components/integrations/EmailService.jsx

import React, { useState } from 'react';
import { Button, InputField, Spinner } from '../ui'; // Assuming reusable UI components
import APIHelper from '../../utils/APIHelper'; // Helper for API requests

const EmailService = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Send email function
  const sendEmail = async () => {
    if (!email || !subject || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      const response = await APIHelper.post('/email/send', { email, subject, message });
      if (response.status === 200) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Error sending email. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-service">
      <h2>Email Service Integration</h2>

      <InputField 
        type="email"
        label="Recipient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <InputField 
        type="text"
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      
      <InputField 
        type="textarea"
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      
      {loading ? (
        <Spinner /> // Assuming a spinner component for loading
      ) : (
        <Button onClick={sendEmail}>Send Email</Button>
      )}

      {status && <div className="status">{status}</div>}
    </div>
  );
};

export default EmailService;
