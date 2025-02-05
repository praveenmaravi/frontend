// frontend/src/views/Dashboard/WorkflowOverview.js

import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap'; // Assuming you're using Bootstrap for UI
import { getWorkflowStatus } from '../../utils/APIHelper'; // Custom utility to fetch workflow data

const WorkflowOverview = () => {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        setLoading(true);
        const data = await getWorkflowStatus(); // Fetch data from an API endpoint
        setWorkflows(data);
      } catch (err) {
        setError('Error fetching workflow data');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkflows();
  }, []);

  const handleViewDetails = (workflowId) => {
    // Logic to view more details or navigate to specific workflow page
    console.log(`View details for workflow ID: ${workflowId}`);
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <div className="text-danger text-center">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h3>Active Workflows</h3>
      {workflows.length === 0 ? (
        <p>No active workflows at the moment.</p>
      ) : (
        <div className="row">
          {workflows.map((workflow) => (
            <div className="col-md-4 mb-3" key={workflow.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{workflow.name}</Card.Title>
                  <Card.Text>
                    <strong>Status:</strong> {workflow.status}
                  </Card.Text>
                  <Card.Text>
                    <strong>Started:</strong> {workflow.startDate}
                  </Card.Text>
                  <Button
                    variant="info"
                    onClick={() => handleViewDetails(workflow.id)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkflowOverview;
