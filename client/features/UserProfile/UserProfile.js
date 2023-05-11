import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.me.id);
  console.log(user);

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
      </>
      <Footer />
    </>
  );
};

export default UserProfile;
