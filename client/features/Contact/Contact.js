import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer.js";

const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <p>Please fill out the form below to contact us.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>

      <Footer />
    </>
  );
};

export default Contact;
