// src/services/onboardingService.js

import axios from 'axios';

// Base URL for API calls, can be adjusted depending on the environment
const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

// Function to save user details during onboarding
export const saveUserDetails = async (userDetails) => {
  try {
    const response = await axios.post(`${BASE_URL}/onboarding/user-details`, userDetails);
    return response.data; // returns the response data from the API
  } catch (error) {
    console.error('Error saving user details:', error);
    throw new Error('Failed to save user details');
  }
};

// Function to save user preferences during onboarding
export const saveUserPreferences = async (preferences) => {
  try {
    const response = await axios.post(`${BASE_URL}/onboarding/user-preferences`, preferences);
    return response.data; // returns the response data from the API
  } catch (error) {
    console.error('Error saving user preferences:', error);
    throw new Error('Failed to save user preferences');
  }
};

// Function to fetch available industries for selection during onboarding
export const fetchIndustries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/onboarding/industries`);
    return response.data; // returns the industries list
  } catch (error) {
    console.error('Error fetching industries:', error);
    throw new Error('Failed to fetch industries');
  }
};

// Function to fetch a workflow template based on the selected industry
export const fetchWorkflowTemplate = async (industry) => {
  try {
    const response = await axios.get(`${BASE_URL}/onboarding/workflows/${industry}`);
    return response.data; // returns the relevant workflow template
  } catch (error) {
    console.error('Error fetching workflow template:', error);
    throw new Error('Failed to fetch workflow template');
  }
};

// Function to complete the onboarding process
export const completeOnboarding = async (userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/onboarding/complete`, { userId });
    return response.data; // returns the result of completing onboarding
  } catch (error) {
    console.error('Error completing onboarding:', error);
    throw new Error('Failed to complete onboarding');
  }
};
