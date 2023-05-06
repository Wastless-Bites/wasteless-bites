import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="somelogo" alt="Wasteless Bites" />
      </div>
      <div className="home">
        <a href="/">Home</a>
      </div>
      <div className="login">
        <a href="/login">Login</a>
      </div>
      <div className="signup">
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
