import React, { useState } from 'react';

const APIConnector = () => {
  const [apiUrl, setApiUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission to connect to API
  const handleConnect = async (e) => {
    e.preventDefault();

    if (!apiUrl || !apiKey) {
      setError('API URL and API Key are required');
      return;
    }

    try {
      const res = await fetch(apiUrl, {
        method: 'GET',  // Or 'POST' depending on the API
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setResponse(data);
        setError(null);
      } else {
        throw new Error(data.message || 'Failed to connect');
      }
    } catch (err) {
      setError(err.message);
      setResponse(null);
    }
  };

  return (
    <div className="api-connector">
      <h2>Connect to Third-Party API</h2>
      
      {/* Form for entering API URL and Key */}
      <form onSubmit={handleConnect}>
        <div>
          <label htmlFor="apiUrl">API URL</label>
          <input
            type="url"
            id="apiUrl"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="apiKey">API Key</label>
          <input
            type="text"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            required
          />
        </div>

        <button type="submit">Connect</button>
      </form>

      {/* Display response or error */}
      {error && <p className="error">{error}</p>}
      {response && (
        <div className="response">
          <h3>API Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default APIConnector;
