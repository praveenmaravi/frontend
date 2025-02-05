// src/views/settings/components/SelectDropdown.js

import React from 'react';

const SelectDropdown = ({ options, value, onChange, label, disabled = false }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="text-sm font-medium mb-2">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
