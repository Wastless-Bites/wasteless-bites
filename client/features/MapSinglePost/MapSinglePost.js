import React, { useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import L from 'leaflet'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAds, incrementComing, decrementComing } from '../Feed/feedSlice'
import { useParams, Link } from 'react-router-dom'

const MapSinglePost = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const ads = useSelector((state) => state.ads)
    const userId = useSelector((state) => state.auth.me.id)
    const singleAd = ads.find((ad) => ad.id === Number(id))
    const isComing = singleAd ? singleAd.comingUserIds.includes(userId) : false

    const mapRef = useRef(null)
    const leafletMap = useRef(null)

    useEffect(() => {
        dispatch(fetchAds())
    }, [dispatch])

    useEffect(() => {
        if (!leafletMap.current) {
            leafletMap.current = L.map(mapRef.current)
        }

        if (singleAd) {
            leafletMap.current.setView(
                [
                    singleAd.organization.latitude,
                    singleAd.organization.longitude,
                ],
                14
            )
            L.tileLayer(
                'https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=ysdcETxJUSd2xVbgAjlY',
                {
                    maxZoom: 19,
                    attribution:
                        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                }
            ).addTo(leafletMap.current)

            let marker = L.marker([
                singleAd.organization.latitude,
                singleAd.organization.longitude,
            ]).addTo(leafletMap.current)
            marker.bindPopup(`
        <b>${singleAd.title}</b><br>
        ${singleAd.description}<br>
        <a href="/map/${singleAd.id}">View Details</a>
      `)
        }

        ads.forEach((ad) => {
            let marker = L.marker([
                ad.organization.latitude,
                ad.organization.longitude,
            ]).addTo(leafletMap.current)
            marker.bindPopup(`
        <b>${ad.title}</b><br>
        ${ad.description}<br>
        <a href="/map/${ad.id}">View Details</a>
      `)
        })
    }, [ads, singleAd])

    const handleComingClick = () => {
        dispatch(incrementComing(singleAd.id))
        fetchAds()
    }

    const handleNotComingClick = () => {
        dispatch(decrementComing(singleAd.id))
        fetchAds()
    }

    return (
        <>
            <Navbar />
            <div className="map-single-post-container">
                <div className="single-map-container" ref={mapRef}></div>
                {singleAd && (
                    <div className="ad-details">
                        <img
                            className="single-ad-image"
                            src={singleAd.imageUrl}
                        ></img>
                        <h1>{singleAd.title}</h1>
                        <Link to={`/profile/${singleAd.organization.id}`}>
                            <h2>{singleAd.organization.username}</h2>
                        </Link>
                        <p>{singleAd.organization.address}</p>
                        <p>{singleAd.description}</p>
                        <button
                            onClick={
                                isComing
                                    ? handleNotComingClick
                                    : handleComingClick
                            }
                            className={isComing ? 'red-btn' : 'green-btn'}
                        >
                            {isComing ? 'Not Coming!' : "I'm Coming!"}
                        </button>
                        <p id="single-ad-coming-numbers">
                            {singleAd.coming} people are coming!
                        </p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default MapSinglePost
