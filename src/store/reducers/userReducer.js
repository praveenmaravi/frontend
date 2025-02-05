// reducers/userReducer.js

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    UPDATE_PROFILE,
  } from '../types/userTypes';
  
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          loading: false,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          loading: false,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      case UPDATE_PROFILE:
        return {
          ...state,
          user: { ...state.user, ...action.payload },
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  