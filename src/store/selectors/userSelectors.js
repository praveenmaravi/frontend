// frontend/src/store/selectors/userSelectors.js

// Selector to get the user's profile data
export const getUserProfile = (state) => state.user.profile;

// Selector to get the user's authentication status
export const getAuthStatus = (state) => state.user.isAuthenticated;

// Selector to get the user's role (admin, user, etc.)
export const getUserRole = (state) => state.user.role;

// Selector to check if the user is currently logged in
export const isUserLoggedIn = (state) => !!state.user.isAuthenticated;

// Selector to get the user's preferences
export const getUserPreferences = (state) => state.user.preferences;

// Selector to get the user's notifications settings
export const getUserNotificationSettings = (state) => state.user.notifications;

// Selector to get the user's language preference
export const getLanguagePreference = (state) => state.user.languagePreference;
