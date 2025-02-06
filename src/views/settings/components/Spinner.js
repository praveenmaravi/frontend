// frontend/src/views/settings/components/Spinner.js

import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // Using react-icons for the spinner

const Spinner = ({ size = 'text-4xl', color = 'text-blue-500', className = '' }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <FaSpinner className={`animate-spin ${size} ${color}`} />
    </div>
  );
};

export default Spinner;
