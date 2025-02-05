// frontend/src/views/settings/components/ToggleSwitch.js

import React from 'react';

// A reusable toggle switch component for enabling/disabling features
const ToggleSwitch = ({ id, label, isChecked, onChange, disabled = false }) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Label for the toggle */}
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Toggle Switch */}
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor={id}
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        >
          <span
            className={`toggle-circle absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 transition-transform duration-300 ${
              isChecked ? 'transform translate-x-full' : ''
            }`}
          ></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
