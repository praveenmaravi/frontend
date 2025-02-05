import { io } from 'socket.io-client';

// Real-time service for WebSocket connections
const socket = io('http://your-server-url');  // Replace with your server's URL

// This function connects to the WebSocket and listens for real-time events
const connectToWebSocket = (callback) => {
  socket.on('connect', () => {
    console.log('Connected to WebSocket');
  });

  socket.on('dashboardUpdate', (data) => {
    // Trigger callback with the new data whenever an update is received
    callback(data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket');
  });
};

// This function disconnects from the WebSocket
const disconnectFromWebSocket = () => {
  socket.disconnect();
  console.log('Disconnected from WebSocket');
};

// Real-time service for long polling (fallback if WebSockets aren't available)
const fetchRealTimeData = async (callback) => {
  try {
    const response = await fetch('/api/realtime-dashboard');
    const data = await response.json();

    if (response.ok) {
      callback(data);
    } else {
      console.error('Failed to fetch real-time data');
    }
  } catch (error) {
    console.error('Error fetching real-time data', error);
  }
};

export default {
  connectToWebSocket,
  disconnectFromWebSocket,
  fetchRealTimeData,
};
