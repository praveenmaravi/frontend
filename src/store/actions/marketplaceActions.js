import { FETCH_MARKETPLACE_ITEMS, INSTALL_INTEGRATION, REMOVE_INTEGRATION } from "../types";
import api from "../../services/api";

// Fetch available marketplace items
export const fetchMarketplaceItems = () => async (dispatch) => {
    try {
        const response = await api.get("/marketplace");
        dispatch({ type: FETCH_MARKETPLACE_ITEMS, payload: response.data });
    } catch (error) {
        console.error("Error fetching marketplace items:", error);
    }
};

// Install a new integration from the marketplace
export const installIntegration = (integrationId) => async (dispatch) => {
    try {
        const response = await api.post(`/marketplace/install/${integrationId}`);
        dispatch({ type: INSTALL_INTEGRATION, payload: response.data });
    } catch (error) {
        console.error(`Error installing integration (ID: ${integrationId}):`, error);
    }
};

// Remove an installed integration
export const removeIntegration = (integrationId) => async (dispatch) => {
    try {
        await api.delete(`/marketplace/remove/${integrationId}`);
        dispatch({ type: REMOVE_INTEGRATION, payload: integrationId });
    } catch (error) {
        console.error(`Error removing integration (ID: ${integrationId}):`, error);
    }
};
