import React from "react";
import Navbar from "../Navbar/Navbar.js";
import { useDispatch } from "react-redux";
import { authenticate } from "../auth/authSlice.js";
import Footer from "../Footer/Footer";

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
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

    // Navigate to /createdaccount after form is submitted
    window.location.href = "/createdaccount";
  };

  return (
    <>
      <Navbar />
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" required />

        <label htmlFor="email">E-Mail:</label>
        <input type="email" name="email" required />

        <label htmlFor="address">Address:</label>
        <input type="address" name="address" required />

        <label htmlFor="userType">Account Type:</label>
        <select name="userType" required>
          <option value="">Select an option</option>
          <option value="individual">Individual</option>
          <option value="organization">Organization</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>
      <Footer />
    </>
  );
};

export default SignUp;
