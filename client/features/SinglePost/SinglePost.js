import React, { useEffect, useRef } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import Navbar from '../Navbar/Navbar'
import Foorer from '../Footer/Footer'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const SinglePost = () => {
    const mapRef = useRef(null)

    useEffect(() => {
        let map = L.map(mapRef.current)

        map.setView([51.505, -0.09], 13)
        let markers = []

        function onMapClick(e) {
            L.popup()
                .setLatLng(e.latlng)
                .setContent('You clicked the map at ' + e.latlng.toString())
                .openOn(map)

            markers.forEach((marker) => marker.removeFrom(map))
            let newMarker = L.marker(e.latlng).addTo(map)
            markers.push(newMarker)
        }

        map.on('click', onMapClick)

        L.tileLayer(
            'https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=ysdcETxJUSd2xVbgAjlY',
            {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }
        ).addTo(map)
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
