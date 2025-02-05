// reducers/settingsReducer.js

import {
    SET_THEME,
    SET_LANGUAGE,
    TOGGLE_NOTIFICATIONS,
    RESET_SETTINGS,
  } from '../types/settingsTypes';
  
  // Initial state for settings
  const initialState = {
    theme: 'light',            // Default theme (light or dark)
    language: 'en',            // Default language (e.g., 'en' for English)
    notificationsEnabled: true, // Default notifications setting
  };
  
  // Reducer function to handle different actions related to settings
  const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_THEME:
        return {
          ...state,
          theme: action.payload,  // Update the theme based on the action's payload
        };
  
      case SET_LANGUAGE:
        return {
          ...state,
          language: action.payload,  // Update the language based on the action's payload
        };
  
      case TOGGLE_NOTIFICATIONS:
        return {
          ...state,
          notificationsEnabled: !state.notificationsEnabled,  // Toggle the notifications setting
        };
  
      case RESET_SETTINGS:
        return {
          ...initialState,  // Reset all settings to their initial values
        };
  
      default:
        return state; // Return the current state if no action matches
    }
  };
  
  export default settingsReducer;
  