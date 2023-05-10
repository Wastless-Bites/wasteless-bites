import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAd } from "../Feed/feedSlice";
import { fetchAds } from "../Feed/feedSlice";

const AdForm = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);

  const [formData, setFormData] = useState({
    description: "",
    location: "",
    availableFrom: "",
    availableUntil: "",
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
      description: "",
      location: "",
      availableFrom: "",
      availableUntil: "",
      organizationId: userId,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
    </>
  );
};

export default AdForm;
