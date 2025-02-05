// analyticsTypes.js

// Action types for analytics tracking
export const TRACK_PERFORMANCE = 'analytics/TRACK_PERFORMANCE';
export const TRACK_USER_ENGAGEMENT = 'analytics/TRACK_USER_ENGAGEMENT';
export const TRACK_BOT_METRICS = 'analytics/TRACK_BOT_METRICS';
export const FETCH_ANALYTICS_DATA = 'analytics/FETCH_ANALYTICS_DATA';
export const SET_ANALYTICS_DATA = 'analytics/SET_ANALYTICS_DATA';
export const FETCH_ANALYTICS_ERROR = 'analytics/FETCH_ANALYTICS_ERROR';

// Example usage in an action creator file:
// dispatch({ type: TRACK_PERFORMANCE, payload: performanceData });
