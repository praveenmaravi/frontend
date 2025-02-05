// frontend/src/views/Marketplace/PluginInstallation.js

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Loader, Modal, Notification } from '../../components/UI';
import { getPluginDetails, installPlugin } from '../../api/pluginApi';
import './PluginInstallation.css';

const PluginInstallation = () => {
  const { pluginId } = useParams();
  const history = useHistory();
  const [pluginDetails, setPluginDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installing, setInstalling] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the plugin details from the API
    const fetchPluginDetails = async () => {
      try {
        const data = await getPluginDetails(pluginId);
        setPluginDetails(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load plugin details.');
        setLoading(false);
      }
    };

    fetchPluginDetails();
  }, [pluginId]);

  const handleInstall = async () => {
    setInstalling(true);
    try {
      const result = await installPlugin(pluginId);
      if (result.success) {
        Notification.show('Plugin installed successfully!', 'success');
        history.push('/marketplace/my-plugins'); // Redirect to the user's plugin list
      } else {
        throw new Error('Installation failed');
      }
    } catch (err) {
      Notification.show('Failed to install plugin. Please try again.', 'error');
      setInstalling(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="plugin-installation-container">
      <h1>Install Plugin: {pluginDetails.name}</h1>
      <div className="plugin-details">
        <p>{pluginDetails.description}</p>
        <ul>
          {pluginDetails.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <Button
        onClick={handleInstall}
        disabled={installing}
        text={installing ? 'Installing...' : 'Install Plugin'}
        loading={installing}
      />
      {installing && (
        <Modal title="Installing Plugin">
          <p>Your plugin is being installed. Please wait...</p>
        </Modal>
      )}
    </div>
  );
};

export default PluginInstallation;
