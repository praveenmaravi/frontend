// src/views/settings/components/InputField.js

import React from 'react';

const InputField = ({ label, type, value, onChange, placeholder, required, error }) => {
  return (
    <div className="mb-4">
      {/* Label for the input */}
      <label htmlFor={label} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Input field */}
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
          error ? 'border-red-500' : ''
        }`}
      />

      {/* Display error message */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

InputField.defaultProps = {
  type: 'text', // Default type is text
  required: false,
  error: '',
};

export default InputField;
