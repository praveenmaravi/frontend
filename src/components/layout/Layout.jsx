// PageWrapper.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      {/* Navbar Section */}
      <Navbar />
      
      <div className="main-content">
        {/* Sidebar Section */}
        <Sidebar />
        
        {/* Content Section */}
        <div className="content-area">
          {children}
        </div>
      </div>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

// Define PropTypes for validation (optional)
PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
