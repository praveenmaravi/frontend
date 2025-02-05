// guards/authGuard.js

import { useHistory } from 'react-router-dom'; // For React Router
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management

const authGuard = (Component) => {
  return (props) => {
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Check if the user is authenticated

    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page
      history.push('/authentication');
      return null; // Return nothing until the redirect happens
    }

    // If authenticated, render the protected component
    return <Component {...props} />;
  };
};

export default authGuard;
