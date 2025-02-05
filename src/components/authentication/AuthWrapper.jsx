import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Spinner } from '../ui/Spinner';
import { checkAuthStatus } from '../../utils/APIHelper'; // Example utility function for checking auth status

const AuthWrapper = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate an API call to check if the user is authenticated
        const verifyAuth = async () => {
            try {
                const response = await checkAuthStatus(); // This could call your backend to verify auth status
                if (response.success) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (err) {
                setError('Error checking authentication status');
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        verifyAuth();
    }, []);

    if (isLoading) {
        return <Spinner />; // A loading spinner while checking auth
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (isAuthenticated === false) {
        return <Redirect to="/login" />; // Redirect to login if not authenticated
    }

    return <>{children}</>; // Render the protected content if authenticated
};

export default AuthWrapper;
