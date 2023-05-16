import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar.js'
import { useDispatch } from 'react-redux'
import { authenticate } from '../auth/authSlice.js'
import Footer from '../Footer/Footer'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import { useDebounce } from 'use-debounce'

const provider = new OpenStreetMapProvider()

const SignUp = () => {
    const dispatch = useDispatch()
    const [address, setAddress] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    const [debouncedAddress] = useDebounce(address, 1000)

    const handleSignUp = async (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        const email = e.target.email.value
        const userType = e.target.userType.value

        await dispatch(
            authenticate({
                username,
                password,
                email,
                address,
                userType,
                latitude,
                longitude,
                method: 'signup',
            })
        )

        window.location.href = '/feed'
    }

    const handleAddressChange = async (e) => {
        setAddress(e.target.value)
    }

    const handleSuggestionClick = (suggestion) => {
        setAddress(suggestion.label)
        setLatitude(suggestion.y)
        setLongitude(suggestion.x)
    }

    useEffect(() => {
        if (debouncedAddress) {
            const fetchSuggestions = async () => {
                console.log(debouncedAddress)
                const results = await provider.search({
                    query: debouncedAddress,
                })
                setSuggestions(results)
            }
            fetchSuggestions()
        }
    }, [debouncedAddress])

    return (
        <>
            <Navbar />
            <div className="login-page">
                <div className="image-container">
                    <img
                        className="login-image"
                        src="https://www.foodbymaria.com/wp-content/uploads/2023/04/FBM-Savoury-Egg-Breakfast-Plate-4-1440x1800.jpg"
                        alt="Food"
                    />
                </div>
                <div className="login-container">
                    <form className="login-form" onSubmit={handleSignUp}>
                        <h1 className="login-header">Sign Up</h1>
                        <label className="login-labels" htmlFor="username">
                            Username:
                        </label>
                        <input type="text" name="username" required />

                        <label className="login-labels" htmlFor="password">
                            Password:
                        </label>
                        <input type="password" name="password" required />

                        <label className="login-labels" htmlFor="email">
                            E-Mail:
                        </label>
                        <input type="email" name="email" required />

                        <label className="login-labels" htmlFor="address">
                            Address:
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={handleAddressChange}
                            required
                        />
                        {suggestions.map((suggestion) => (
                            <div
                                className="ad-form-address-suggestions"
                                key={suggestion.y}
                                onClick={() =>
                                    handleSuggestionClick(suggestion)
                                }
                            >
                                <i
                                    className="fa-solid fa-location-dot"
                                    style={{ color: '#c22929' }}
                                />
                                {suggestion.label}
                            </div>
                        ))}

                        <label className="login-labels" htmlFor="userType">
                            Account Type:
                        </label>
                        <select type="userType" name="userType" required>
                            <option value="">Select an option</option>
                            <option value="individual">Individual</option>
                            <option value="organization">Organization</option>
                        </select>

                        <button className="login-btn" type="submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUp
