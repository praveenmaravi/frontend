// frontend/src/views/ErrorPage/ServerError.js

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import './ErrorPage.css'; // Optional: custom styles for error page

const ServerError = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/'); // Redirect to home page
  };

  return (
    <div className="error-page-container">
      <div className="error-content">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">
          We encountered a server error. Please try again later or contact support if the issue persists.
        </p>
        <Button color="primary" onClick={goHome}>Go to Home</Button>
      </div>
      <div className="error-footer">
        <p className="footer-text">© 2025 Your Company</p>
      </div>
    </div>
  );
};

export default ServerError;
