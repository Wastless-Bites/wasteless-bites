import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { fetchSingleUserThunk } from "./userSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchSingleUserThunk(id));
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      <h1>
        Welcome <span>{user.username}</span>
      </h1>
      <>
        <p>
          <strong>Username: </strong> {user.username}
        </p>
        <p>
          <strong>Email: </strong> {user.email}
        </p>
        <p>
          <strong>Description:</strong> {user.description}
        </p>
        <p>
          <strong>Address: </strong> {user.address}
        </p>
        <p>
          <strong>Account Type: </strong> {user.userType}
        </p>
      </>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default UserProfile;
