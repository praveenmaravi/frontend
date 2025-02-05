// selectors/settingsSelectors.js

// Selects the entire settings state
export const selectSettings = (state) => state.settings;

// Selects the theme setting from the state
export const selectTheme = (state) => state.settings.theme;

// Selects the language setting from the state
export const selectLanguage = (state) => state.settings.language;

// Selects the notification preferences from the state
export const selectNotificationPreferences = (state) => state.settings.notificationPreferences;

// Selects whether dark mode is enabled or not
export const selectIsDarkMode = (state) => state.settings.isDarkMode;

// Selects the current bot behavior setting
export const selectBotBehavior = (state) => state.settings.botBehavior;

// Selects the user-specific settings, such as profile-related preferences
export const selectUserSettings = (state) => state.settings.userSettings;

// Selects the timezone setting
export const selectTimezone = (state) => state.settings.timezone;

// Selects whether the settings are loading (useful for async operations)
export const selectIsSettingsLoading = (state) => state.settings.isLoading;

// Selects any error message related to settings (e.g., failed to load settings)
export const selectSettingsError = (state) => state.settings.error;
