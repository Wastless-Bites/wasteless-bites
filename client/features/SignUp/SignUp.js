import React from "react";
import Navbar from "../Navbar/Navbar.js";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="address">Address:</label>
        <input type="address" id="address" name="address" required />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
