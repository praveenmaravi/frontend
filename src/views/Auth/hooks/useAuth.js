// src/hooks/useAuth.js

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../views/Auth/AuthContext';
import { authService } from '../services/authService'; // Assuming your authService handles API calls for login, signup, etc.
import { useRouter } from 'next/router';

// Custom hook for managing auth state
export const useAuth = () => {
  const [user, setUser] = useState(null); // To store user data
  const [loading, setLoading] = useState(true); // To handle loading state when checking auth status
  const [error, setError] = useState(null); // To handle any errors during authentication
  const { setAuthState } = useContext(AuthContext); // Using context for global auth state
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Attempt to fetch the current user or validate the JWT token
        const currentUser = await authService.getCurrentUser(); // Assume this fetches user data from a backend or local storage
        if (currentUser) {
          setUser(currentUser); // If user is found, set user state
          setAuthState(true); // Set global auth state to true
        } else {
          setUser(null); // No user found, set user state to null
          setAuthState(false); // Set global auth state to false
        }
      } catch (error) {
        setError(error.message); // Set error if any
        setAuthState(false); // Ensure global auth state is false if there's an error
      } finally {
        setLoading(false); // Once the check is done, set loading to false
      }
    };

    checkAuthStatus(); // Run the auth check on component mount
  }, [setAuthState]);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    try {
      const userData = await authService.login(email, password); // Authenticate with the backend
      setUser(userData); // Set user data after successful login
      setAuthState(true); // Set global auth state to true
      router.push('/dashboard'); // Redirect to the dashboard or other page after login
    } catch (err) {
      setError(err.message); // Capture any login errors
    } finally {
      setLoading(false); // Set loading to false after login attempt
    }
  };

  // Logout function
  const logout = () => {
    authService.logout(); // Call logout method from authService
    setUser(null); // Clear user data from state
    setAuthState(false); // Set global auth state to false
    router.push('/login'); // Redirect to login page after logout
  };

  // Return the auth state and actions
  return { user, loading, error, login, logout };
};
