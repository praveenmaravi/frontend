// reducers/analyticsReducer.js

import {
    SET_ANALYTICS_DATA,
    UPDATE_USER_METRICS,
    CLEAR_ANALYTICS_DATA,
  } from '../types/analyticsTypes';
  
  const initialState = {
    userMetrics: {},
    performanceData: {},
    engagementStats: {},
  };
  
  const analyticsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ANALYTICS_DATA:
        return {
          ...state,
          performanceData: action.payload.performanceData,
          engagementStats: action.payload.engagementStats,
        };
  
      case UPDATE_USER_METRICS:
        return {
          ...state,
          userMetrics: {
            ...state.userMetrics,
            ...action.payload,
          },
        };
  
      case CLEAR_ANALYTICS_DATA:
        return {
          ...state,
          performanceData: {},
          engagementStats: {},
          userMetrics: {},
        };
  
      default:
        return state;
    }
  };
  
  export default analyticsReducer;
  