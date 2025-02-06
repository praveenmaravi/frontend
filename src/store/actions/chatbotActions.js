import { SEND_MESSAGE, RECEIVE_MESSAGE, SET_LOADING, SET_ERROR } from "../types";
import { chatbotService } from "../../services/api"; // Updated import

// Send a message to the chatbot and receive a response
export const sendMessage = (message) => async (dispatch) => {
    try {
        dispatch({ type: SET_LOADING, payload: true });

        const response = await chatbotService.sendMessage(message); // Use the chatbotService here

        dispatch({ type: RECEIVE_MESSAGE, payload: response });

    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error.message });
    } finally {
        dispatch({ type: SET_LOADING, payload: false });
    }
};
