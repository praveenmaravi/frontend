// frontend/src/store/reducers/securityReducer.js

const initialState = {
  roles: [],                // List of user roles (admin, user, etc.)
  permissions: [],          // User permissions for specific actions
};

const securityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ROLES':
      return {
        ...state,
        roles: action.payload,
      };
    case 'UPDATE_PERMISSIONS':
      return {
        ...state,
        permissions: action.payload,
      };
    default:
      return state;
  }
};

export default securityReducer;
