import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { fetchAds } from "../Feed/feedSlice";
import { useParams } from "react-router-dom";

const Map = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const ads = useSelector((state) => state.ads);

  const mapRef = useRef(null);
  const leafletMap = useRef(null);

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  useEffect(() => {
    if (!leafletMap.current) {
      leafletMap.current = L.map(mapRef.current);
      leafletMap.current.setView([37.5407, -77.436], 14);
      L.tileLayer(
        "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=ysdcETxJUSd2xVbgAjlY",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      ).addTo(leafletMap.current);
    }

    ads.forEach((ad) => {
      let marker = L.marker([
        ad.organization.latitude,
        ad.organization.longitude,
      ]).addTo(leafletMap.current);
      marker.bindPopup(`<b>${ad.title}</b><br>${ad.description}`);
    });
  }, [ads]);

  return (
    <>
      <Navbar />
      <div className="map-container" ref={mapRef}></div>
      <Footer />
    </>
  );
};

export default Map;
