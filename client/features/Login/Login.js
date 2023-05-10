import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer";
import { authenticate } from "../auth/authSlice.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const password = e.target.password.value;
    await dispatch(authenticate({ username, password, method: "login" })).then(
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
        <p>Don't have an account?</p> <Link to="/signup">Sign up</Link>
      </form>
      <Footer />
    </>
  );
};

export default Login;
