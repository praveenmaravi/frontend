import { SET_USER_ROLE, UPDATE_SECURITY_SETTINGS } from "../types";
import api from "../../services/api";

// Set the user role (e.g., Admin, User, etc.)
export const setUserRole = (role) => (dispatch) => {
    try {
        dispatch({ type: SET_USER_ROLE, payload: role });
    } catch (error) {
        console.error("Error setting user role:", error);
    }
};

// Update security settings like two-factor authentication, password policies, etc.
export const updateSecuritySettings = (settings) => async (dispatch) => {
    try {
        // Call an API to update the security settings on the server
        const response = await api.post("/security/update", settings);

        // Dispatch action to update the security settings in the store
        dispatch({ type: UPDATE_SECURITY_SETTINGS, payload: response.data });
    } catch (error) {
        console.error("Error updating security settings:", error);
    }
};
