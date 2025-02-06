import { SEND_MESSAGE, RECEIVE_MESSAGE, SET_LOADING, SET_ERROR } from "../types";
import api from "../../services/api";

// Send a message to the chatbot and receive a response
export const sendMessage = (message) => async (dispatch) => {
    try {
        dispatch({ type: SET_LOADING, payload: true });

        const response = await api.post("/chatbot/send", { message });

        dispatch({ type: RECEIVE_MESSAGE, payload: response.data });

    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error.message });
    } finally {
        dispatch({ type: SET_LOADING, payload: false });
    }
};
