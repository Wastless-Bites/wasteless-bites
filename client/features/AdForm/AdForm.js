import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAd } from "../Feed/feedSlice";

const AdForm = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.userId);

  const [formData, setFormData] = useState({
    description: "",
    location: "",
    availableFrom: "",
    availableUntil: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const adData = {
      description: form.description.value,
      location: form.location.value,
      availableFrom: form.availableFrom.value,
      availableUntil: form.availableUntil.value,
      organizationId: userId,
    };

    await dispatch(createAd(adData));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" name="description" required />
      </label>
      <label>
        Location:
        <input type="text" name="location" required />
      </label>
      <label>
        Available From:
        <input type="datetime-local" name="availableFrom" required />
      </label>
      <label>
        Available Until:
        <input type="datetime-local" name="availableUntil" required />
      </label>
      <button type="submit">Create Ad</button>
    </form>
  );
};

export default AdForm;
