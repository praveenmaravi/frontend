// selectors/integrationsSelectors.js

// Selector to get the list of third-party integrations
export const selectIntegrationsList = (state) => state.integrations.list;

// Selector to get the integration by its ID
export const selectIntegrationById = (state, integrationId) => {
  return state.integrations.list.find(integration => integration.id === integrationId);
};

// Selector to check if integrations are loaded
export const selectIntegrationsLoading = (state) => state.integrations.loading;

// Selector to get any errors related to integrations
export const selectIntegrationsError = (state) => state.integrations.error;

// Selector to check if an integration is connected
export const selectIsIntegrationConnected = (state, integrationId) => {
  const integration = state.integrations.list.find(integration => integration.id === integrationId);
  return integration ? integration.isConnected : false;
};

// Selector to get a list of connected integrations
export const selectConnectedIntegrations = (state) => {
  return state.integrations.list.filter(integration => integration.isConnected);
};
