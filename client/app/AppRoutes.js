import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../features/Landing/Landing";
import Contact from "../features/Contact/Contact.js";
import AboutUs from "../features/AboutUs/AboutUs.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>
    </Routes>
  );
};

export default AppRoutes;
