import React, { useState, useEffect } from 'react';

const APIKeys = () => {
  const [apiKeys, setApiKeys] = useState([]);
  const [newKey, setNewKey] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Simulate fetching the API keys from the server
  useEffect(() => {
    const fetchApiKeys = async () => {
      try {
        // Simulate an API call
        const response = await fetch('/api/keys'); // Replace with your actual API endpoint
        const data = await response.json();
        setApiKeys(data.keys);
      } catch (err) {
        setError('Failed to fetch API keys');
      } finally {
        setLoading(false);
      }
    };

    fetchApiKeys();
  }, []);

  // Handle adding a new API key
  const handleAddKey = async () => {
    if (!newKey) {
      setError('API key cannot be empty');
      return;
    }

    try {
      // Simulate an API call to save the new API key
      const response = await fetch('/api/keys', {
        method: 'POST',
        body: JSON.stringify({ key: newKey }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (result.success) {
        setApiKeys((prevKeys) => [...prevKeys, newKey]);
        setNewKey('');
        setError('');
      } else {
        setError('Failed to add API key');
      }
    } catch (err) {
      setError('Error adding API key');
    }
  };

  // Handle deleting an API key
  const handleDeleteKey = async (keyToDelete) => {
    try {
      // Simulate an API call to delete the API key
      const response = await fetch(`/api/keys/${keyToDelete}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (result.success) {
        setApiKeys((prevKeys) => prevKeys.filter((key) => key !== keyToDelete));
      } else {
        setError('Failed to delete API key');
      }
    } catch (err) {
      setError('Error deleting API key');
    }
  };

  return (
    <div className="api-keys-container">
      <h2>Manage API Keys</h2>
      {loading ? (
        <p>Loading API keys...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div>
          <ul>
            {apiKeys.map((key, index) => (
              <li key={index}>
                <span>{key}</span>
                <button onClick={() => handleDeleteKey(key)}>Delete</button>
              </li>
            ))}
          </ul>
          <div>
            <input
              type="text"
              placeholder="Enter new API key"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
            />
            <button onClick={handleAddKey}>Add API Key</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default APIKeys;
