import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAds = createAsyncThunk("ads/fetch", async () => {
  const { data } = await axios.get("/api/ads");
  return data;
});

const adsSlice = createSlice({
  name: "ads",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchAds.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default adsSlice.reducer;
