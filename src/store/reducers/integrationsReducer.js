// reducers/integrationsReducer.js

import { 
    ADD_INTEGRATION,
    REMOVE_INTEGRATION,
    UPDATE_INTEGRATION_STATUS,
    SET_INTEGRATIONS_LOADING,
    SET_INTEGRATIONS_ERROR
  } from '../types/integrationsTypes';
  
  // Initial state for integrations
  const initialState = {
    integrations: [],          // Array to hold integrations (e.g., CRM, payment gateways)
    loading: false,            // Loading state for API calls
    error: null,               // Error state for failed API calls
  };
  
  // Reducer function to handle actions
  const integrationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_INTEGRATION:
        return {
          ...state,
          integrations: [...state.integrations, action.payload], // Add new integration
        };
      case REMOVE_INTEGRATION:
        return {
          ...state,
          integrations: state.integrations.filter(integration => integration.id !== action.payload.id), // Remove integration by ID
        };
      case UPDATE_INTEGRATION_STATUS:
        return {
          ...state,
          integrations: state.integrations.map(integration =>
            integration.id === action.payload.id
              ? { ...integration, status: action.payload.status } // Update status of integration
              : integration
          ),
        };
      case SET_INTEGRATIONS_LOADING:
        return {
          ...state,
          loading: action.payload,  // Set loading state (true/false)
        };
      case SET_INTEGRATIONS_ERROR:
        return {
          ...state,
          error: action.payload,    // Set error message when an API call fails
        };
      default:
        return state;
    }
  };
  
  export default integrationsReducer;
  