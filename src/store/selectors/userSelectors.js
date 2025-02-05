// selectors/userSelectors.js

// Selector to get the current user's data
export const selectUserData = (state) => state.user.data;

// Selector to get the authentication status
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

// Selector to get the user's authentication error
export const selectAuthError = (state) => state.user.authError;

// Selector to check if the user is loading (for example, during login)
export const selectIsLoading = (state) => state.user.isLoading;

// Selector to get the user's profile info (assuming a profile section in user data)
export const selectUserProfile = (state) => state.user.data.profile;

// Selector to get the user's role (e.g., admin, user)
export const selectUserRole = (state) => state.user.data.role;

// Selector to get whether the user has agreed to terms and conditions
export const selectHasAgreedToTerms = (state) => state.user.data.hasAgreedToTerms;

// Selector to get the user's authentication token (if stored)
export const selectAuthToken = (state) => state.user.token;

