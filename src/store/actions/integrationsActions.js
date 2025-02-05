// actions/integrationsActions.js

import { INTEGRATIONS_ADD, INTEGRATIONS_REMOVE, INTEGRATIONS_UPDATE, INTEGRATIONS_FETCH } from '../types/integrationsTypes';

// Action to add a new third-party integration (e.g., CRM, payment gateway)
export const addIntegration = (integrationData) => {
  return {
    type: INTEGRATIONS_ADD,
    payload: integrationData,
  };
};

// Action to remove an existing third-party integration
export const removeIntegration = (integrationId) => {
  return {
    type: INTEGRATIONS_REMOVE,
    payload: integrationId,
  };
};

// Action to update an existing third-party integration
export const updateIntegration = (integrationId, updatedData) => {
  return {
    type: INTEGRATIONS_UPDATE,
    payload: { integrationId, updatedData },
  };
};

// Action to fetch the list of all integrations (e.g., from an API or database)
export const fetchIntegrations = () => {
  return async (dispatch) => {
    try {
      // Simulate an API call to fetch integrations (you can replace with actual API call)
      const response = await fetch('/api/integrations');
      const integrations = await response.json();
      
      dispatch({
        type: INTEGRATIONS_FETCH,
        payload: integrations,
      });
    } catch (error) {
      console.error("Error fetching integrations:", error);
    }
  };
};
