import React from "react";
import Navbar from "../Navbar/Navbar.js";
import { authenticate } from "../auth/authSlice.js";
import { useDispatch } from "react-redux";
import Footer from "../Footer/Footer";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const password = e.target.password.value;
    await dispatch(authenticate({ username, password, method: "login" }));
  };

  return (
    <>
      <Navbar />
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>

        <p>New here? Sign up here!</p>
        <button
          type="submit"
          onClick={() => (window.location.href = "/signup")}
        >
          Sign Up
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Login;
