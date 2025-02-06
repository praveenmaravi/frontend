import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_USER, REGISTER_SUCCESS, REGISTER_FAIL } from "../types";
import api from "../../services/api";

// Login User
export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await api.post("/auth/login", credentials);

        // Store token in localStorage or sessionStorage
        localStorage.setItem("token", response.data.token);

        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response?.data?.message || "Login failed" });
    }
};

// Register User
export const registerUser = (userData) => async (dispatch) => {
    try {
        const response = await api.post("/auth/register", userData);
        
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response?.data?.message || "Registration failed" });
    }
};

// Logout User
export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("token"); // Clear stored token
    dispatch({ type: LOGOUT });
};

// Fetch User Profile
export const fetchUserProfile = () => async (dispatch) => {
    try {
        const response = await api.get("/auth/profile");
        dispatch({ type: SET_USER, payload: response.data });
    } catch (error) {
        console.error("Error fetching user profile:", error);
    }
};
