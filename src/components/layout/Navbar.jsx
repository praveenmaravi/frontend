// frontend/src/components/layout/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have some basic styling for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Branding */}
        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">
            VisionAI
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/chat" className="navbar-link">Chat</Link>
          </li>
          <li className="navbar-item">
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          </li>
          <li className="navbar-item">
            <Link to="/settings" className="navbar-link">Settings</Link>
          </li>
        </ul>

        {/* User Profile or Authentication Links */}
        <div className="navbar-auth">
          <Link to="/login" className="navbar-login">Login</Link>
          <Link to="/signup" className="navbar-signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
