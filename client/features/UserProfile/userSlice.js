import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  username: "",
  email: "",
  description: "",
  address: "",
  userType: "",
};

export const fetchSingleUserThunk = createAsyncThunk(
  "singleuser",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/profile/${id}`);
      return data;
    } catch (err) {
      next(err);
    }
  }
);

const SingleUserSlice = createSlice({
  name: "singleuser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleUserThunk.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.description = action.payload.description;
      state.address = action.payload.address;
      state.userType = action.payload.userType;
    });
  },
});

export default SingleUserSlice.reducer;
