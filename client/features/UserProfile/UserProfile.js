import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { logout } from "../auth/authSlice";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <>
      <Navbar />
      <h1>
        Welcome <span>{user?.username}</span>
      </h1>
      <>
        <p>
          <strong>Username: </strong> {user?.username}
        </p>
        <p>
          <strong>Email: </strong> {user?.email}
        </p>
        <p>
          <strong>Bio:</strong> {user?.bio}
        </p>
        <p>
          <strong>Address: </strong> {user?.address}
        </p>
        <p>
          <strong>Account Type: </strong> {user?.userType}
        </p>
        <button onClick={handleLogout}>Logout</button>
      </>
      <Footer />
    </>
  );
};

export default UserProfile;
