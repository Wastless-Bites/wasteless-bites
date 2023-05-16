import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import adsReducer from "../features/Feed/feedSlice";
import userReducer from "../features/UserProfile/userSlice";

const store = configureStore({
  reducer: { auth: authReducer, ads: adsReducer, user: userReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
