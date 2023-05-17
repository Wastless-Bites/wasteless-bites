import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth/authSlice.js";

const Navbar = () => {
  const user = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/");
  };

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
            <Link to="/map">Map</Link>
            <Link to={`/profile/${user}`}>My Page</Link>
            <button
              className="logout-btn"
              type="button"
              onClick={logoutAndRedirectHome}
            >
              Logout
            </button>
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
