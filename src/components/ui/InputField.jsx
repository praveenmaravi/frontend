// frontend/src/components/ui/InputField.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css'; // Optional: for styling

const InputField = ({
  type,
  value,
  onChange,
  placeholder,
  name,
  id,
  required,
  autoFocus,
  disabled,
  errorMessage,
  ...rest
}) => {
  return (
    <div className="input-field-container">
      <input
        type={type || 'text'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={id}
        required={required}
        autoFocus={autoFocus}
        disabled={disabled}
        className={`input-field ${errorMessage ? 'input-field-error' : ''}`}
        {...rest}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  name: '',
  id: '',
  required: false,
  autoFocus: false,
  disabled: false,
  errorMessage: '',
};

export default InputField;
