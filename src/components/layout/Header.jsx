import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css'; // Add any custom styles for the header

const Header = ({ userName }) => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/path-to-your-logo.png" alt="Vision AI Logo" className="logo-img" />
          </Link>
        </div>

        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link to="/">Home</Link> / <span>Dashboard</span>
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <span className="user-name">{userName || 'Guest'}</span>
          <FaUserCircle className="user-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
