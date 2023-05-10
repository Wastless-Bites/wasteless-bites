import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="navbar-container">
      <Link to="/">
        <img
          className="logo"
          src="/assets/logo-no-background.png"
          alt="Wasteless Bites"
        />
      </Link>
      <div className="nav-right-container">
        {user ? (
          <>
            <Link to="/feed">Feed</Link>
            <Link to="/singlepost">Map</Link>
            <Link to="/profile">{user.username}</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
