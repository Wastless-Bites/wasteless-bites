import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAds } from "./feedSlice";
import AdForm from "../AdForm/AdForm";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Feed = () => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.auth.me.userType);
  const ads = useSelector((state) => state.ads);

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {userType === "organization" && <AdForm />}
      <div className="ad-container">
        {ads.map((ad) => {
          return (
            <div className="ads" key={ad.id}>
              <h4>{ad.organization && ad.organization.username}</h4>
              <h5>{ad.organization && ad.organization.address}</h5>
              <p>{ad.description}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Feed;
