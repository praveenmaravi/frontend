// Avatar.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css'; // Optional, for styling

const Avatar = ({ userType, src, alt }) => {
  const avatarClass = userType === 'bot' ? 'avatar bot' : 'avatar user';

  return (
    <div className={avatarClass}>
      <img src={src} alt={alt} className="avatar-image" />
    </div>
  );
};

// PropTypes for validation
Avatar.propTypes = {
  userType: PropTypes.oneOf(['user', 'bot']).isRequired, // 'user' or 'bot'
  src: PropTypes.string.isRequired, // Avatar image URL
  alt: PropTypes.string.isRequired, // Image alt text
};

export default Avatar;
