import { useState, useEffect } from 'react';
import { io } from 'socket.io-client'; // Assuming you're using Socket.io for WebSocket communication

const SOCKET_URL = 'wss://your-socket-server-url'; // Replace with your actual WebSocket server URL

const useRealTimeUpdates = () => {
  const [realTimeData, setRealTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let socket = null;

  useEffect(() => {
    // Establish WebSocket connection when the component mounts
    socket = io(SOCKET_URL, {
      transports: ['websocket'], // WebSocket transport
    });

    // Listen for real-time updates from the server
    socket.on('dashboard-update', (data) => {
      setRealTimeData(data); // Update the state with new data
      setLoading(false);
    });

    // Handle errors
    socket.on('connect_error', (err) => {
      setError(err);
      setLoading(false);
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return { realTimeData, loading, error };
};

export default useRealTimeUpdates;
