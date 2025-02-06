// frontend/src/store/reducers/settingsReducer.js

const initialState = {
  theme: 'light',           // Theme preferences (light/dark)
  notifications: true,      // Notification preferences (enabled/disabled)
  language: 'en',           // Language preference (default: English)
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'UPDATE_NOTIFICATIONS':
      return {
        ...state,
        notifications: action.payload,
      };
    case 'UPDATE_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
