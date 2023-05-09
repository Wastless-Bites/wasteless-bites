import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../features/Landing/Landing";
import Contact from "../features/Contact/Contact.js";
import AboutUs from "../features/AboutUs/AboutUs.js";
import Login from "../features/Login/Login.js";
import SignUp from "../features/SignUp/SignUp.js";
import AfterSignUp from "../features/SignUp/AfterSignUp.js";
import UserProfile from "../features/UserProfile/UserProfile.js";
import Feed from "../features/Feed/Feed";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/createdaccount" element={<AfterSignUp />}></Route>
      <Route path="/profile" element={<UserProfile />}></Route>
      <Route path="/feed" element={<Feed />}></Route>
    </Routes>
  );
};

export default AppRoutes;
