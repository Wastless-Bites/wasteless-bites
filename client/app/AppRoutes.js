import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../features/Home/Home";
import Contact from "../features/Contact/Contact.js";
import AboutUs from "../features/AboutUs/AboutUs.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/aboutus" element={<Contact />}></Route>
    </Routes>
  );
};

export default AppRoutes;
