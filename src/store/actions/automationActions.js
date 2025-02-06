import { FETCH_AUTOMATIONS, TRIGGER_AUTOMATION, SET_AUTOMATION_ERROR } from "../types";
import api from "../../services/api";

/**
 * Fetch all automation workflows
 */
export const fetchAutomations = () => async (dispatch) => {
    try {
        const response = await api.get("/automation");
        dispatch({ type: FETCH_AUTOMATIONS, payload: response.data });
    } catch (error) {
        dispatch({ type: SET_AUTOMATION_ERROR, payload: error.message });
    }
};

/**
 * Trigger an automation workflow by ID
 * @param {string} automationId - The ID of the automation to trigger
 */
export const triggerAutomation = (automationId) => async (dispatch) => {
    try {
        const response = await api.post(`/automation/trigger/${automationId}`);
        dispatch({ type: TRIGGER_AUTOMATION, payload: response.data });
    } catch (error) {
        dispatch({ type: SET_AUTOMATION_ERROR, payload: error.message });
    }
};

