import { FETCH_AUTOMATIONS, TRIGGER_AUTOMATION, SET_AUTOMATION_ERROR } from "../types";
import { automationService } from "../../services/api"; // Fix: import automationService

/**
 * Fetch all automation workflows
 */
export const fetchAutomations = () => async (dispatch) => {
    try {
        const response = await automationService.getAutomationTasks(); // Use the service method
        dispatch({ type: FETCH_AUTOMATIONS, payload: response });
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
        const response = await automationService.triggerAutomationTask(automationId); // Use the service method
        dispatch({ type: TRIGGER_AUTOMATION, payload: response });
    } catch (error) {
        dispatch({ type: SET_AUTOMATION_ERROR, payload: error.message });
    }
};
