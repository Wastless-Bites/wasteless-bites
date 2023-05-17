import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { fetchSingleUserThunk } from "./userSlice";

const SingleUserProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [image, setImage] = useState(null);
  const [bioText, setBioText] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleUserThunk(id));
    const storedBioText = localStorage.getItem("bioText");
    if (storedBioText) {
      setBioText(storedBioText);
      setSubmit(true);
    }
  }, [dispatch, id]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleBioChange = (event) => {
    setBioText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("bioText", bioText);
    setSubmit(true);
  };

  return (
    <>
      <Navbar />
      <div className="user-profile-container">
        <div className="user-profile-image-container">
          {image ? (
            <>
              <img className="user-profile-image" src={image} />
            </>
          ) : (
            <>
              <img className="user-profile-image" src={user.imageUrl} />
              <input type="file" onChange={handleImageUpload} />
            </>
          )}
        </div>

        <div className="user-profile-text-container">
          <h1>{user.username}</h1>
          <p>
            <strong>Email: </strong> {user.email}
          </p>
          <p>
            <strong>Address: </strong> {user.address}
          </p>
          <p>
            <strong>Account Type: </strong> {user.userType}
          </p>

          {submit ? (
            <div className="user-profile-form">
              <form onSubmit={handleSubmit} className="user-profile-bio-form">
                <label>Bio:</label>
                <h5>{bioText}</h5>
              </form>
            </div>
          ) : (
            <div className="user-profile-form">
              <form onSubmit={handleSubmit} className="user-profile-bio-form">
                <label>Bio:</label>
                <textarea
                  onChange={handleBioChange}
                  placeholder="Write a fun fact!"
                ></textarea>
                <button onClick={handleSubmit}>Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default SingleUserProfile;
