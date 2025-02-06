import { FETCH_INTEGRATIONS, CONNECT_INTEGRATION } from "../types";
import api from "../../services/api";

// Fetch a list of available third-party integrations
export const fetchIntegrations = () => async (dispatch) => {
    try {
        const response = await api.get("/integrations");
        dispatch({ type: FETCH_INTEGRATIONS, payload: response.data });
    } catch (error) {
        console.error("Error fetching integrations:", error);
    }
};

// Connect a third-party integration (e.g., Zapier, Slack, CRM systems)
export const connectIntegration = (integrationId) => async (dispatch) => {
    try {
        const response = await api.post(`/integrations/connect/${integrationId}`);
        dispatch({ type: CONNECT_INTEGRATION, payload: response.data });
    } catch (error) {
        console.error("Error connecting integration:", error);
    }
};
