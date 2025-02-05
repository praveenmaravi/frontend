import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // For styling (you can create your own styles)

const Button = ({ text, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      className={`btn ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
