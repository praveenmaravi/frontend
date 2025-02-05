import apiClient from './apiClient'; // Import the base API client

// Define the automationService class
const automationService = {
  /**
   * Triggers a workflow for a specific automation task
   * @param {string} workflowId - The ID of the workflow to trigger
   * @param {Object} payload - The data to send to the workflow
   * @returns {Promise} - Promise resolving to the response data
   */
  triggerWorkflow: async (workflowId, payload) => {
    try {
      const response = await apiClient.post(`/automations/trigger/${workflowId}`, payload);
      return response.data;
    } catch (error) {
      // Handle error response
      throw new Error(`Error triggering workflow: ${error.message}`);
    }
  },

  /**
   * Fetches a list of available automations
   * @returns {Promise} - Promise resolving to the list of automations
   */
  getAutomationsList: async () => {
    try {
      const response = await apiClient.get('/automations/list');
      return response.data;
    } catch (error) {
      // Handle error response
      throw new Error(`Error fetching automations list: ${error.message}`);
    }
  },

  /**
   * Updates an existing automation configuration
   * @param {string} automationId - The ID of the automation to update
   * @param {Object} newConfig - The new configuration data for the automation
   * @returns {Promise} - Promise resolving to the updated automation data
   */
  updateAutomationConfig: async (automationId, newConfig) => {
    try {
      const response = await apiClient.put(`/automations/update/${automationId}`, newConfig);
      return response.data;
    } catch (error) {
      // Handle error response
      throw new Error(`Error updating automation config: ${error.message}`);
    }
  },

  /**
   * Deletes a specific automation
   * @param {string} automationId - The ID of the automation to delete
   * @returns {Promise} - Promise resolving to the deletion response
   */
  deleteAutomation: async (automationId) => {
    try {
      const response = await apiClient.delete(`/automations/delete/${automationId}`);
      return response.data;
    } catch (error) {
      // Handle error response
      throw new Error(`Error deleting automation: ${error.message}`);
    }
  },

  /**
   * Fetches the status of a specific automation
   * @param {string} automationId - The ID of the automation to check
   * @returns {Promise} - Promise resolving to the automation status
   */
  getAutomationStatus: async (automationId) => {
    try {
      const response = await apiClient.get(`/automations/status/${automationId}`);
      return response.data;
    } catch (error) {
      // Handle error response
      throw new Error(`Error fetching automation status: ${error.message}`);
    }
  },
};

export default automationService;
