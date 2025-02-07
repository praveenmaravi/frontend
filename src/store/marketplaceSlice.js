
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API base URL (update based on backend)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Async Thunks for API Calls
export const fetchMarketplaceItems = createAsyncThunk(
  "marketplace/fetchItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/marketplace/items`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch items");
    }
  }
);

export const purchaseItem = createAsyncThunk(
  "marketplace/purchaseItem",
  async (itemId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/marketplace/purchase`, { itemId });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Purchase failed");
    }
  }
);

// Marketplace Slice
const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState: {
    items: [],
    loading: false,
    error: null,
    purchasedItems: [],
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Marketplace Items
      .addCase(fetchMarketplaceItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMarketplaceItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMarketplaceItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Purchase Item
      .addCase(purchaseItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(purchaseItem.fulfilled, (state, action) => {
        state.loading = false;
        state.purchasedItems.push(action.payload);
      })
      .addCase(purchaseItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToFavorites, removeFromFavorites } = marketplaceSlice.actions;
export default marketplaceSlice.reducer;
