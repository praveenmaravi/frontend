// src/views/Auth/auth-utils.js

// Save the JWT token to local storage
export const saveAuthToken = (token) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', token);
    }
};

// Get the JWT token from local storage
export const getAuthToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('auth_token');
    }
    return null;
};

// Remove the JWT token from local storage
export const removeAuthToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
    }
};

// Check if the user is authenticated by verifying the token
export const isAuthenticated = () => {
    const token = getAuthToken();
    // You can add more complex token validation logic here (e.g., checking expiration)
    return token !== null;
};

// Redirect the user to the login page if not authenticated
export const redirectToLogin = () => {
    if (typeof window !== 'undefined') {
        window.location.href = '/login';
    }
};

// Redirect the user to the intended page (after successful login)
export const redirectAfterLogin = (redirectUrl = '/') => {
    if (typeof window !== 'undefined') {
        window.location.href = redirectUrl;
    }
};

// Parse the JWT token (e.g., decoding it for extracting user data)
export const parseJwt = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (error) {
        return null;
    }
};

// Get the user data from the JWT token
export const getUserDataFromToken = () => {
    const token = getAuthToken();
    if (token) {
        return parseJwt(token);
    }
    return null;
};

// Clear all authentication-related data (useful for logging out)
export const clearAuthData = () => {
    removeAuthToken();
    // You can also clear other session-related data here (e.g., user preferences)
};
