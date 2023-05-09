import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Navbar />
      <h1>Hello</h1>
      {user ? (
        <>
          <p>
            <strong>Username: </strong> {user.username}
          </p>
          <p>
            <strong>Email: </strong> {user.email}
          </p>
          <p>
            <strong>Bio:</strong> {user.bio}
          </p>
          <p>
            <strong>Address: </strong> {user.address}
          </p>
          <p>
            <strong>Account Type: </strong> {user.userType}
          </p>
        </>
      ) : (
        <p>No user information available.</p>
      )}
      <Footer />
    </>
  );
};

export default UserProfile;
