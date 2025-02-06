// integrationsSelectors.js

// Selector to get all integrations from the state
export const getAllIntegrations = (state) => state.integrations.allIntegrations;

// Selector to get the status of a specific integration by its ID
export const getIntegrationStatus = (state, integrationId) => {
  return state.integrations.status[integrationId] || null;
};

// Selector to get the details of a specific integration by its ID
export const getIntegrationDetails = (state, integrationId) => {
  return state.integrations.details[integrationId] || {};
};

// Selector to get all active integrations
export const getActiveIntegrations = (state) => {
  return state.integrations.allIntegrations.filter(integration => integration.isActive);
};

// Selector to get integrations by category (e.g., "CRM", "Analytics")
export const getIntegrationsByCategory = (state, category) => {
  return state.integrations.allIntegrations.filter(integration => integration.category === category);
};
