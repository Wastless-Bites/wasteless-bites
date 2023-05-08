import React from "react";
import Navbar from "../Navbar/Navbar.js";
import { useDispatch } from "react-redux";
import { authenticate } from "../auth/authSlice.js";

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const username = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const userType = e.target.userType.value;

    await dispatch(
      authenticate({
        username,
        password,
        email,
        address,
        userType,
        method: "signup",
      })
    );
  };

  return (
    <>
      <Navbar />
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="email">E-Mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="address">Address:</label>
        <input type="address" id="address" name="address" required />

        <label htmlFor="userType">Account Type:</label>
        <select id="userType" name="userType">
          <option value="individual">Individual</option>
          <option value="organization">Organization</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
