import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import PluginService from '../../services/PluginService'; // Assuming you have a service to fetch plugins

const PluginListing = () => {
  const [plugins, setPlugins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlugins = async () => {
      try {
        const response = await PluginService.getAllPlugins(); // Fetch the plugins from your API or service
        setPlugins(response.data);
      } catch (error) {
        console.error('Error fetching plugins:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlugins();
  }, []);

  if (loading) {
    return <div>Loading plugins...</div>;
  }

  return (
    <div className="plugin-listing">
      <h1>Available Plugins</h1>
      <Row>
        {plugins.length === 0 ? (
          <p>No plugins available at the moment.</p>
        ) : (
          plugins.map((plugin) => (
            <Col md={4} key={plugin.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={plugin.imageUrl} alt={plugin.name} />
                <Card.Body>
                  <Card.Title>{plugin.name}</Card.Title>
                  <Card.Text>{plugin.description}</Card.Text>
                  <Link to={`/marketplace/plugin/${plugin.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default PluginListing;
