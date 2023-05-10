import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";
import { authenticate } from "../auth/authSlice.js";
import { useDispatch } from "react-redux";
import Footer from "../Footer/Footer";

const Login = () => {
  const dispatch = useDispatch();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const password = e.target.password.value;
    dispatch(authenticate({ username, password, method: "login" })).then(
      (response) => {
        if (response && response.success) {
          setLoginSuccess(true);
        }
      }
    );
  };

  useEffect(() => {
    if (loginSuccess) {
      window.location.href = "/profile";
    }
  }, [loginSuccess]);

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
          type="button"
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
