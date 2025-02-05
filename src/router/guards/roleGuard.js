// guards/roleGuard.js

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserRole } from '../store/selectors'; // Assuming you have a selector to get the user's role

// Role-based access control
const roleGuard = (requiredRole) => {
  const history = useHistory();
  const userRole = useSelector(getUserRole); // Retrieve the user role from the Redux store

  // If the user does not have the required role, redirect them to a restricted access page
  if (userRole !== requiredRole) {
    history.push('/error'); // Or redirect to a page like '/access-denied'
    return false; // Prevent the route rendering
  }

  return true; // Allow the route to render if the user has the required role
};

export default roleGuard;
