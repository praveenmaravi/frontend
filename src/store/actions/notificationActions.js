import { FETCH_NOTIFICATIONS, MARK_AS_READ } from "../types";
import api from "../../services/api";

// Fetch all notifications
export const fetchNotifications = () => async (dispatch) => {
    try {
        const response = await api.get("/notifications");
        dispatch({ type: FETCH_NOTIFICATIONS, payload: response.data });
    } catch (error) {
        console.error("Error fetching notifications:", error);
    }
};

// Mark a notification as read
export const markAsRead = (notificationId) => async (dispatch) => {
    try {
        const response = await api.post(`/notifications/mark-as-read/${notificationId}`);
        dispatch({ type: MARK_AS_READ, payload: response.data });
    } catch (error) {
        console.error("Error marking notification as read:", error);
    }
};
