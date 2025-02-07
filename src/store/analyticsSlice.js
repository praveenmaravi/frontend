// frontend/src/store/analyticsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAnalyticsData } from '../services/api/analyticsService';

const initialState = {
  data: null,                 // Stores the analytics data
  loading: false,             // Tracks the loading state
  error: null,                // Tracks errors if any
};

// Async thunk to fetch analytics data from the backend
export const getAnalyticsData = createAsyncThunk(
  'analytics/fetchAnalyticsData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAnalyticsData(); // Call service to fetch analytics data
      return response.data;  // Assuming the API returns the data in the `data` field
    } catch (error) {
      return rejectWithValue(error.message); // Return error message if the request fails
    }
  }
);

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    resetAnalytics: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnalyticsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAnalyticsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAnalyticsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAnalytics } = analyticsSlice.actions;

export default analyticsSlice.reducer;
