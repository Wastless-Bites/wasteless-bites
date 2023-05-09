import React from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";

function AfterSignUp() {
  return (
    <div>
      <Navbar />
      <div>
        <h2>Thank you for signing up!</h2>
        <p>Click here to login.</p>
        <button type="submit" onClick={() => (window.location.href = "/login")}>
          Login
        </button>
        <Footer />
      </div>
    </div>
  );
}

export default AfterSignUp;
