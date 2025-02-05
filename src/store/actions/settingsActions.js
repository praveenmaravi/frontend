// actions/settingsActions.js

import { SET_THEME, SET_LANGUAGE, SET_NOTIFICATIONS, RESET_SETTINGS } from '../types/settingsTypes';

// Action to set the theme preference (e.g., light or dark)
export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

// Action to set the language preference (e.g., English, Spanish)
export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};

// Action to set the notifications preference (enabled or disabled)
export const setNotifications = (enabled) => {
  return {
    type: SET_NOTIFICATIONS,
    payload: enabled,
  };
};

// Action to reset settings to default values
export const resetSettings = () => {
  return {
    type: RESET_SETTINGS,
  };
};
