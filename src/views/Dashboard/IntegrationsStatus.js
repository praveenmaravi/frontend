import React, { useEffect, useState } from 'react';
import { Card, Spinner, Alert } from 'react-bootstrap';

const IntegrationsStatus = () => {
  const [integrations, setIntegrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching integration status data from API
    const fetchIntegrationsStatus = async () => {
      try {
        const response = await fetch('/api/integrations/status'); // Replace with your actual API
        if (!response.ok) {
          throw new Error('Failed to fetch integrations status');
        }
        const data = await response.json();
        setIntegrations(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchIntegrationsStatus();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div>
      <h3>Integrations Status</h3>
      <div className="row">
        {integrations.map((integration) => (
          <div key={integration.id} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{integration.name}</Card.Title>
                <Card.Text>
                  Status: <strong>{integration.status}</strong>
                </Card.Text>
                {integration.status === 'active' ? (
                  <div className="text-success">✔ Active</div>
                ) : (
                  <div className="text-danger">❌ Inactive</div>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationsStatus;
