import {
  createSlice,
  createAsyncThunk,
  createNextState,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAds = createAsyncThunk("ads/fetch", async () => {
  const { data } = await axios.get("/api/ads");
  return data;
});

export const createAd = createAsyncThunk("ads/create", async (adData) => {
  const { data } = await axios.post("/api/ads", adData);
  return data;
});

export const deleteAd = createAsyncThunk(
  "ads/deleteAd",
  async (adId, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/ads/${adId}`);
      return adId;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const adsSlice = createSlice({
  name: "ads",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchAds.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createAd.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteAd.fulfilled, (state, action) => {
      return state.filter((ad) => ad.id !== action.payload);
    });
  },
});

export default adsSlice.reducer;
