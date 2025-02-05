import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartLine, FaCogs, FaRobot, FaUser } from 'react-icons/fa'; // You can use other icons as well

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Vision AI Chatbot</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/dashboard">
              <FaHome className="sidebar-icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/chatbot">
              <FaRobot className="sidebar-icon" /> Chatbot
            </Link>
          </li>
          <li>
            <Link to="/analytics">
              <FaChartLine className="sidebar-icon" /> Analytics
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCogs className="sidebar-icon" /> Settings
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaUser className="sidebar-icon" /> Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
