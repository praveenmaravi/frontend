// accessGuard.js
import { Redirect } from 'react-router-dom'; // or any other router library you are using

/**
 * Access Guard for route protection based on custom access control rules.
 * @param {Object} requiredAccess - The required access control levels for the route.
 * @param {Object} userAccess - The current user's access level(s).
 * @param {React.Component} children - The children components (route content).
 */
const AccessGuard = ({ requiredAccess, userAccess, children }) => {
  // Check if user has the required access level
  const hasAccess = requiredAccess.every(access => userAccess.includes(access));

  // If user doesn't have the necessary access, redirect to an error page or access denied page
  if (!hasAccess) {
    return <Redirect to="/error/403" />;
  }

  // If access is allowed, render the child components
  return children;
};

export default AccessGuard;
