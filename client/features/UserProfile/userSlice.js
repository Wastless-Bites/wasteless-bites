import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fromPairs } from "lodash";

const initialState = {
  username: "",
  email: "",
  description: "",
  address: "",
  userType: "",
  imageUrl: "",
};

export const fetchSingleUserThunk = createAsyncThunk(
  "singleuser",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/profile/${id}`);
      console.log(data);
      return data;
    } catch (err) {
      next(err);
    }
  }
);

export const updateUserImageThunk = createAsyncThunk(
  "singleuser/updateImage",
  async ({ id, imageFile }) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const { data } = await axios.put(`/api/profile/${id}/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  }
);

export const updateUserDescriptionThunk = createAsyncThunk(
  "singleuser/updateDescription",
  async ({ id, description }) => {
    const { data } = await axios.put(`/api/profile/${id}/description`, {
      description,
    });
    return data;
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
      state.imageUrl = action.payload.imageUrl;
    });
    builder.addCase(updateUserImageThunk.fulfilled, (state, action) => {
      state.imageUrl = action.payload.imageUrl;
    });
    builder.addCase(updateUserDescriptionThunk.fulfilled, (state, action) => {
      state.description = action.payload.description;
    });
  },
});

export default SingleUserSlice.reducer;
