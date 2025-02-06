// frontend/src/store/selectors/settingsSelectors.js

// Selector to get theme settings from state
export const getThemeSettings = (state) => state.settings.theme;

// Selector to get notification settings from state
export const getNotificationSettings = (state) => state.settings.notifications;

// Selector to get language preference from state
export const getLanguagePreference = (state) => state.settings.language;

// Selector to check if dark mode is enabled
export const isDarkModeEnabled = (state) => state.settings.theme === 'dark';

// Selector to get all user preferences
export const getAllUserPreferences = (state) => state.settings.preferences;

// Selector to get the current notification status (enabled or disabled)
export const getNotificationStatus = (state) => state.settings.notifications.enabled;
