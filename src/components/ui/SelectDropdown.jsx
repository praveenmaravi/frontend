// SelectDropdown.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './SelectDropdown.css'; // Add custom styles for the dropdown

const SelectDropdown = ({ options, value, onChange, label, disabled }) => {
  return (
    <div className="select-dropdown">
      {label && <label htmlFor="select-dropdown">{label}</label>}
      <select
        id="select-dropdown"
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="select-dropdown__input"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

SelectDropdown.defaultProps = {
  value: '',
  label: '',
  disabled: false,
};

export default SelectDropdown;
