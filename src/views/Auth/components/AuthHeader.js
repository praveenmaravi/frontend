// src/views/Auth/components/AuthHeader.js

import React from 'react';

const AuthHeader = ({ title, description }) => {
  return (
    <div className="auth-header text-center mb-8">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">{title}</h1>
      {description && <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">{description}</p>}
    </div>
  );
};

export default AuthHeader;
