import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="somelogo" alt="Wasteless Bites" />
      </div>
      <div className="login">
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
