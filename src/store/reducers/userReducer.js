// frontend/src/store/reducers/userReducer.js

const initialState = {
  user: null,              // Holds user data (name, email, etc.)
  isAuthenticated: false,  // Authentication status
  loading: false,          // Flag for loading state
  error: null,             // Error handling for auth failures
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'USER_LOGIN_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
