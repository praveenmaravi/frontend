// actions/userActions.js

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types/userTypes';
import { apiLogin, apiLogout, fetchUserProfile } from '../../api/userApi'; // Example API functions

// Action to initiate login request
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

// Action for successful login
export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

// Action for failed login attempt
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Action to log out the user
export const logout = () => ({
  type: LOGOUT,
});

// Thunk action for user login
export const loginUser = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await apiLogin(username, password); // API call to log in the user
    dispatch(loginSuccess(response.data)); // Dispatch success with user data
  } catch (error) {
    dispatch(loginFailure(error.message)); // Dispatch failure if there's an error
  }
};

// Thunk action for fetching user profile
export const fetchUser = () => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await fetchUserProfile(); // API call to get the user's profile
    dispatch(loginSuccess(response.data)); // Dispatch success with profile data
  } catch (error) {
    dispatch(loginFailure(error.message)); // Dispatch failure on error
  }
};

// Thunk action for user logout
export const logoutUser = () => async (dispatch) => {
  try {
    await apiLogout(); // API call to log out the user
    dispatch(logout()); // Dispatch logout action
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
