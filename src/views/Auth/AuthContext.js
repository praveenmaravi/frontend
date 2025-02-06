import React, { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { authService } from './services/authService';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap your app and provide authentication state
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Store user data
    const [loading, setLoading] = useState(true); // Track loading state
    const router = useRouter();

    // Check if user is authenticated on initial load
    useEffect(() => {
        const checkUserAuth = async () => {
            try {
                const userData = await authService.getUser(); // Get user info from backend or local storage
                setUser(userData);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkUserAuth();
    }, []);

    // Login function
    const login = async (email, password) => {
        try {
            const userData = await authService.login(email, password);
            setUser(userData);
            router.push('/dashboard'); // Redirect to the dashboard
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    // Signup function
    const signup = async (email, password, name) => {
        try {
            const userData = await authService.signup(email, password, name);
            setUser(userData);
            router.push('/dashboard'); // Redirect to the dashboard
        } catch (error) {
            console.error('Signup failed', error);
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await authService.logout(); // Clear session or token
            setUser(null);
            router.push('/login'); // Redirect to login page
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    // Password reset function
    const resetPassword = async (email) => {
        try {
            await authService.resetPassword(email); // Handle password reset
            console.log('Password reset link sent to email');
        } catch (error) {
            console.error('Password reset failed', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout, resetPassword }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};
