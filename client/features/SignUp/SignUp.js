import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import { useDispatch } from "react-redux";
import { authenticate } from "../auth/authSlice.js";
import Footer from "../Footer/Footer";
import { OpenStreetMapProvider } from "leaflet-geosearch";

const provider = new OpenStreetMapProvider();

const SignUp = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
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

    window.location.href = "/feed";
  };

  const handleAddressChange = async (e) => {
    setAddress(e.target.value);
    const results = await provider.search({ query: e.target.value });
    setSuggestions(results);
    console.log(results);
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
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleAddressChange}
          required
        />
        {suggestions.map((suggestion) => (
          <div key={suggestion.y}>{suggestion.label}</div>
        ))}

        <label htmlFor="userType">Account Type:</label>
        <select type="userType" name="userType" required>
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
