import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAds } from "./feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.auth.me.userType);
  const ads = useSelector((state) => state.ads);

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  return (
    <div className="ad-container">
      {ads.map((ad) => {
        return (
          <div className="ads" key={ad.id}>
            <h4>{ad.organization.username}</h4>
            <h5>{ad.organization.address}</h5>
            <p>{ad.food_description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
