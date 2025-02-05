// frontend/src/views/Marketplace/MyPlugins.js

import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { getUserPlugins, uninstallPlugin } from '../../services/pluginService'; // Example service functions

const MyPlugins = () => {
  const [plugins, setPlugins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the installed plugins when the component mounts
    const fetchPlugins = async () => {
      try {
        const response = await getUserPlugins(); // Fetch installed plugins
        setPlugins(response.data);
      } catch (err) {
        setError('Failed to fetch plugins.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlugins();
  }, []);

  const handleUninstall = async (pluginId) => {
    try {
      await uninstallPlugin(pluginId); // Call the service to uninstall a plugin
      setPlugins(plugins.filter((plugin) => plugin.id !== pluginId)); // Remove uninstalled plugin from state
    } catch (err) {
      setError('Failed to uninstall plugin.');
    }
  };

  if (loading) {
    return <Typography>Loading your plugins...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        My Installed Plugins
      </Typography>
      {plugins.length === 0 ? (
        <Typography>No plugins installed.</Typography>
      ) : (
        <List>
          {plugins.map((plugin) => (
            <ListItem key={plugin.id} secondaryAction={
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleUninstall(plugin.id)}
              >
                Uninstall
              </Button>
            }>
              <ListItemText
                primary={plugin.name}
                secondary={plugin.description}
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default MyPlugins;
