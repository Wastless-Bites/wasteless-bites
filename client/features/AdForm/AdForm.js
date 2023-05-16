import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAd } from "../Feed/feedSlice";
import { fetchAds } from "../Feed/feedSlice";

const AdForm = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    availableFrom: "",
    availableUntil: "",
    imageUrl: "",
    organizationId: userId,
  });

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      organizationId: userId,
    }));
  }, [userId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createAd(formData));

    dispatch(fetchAds());

    setFormData({
      title: "",
      description: "",
      location: "",
      availableFrom: "",
      availableUntil: "",
      imageUrl: "",
      organizationId: userId,
    });
  };

  return (
    <>
      <div className="ad-form-container">
        <form className="ad-form" onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </label>
          <label>
            Available From:
            <input
              type="datetime-local"
              name="availableFrom"
              value={formData.availableFrom}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Available Until:
            <input
              type="datetime-local"
              name="availableUntil"
              value={formData.availableUntil}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Create Ad</button>
        </form>
      </div>
    </>
  );
};

export default AdForm;
