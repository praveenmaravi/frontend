// api/integrationsService.js

import apiClient from './apiClient';  // Assuming apiClient is the base API client for HTTP requests

const integrationsService = {
  /**
   * Integrates with a CRM (e.g., Salesforce, HubSpot).
   * @param {Object} crmData - Data to be sent to the CRM.
   * @returns {Promise<Object>} - The response from the CRM API.
   */
  integrateWithCRM: async (crmData) => {
    try {
      const response = await apiClient.post('/crm/integrate', crmData);
      return response.data;
    } catch (error) {
      console.error('Error integrating with CRM:', error);
      throw new Error('Failed to integrate with CRM');
    }
  },

  /**
   * Integrates with a payment gateway (e.g., Stripe, PayPal).
   * @param {Object} paymentData - Payment details (e.g., amount, customer info).
   * @returns {Promise<Object>} - The response from the payment gateway API.
   */
  processPayment: async (paymentData) => {
    try {
      const response = await apiClient.post('/payments/process', paymentData);
      return response.data;
    } catch (error) {
      console.error('Error processing payment:', error);
      throw new Error('Failed to process payment');
    }
  },

  /**
   * Integrates with an email service (e.g., SendGrid).
   * @param {Object} emailData - Email content (e.g., recipient, subject, body).
   * @returns {Promise<Object>} - The response from the email service API.
   */
  sendEmail: async (emailData) => {
    try {
      const response = await apiClient.post('/email/send', emailData);
      return response.data;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  },

  /**
   * Retrieves data from an external analytics platform (e.g., Google Analytics).
   * @param {Object} analyticsParams - Parameters to query analytics data.
   * @returns {Promise<Object>} - The response from the analytics platform.
   */
  fetchAnalyticsData: async (analyticsParams) => {
    try {
      const response = await apiClient.get('/analytics/data', { params: analyticsParams });
      return response.data;
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      throw new Error('Failed to fetch analytics data');
    }
  },

  /**
   * Syncs data with an external system.
   * @param {Object} syncData - Data to be synced with the external system.
   * @returns {Promise<Object>} - The response from the external system API.
   */
  syncWithExternalSystem: async (syncData) => {
    try {
      const response = await apiClient.post('/sync/external', syncData);
      return response.data;
    } catch (error) {
      console.error('Error syncing with external system:', error);
      throw new Error('Failed to sync with external system');
    }
  },
};

export default integrationsService;
