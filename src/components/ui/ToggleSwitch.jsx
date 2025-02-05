import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css'; // Import styles for the toggle switch

const ToggleSwitch = ({ checked, onChange, label, disabled }) => {
  return (
    <div className="toggle-switch">
      {label && <label className="toggle-label">{label}</label>}
      <input
        type="checkbox"
        className="toggle-checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={`toggle-slider ${checked ? 'checked' : ''}`} />
    </div>
  );
};

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,       // Boolean indicating toggle state
  onChange: PropTypes.func.isRequired,      // Callback to handle toggle state change
  label: PropTypes.string,                  // Optional label text for the toggle switch
  disabled: PropTypes.bool,                 // Optional disabled state
};

export default ToggleSwitch;
