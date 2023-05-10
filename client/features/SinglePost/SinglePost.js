import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Navbar from '../Navbar/Navbar'
import L from 'leaflet'

const SinglePost = () => {
    const mapRef = useRef(null)

    useEffect(() => {
        let map = L.map(mapRef.current)
        var marker = L.marker([51.5, -0.09]).addTo(map)
        map.setView([51.505, -0.09], 13)

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map)
    }, [])

    return (
        <>
            <Navbar />
            <div className="single-post-container">
                <div className="map-container" ref={mapRef}></div>
                <div className="cards-containers">future code/containers</div>
            </div>
        </>
    )
}

export default SinglePost
