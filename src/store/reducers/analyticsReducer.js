// frontend/src/store/reducers/analyticsReducer.js

const initialState = {
  performance: null,       // Performance-related data (e.g., response times, bot efficiency)
  engagement: null,        // User engagement metrics (e.g., messages sent, response rates)
  feedback: null,          // Feedback data (e.g., ratings, sentiment analysis)
  loading: false,          // Flag to indicate loading state
  error: null,             // Error state for handling API failures
};

const analyticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ANALYTICS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_ANALYTICS_SUCCESS':
      return {
        ...state,
        performance: action.payload.performance,
        engagement: action.payload.engagement,
        feedback: action.payload.feedback,
        loading: false,
      };
    case 'FETCH_ANALYTICS_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default analyticsReducer;
