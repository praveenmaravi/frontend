// ErrorLogs.jsx
import React, { useState, useEffect } from 'react';
import { fetchErrorLogs } from '../../utils/APIHelper'; // Utility function to fetch error logs

const ErrorLogs = () => {
  const [errorLogs, setErrorLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLogs = async () => {
      try {
        const logs = await fetchErrorLogs();
        setErrorLogs(logs);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch error logs');
        setLoading(false);
      }
    };
    getLogs();
  }, []);

  if (loading) {
    return <div>Loading error logs...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="error-logs-container">
      <h2>Error Logs</h2>
      <table className="error-logs-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Message</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {errorLogs.length === 0 ? (
            <tr>
              <td colSpan="4">No errors to display</td>
            </tr>
          ) : (
            errorLogs.map((log, index) => (
              <tr key={index}>
                <td>{new Date(log.timestamp).toLocaleString()}</td>
                <td>{log.type}</td>
                <td>{log.message}</td>
                <td>
                  <button onClick={() => alert(log.details)}>View Details</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ErrorLogs;
