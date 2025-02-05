// src/components/integrations/CRMIntegration.jsx

import React, { useState } from 'react';
import axios from 'axios';

const CRMIntegration = () => {
  const [crmData, setCrmData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Example function to fetch CRM data (HubSpot or Salesforce)
  const fetchCRMData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('/api/crm-integration', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('crmToken')}`, // Assuming CRM token is stored in localStorage
        },
      });
      setCrmData(response.data);
    } catch (err) {
      setError('Failed to fetch CRM data. Please check your integration settings.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="crm-integration-container">
      <h2>CRM Integration</h2>

      {/* Button to trigger data fetching */}
      <button onClick={fetchCRMData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch CRM Data'}
      </button>

      {/* Display error if any */}
      {error && <p className="error">{error}</p>}

      {/* Display fetched CRM data */}
      {crmData && (
        <div className="crm-data">
          <h3>CRM Data</h3>
          <pre>{JSON.stringify(crmData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CRMIntegration;
