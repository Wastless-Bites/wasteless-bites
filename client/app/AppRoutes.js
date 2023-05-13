import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Landing from "../features/Landing/Landing";
import Contact from "../features/Contact/Contact.js";
import AboutUs from "../features/AboutUs/AboutUs.js";
import Login from "../features/Login/Login.js";
import SignUp from "../features/SignUp/SignUp.js";
import UserProfile from "../features/UserProfile/UserProfile.js";
import Feed from "../features/Feed/Feed";
import LearnIndividual from "../features/Home/LearnIndividual";
import LearnOrg from "../features/Home/LearnOrg";
import Map from "../features/Map/Map";
import { me } from "./store";
import MapSinglePost from "../features/MapSinglePost/MapSinglePost";

const AppRoutes = () => {
  const user = useSelector((state) => !!state.auth.me);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {user ? (
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/learnindividual" element={<LearnIndividual />}></Route>
          <Route path="/learnorg" element={<LearnOrg />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/map/:id" element={<MapSinglePost />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/learnindividual" element={<LearnIndividual />}></Route>
          <Route path="/learnorg" element={<LearnOrg />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/map/:id" element={<MapSinglePost />}></Route>
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
