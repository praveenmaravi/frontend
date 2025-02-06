import { FETCH_ANALYTICS_SUCCESS, FETCH_ANALYTICS_FAIL, SET_ANALYTICS_LOADING } from "../types";
import api from "../../services/api";

// Fetch chatbot analytics data
export const fetchAnalytics = () => async (dispatch) => {
    try {
        dispatch({ type: SET_ANALYTICS_LOADING, payload: true });

        const response = await api.get("/analytics");

        dispatch({ type: FETCH_ANALYTICS_SUCCESS, payload: response.data });
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

        const response = await api.get(`/analytics/chatbot/${chatbotId}`);

        dispatch({ type: FETCH_ANALYTICS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_ANALYTICS_FAIL, payload: error.message });
    } finally {
        dispatch({ type: SET_ANALYTICS_LOADING, payload: false });
    }
};
