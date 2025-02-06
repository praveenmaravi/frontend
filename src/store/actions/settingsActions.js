import { UPDATE_THEME, UPDATE_NOTIFICATIONS } from "../types";

// Update the theme (light/dark mode)
export const updateTheme = (theme) => (dispatch) => {
    dispatch({ type: UPDATE_THEME, payload: theme });
};

// Update the notification settings (enable/disable specific alerts)
export const updateNotifications = (settings) => (dispatch) => {
    dispatch({ type: UPDATE_NOTIFICATIONS, payload: settings });
};
