// src/services/workflowService.js

import axios from 'axios';

// Define the base URL for the API
const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

// Fetch available workflows based on the user's selected industry
export const fetchWorkflowsByIndustry = async (industry) => {
  try {
    const response = await axios.get(`${API_URL}/workflows?industry=${industry}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching workflows:', error);
    throw new Error('Failed to fetch workflows');
  }
};

// Fetch workflow templates
export const fetchWorkflowTemplates = async () => {
  try {
    const response = await axios.get(`${API_URL}/workflows/templates`);
    return response.data;
  } catch (error) {
    console.error('Error fetching workflow templates:', error);
    throw new Error('Failed to fetch workflow templates');
  }
};

// Create a new workflow based on user preferences
export const createWorkflow = async (workflowData) => {
  try {
    const response = await axios.post(`${API_URL}/workflows`, workflowData);
    return response.data;
  } catch (error) {
    console.error('Error creating workflow:', error);
    throw new Error('Failed to create workflow');
  }
};

// Update an existing workflow
export const updateWorkflow = async (workflowId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/workflows/${workflowId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating workflow:', error);
    throw new Error('Failed to update workflow');
  }
};

// Delete a workflow
export const deleteWorkflow = async (workflowId) => {
  try {
    const response = await axios.delete(`${API_URL}/workflows/${workflowId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting workflow:', error);
    throw new Error('Failed to delete workflow');
  }
};
