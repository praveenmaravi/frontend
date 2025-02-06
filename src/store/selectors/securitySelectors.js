// frontend/src/store/selectors/securitySelectors.js

// Selector to get the current user's roles
export const getUserRoles = (state) => state.security.userRoles;

// Selector to get the security status (e.g., authenticated or not)
export const getSecurityStatus = (state) => state.security.status;

// Selector to check if the user is authenticated
export const isAuthenticated = (state) => state.security.isAuthenticated;

// Selector to get the user's permissions
export const getUserPermissions = (state) => state.security.permissions;

// Selector to check if the user has a specific permission
export const hasPermission = (state, permission) => 
  state.security.permissions.includes(permission);

// Selector to get the current user's security settings (e.g., MFA enabled)
export const getSecuritySettings = (state) => state.security.settings;

// Selector to check if multi-factor authentication (MFA) is enabled
export const isMFAEnabled = (state) => state.security.settings.isMFAEnabled;

