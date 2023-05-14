import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { fetchAds } from "../Feed/feedSlice";
import { useParams } from "react-router-dom";

const MapSinglePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const ads = useSelector((state) => state.ads);
  const singleAd = ads.find((ad) => ad.id === Number(id));

  const mapRef = useRef(null);
  const leafletMap = useRef(null);

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  useEffect(() => {
    if (!leafletMap.current) {
      leafletMap.current = L.map(mapRef.current);
    }

    if (singleAd) {
      leafletMap.current.setView(
        [singleAd.organization.latitude, singleAd.organization.longitude],
        14
      );
      L.tileLayer(
        "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=ysdcETxJUSd2xVbgAjlY",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      ).addTo(leafletMap.current);

      let marker = L.marker([
        singleAd.organization.latitude,
        singleAd.organization.longitude,
      ]).addTo(leafletMap.current);
      marker.bindPopup(`
        <b>${singleAd.title}</b><br>
        ${singleAd.description}<br>
        <a href="/map/${singleAd.id}">View Details</a>
      `);
    }

    ads.forEach((ad) => {
      let marker = L.marker([
        ad.organization.latitude,
        ad.organization.longitude,
      ]).addTo(leafletMap.current);
      marker.bindPopup(`
        <b>${ad.title}</b><br>
        ${ad.description}<br>
        <a href="/map/${ad.id}">View Details</a>
      `);
    });
  }, [ads, singleAd]);

  return (
    <>
      <Navbar />
      <div className="map-single-post-container">
        <div className="single-map-container" ref={mapRef}></div>
        {singleAd && (
          <div className="ad-details">
            <img className="single-ad-image" src={singleAd.imageUrl}></img>
            <h2>{singleAd.title}</h2>
            <p>{singleAd.organization.name}</p>
            <p>{singleAd.organization.address}</p>
            <p>{singleAd.description}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MapSinglePost;