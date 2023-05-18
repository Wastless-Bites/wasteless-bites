import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  fetchSingleUserThunk,
  updateUserImageThunk,
  updateUserDescriptionThunk,
  createReviewThunk,
} from "./userSlice";

const SingleUserProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [bioText, setBioText] = useState(user.description || "");
  const [showBioForm, setShowBioForm] = useState(false);
  const loggedInUserId = useSelector((state) => state.auth.me.id);
  const loggedInUserType = useSelector((state) => state.auth.me.userType);
  const [reviewText, setReviewText] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleUserThunk(id));
  }, [dispatch, id]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    dispatch(updateUserImageThunk({ id, imageFile: file }));
  };

  const handleBioChange = (event) => {
    setBioText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUserDescriptionThunk({ id, description: bioText }));
    setShowBioForm(false);
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    dispatch(
      createReviewThunk({
        userId: loggedInUserId,
        organizationId: id,
        comment: reviewText,
      })
    );
    setReviewText("");
    setShowReviewForm(false);
  };

  return (
    <>
      <Navbar />
      <div className="user-profile-container">
        <div className="user-profile-image-container">
          <img className="user-profile-image" src={user.imageUrl} />
          {loggedInUserId === Number(id) && (
            <input type="file" onChange={handleImageUpload} />
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

          <div className="user-profile-form">
            {user.description && (
              <div>
                <label>Bio:</label>
                <h5>{user.description}</h5>
              </div>
            )}

            {loggedInUserId === Number(id) && (
              <>
                <button onClick={() => setShowBioForm(!showBioForm)}>
                  {showBioForm ? "Cancel" : "Edit Bio"}
                </button>

                {showBioForm && (
                  <form
                    onSubmit={handleSubmit}
                    className="user-profile-bio-form"
                  >
                    <label>Update Bio:</label>
                    <textarea
                      onChange={handleBioChange}
                      placeholder="Write a fun fact!"
                      value={bioText}
                    ></textarea>
                    <button type="submit">Submit</button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="review-container">
        {loggedInUserType === "individual" &&
          user.userType === "organization" && (
            <div className="user-review-form">
              <button onClick={() => setShowReviewForm(!showReviewForm)}>
                {showReviewForm ? "Cancel" : "Leave a Review"}
              </button>

              {showReviewForm && (
                <form onSubmit={handleSubmitReview}>
                  <label>Review:</label>
                  <textarea
                    onChange={handleReviewChange}
                    placeholder="Write a review..."
                    value={reviewText}
                  ></textarea>
                  <button type="submit">Submit</button>
                </form>
              )}
            </div>
          )}
        <div className="user-reviews-container">
          {user.userType === "individual" && user.userReviews && (
            <>
              <h2>User Reviews:</h2>
              {user.userReviews.map((review) => (
                <div key={review.id}>
                  <p>{review.comment}</p>
                </div>
              ))}
            </>
          )}

          {user.userType === "organization" && user.organizationReviews && (
            <>
              <h2>Organization Reviews:</h2>
              {user.organizationReviews.map((review) => (
                <div key={review.id}>
                  <p>{review.comment}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleUserProfile;
