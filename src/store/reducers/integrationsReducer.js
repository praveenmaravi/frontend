// frontend/src/store/reducers/integrationsReducer.js

const initialState = {
  integrations: [],        // List of active integrations
  loading: false,           // Flag for loading integrations
  error: null,              // Error state for integration failures
};

const integrationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INTEGRATIONS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_INTEGRATIONS_SUCCESS':
      return {
        ...state,
        integrations: action.payload,
        loading: false,
      };
    case 'FETCH_INTEGRATIONS_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'ADD_INTEGRATION':
      return {
        ...state,
        integrations: [...state.integrations, action.payload],
      };
    case 'REMOVE_INTEGRATION':
      return {
        ...state,
        integrations: state.integrations.filter(
          (integration) => integration.id !== action.payload.id
        ),
      };
    case 'UPDATE_INTEGRATION':
      return {
        ...state,
        integrations: state.integrations.map((integration) =>
          integration.id === action.payload.id
            ? { ...integration, ...action.payload.data }
            : integration
        ),
      };
    default:
      return state;
  }
};

export default integrationsReducer;
