import { FETCH_ANALYTICS_SUCCESS, FETCH_ANALYTICS_FAIL, SET_ANALYTICS_LOADING } from "../types";
import { analyticsService } from "../../services/api"; // Import analyticsService

// Fetch chatbot analytics data
export const fetchAnalytics = () => async (dispatch) => {
    try {
        dispatch({ type: SET_ANALYTICS_LOADING, payload: true });

        const data = await analyticsService.getAnalyticsData(); // Use the service method

        dispatch({ type: FETCH_ANALYTICS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_ANALYTICS_FAIL, payload: error.message });
    } finally {
        dispatch({ type: SET_ANALYTICS_LOADING, payload: false });
    }
};

// Fetch analytics for a specific chatbot instance
export const fetchChatbotAnalytics = (chatbotId) => async (dispatch) => {
    try {
        dispatch({ type: SET_ANALYTICS_LOADING, payload: true });

        const data = await analyticsService.getChatbotAnalytics(chatbotId); // Use the service method

        dispatch({ type: FETCH_ANALYTICS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_ANALYTICS_FAIL, payload: error.message });
    } finally {
        dispatch({ type: SET_ANALYTICS_LOADING, payload: false });
    }
};
