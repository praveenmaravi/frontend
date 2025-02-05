import { ANALYTICS_TRACK_EVENT, ANALYTICS_SET_SESSION } from '../types/analyticsTypes';

// Action to track an analytics event (e.g., user interaction, performance metrics)
export const trackEvent = (eventName, eventData) => {
  return {
    type: ANALYTICS_TRACK_EVENT,
    payload: {
      eventName,
      eventData,
    },
  };
};

// Action to set session data (e.g., user session information, session start time)
export const setSession = (sessionData) => {
  return {
    type: ANALYTICS_SET_SESSION,
    payload: sessionData,
  };
};

// Example of an asynchronous action (using Redux Thunk for async operations)
export const trackPageView = (pageName) => {
  return (dispatch) => {
    // Simulating an API call to track a page view
    setTimeout(() => {
      dispatch(trackEvent('page_view', { pageName }));
    }, 500); // simulate delay (e.g., network request)
  };
};
