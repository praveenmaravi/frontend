import axios from 'axios';

// API base URL (adjust to your backend API URL)
const API_URL = 'https://your-api-url.com/api/auth';

// Login user
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token); // Store the token in localStorage
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Signup user
export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { name, email, password });
    return response.data; // Returns success message or user data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Signup failed');
  }
};

// Forgot password (request password reset email)
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data; // Success message
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to request password reset');
  }
};

// Reset password (set new password)
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, { token, newPassword });
    return response.data; // Success message or confirmation
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Password reset failed');
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem('token'); // Remove the token from localStorage
};

// Get current user data (e.g., for profile page or user dashboard)
export const getCurrentUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass token in Authorization header
      },
    });
    return response.data; // Returns user data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user data');
  }
};
