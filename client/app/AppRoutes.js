import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Landing from '../features/Landing/Landing'
import Contact from '../features/Contact/Contact.js'
import AboutUs from '../features/AboutUs/AboutUs.js'
import Login from '../features/Login/Login.js'
import SignUp from '../features/SignUp/SignUp.js'
import SingleUserProfile from '../features/UserProfile/SingleUserProfile.js'
import Feed from '../features/Feed/Feed'
import LearnIndividual from '../features/Home/LearnIndividual'
import LearnOrg from '../features/Home/LearnOrg'
import Map from '../features/Map/Map'
import { me } from './store'
import MapSinglePost from '../features/MapSinglePost/MapSinglePost'
import FoodWaste from '../features/Home/FoodWaste'
import UserProfile from '../features/UserProfile/UserProfile'
import Donor from '../features/Home/Donor'

const AppRoutes = () => {
    const user = useSelector((state) => !!state.auth.me)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(me())
    }, [])

    return (
        <div>
            {user ? (
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/aboutus" element={<AboutUs />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/profile" element={<UserProfile />}></Route>
                    <Route path="/feed" element={<Feed />}></Route>
                    <Route
                        path="/learnindividual"
                        element={<LearnIndividual />}
                    ></Route>
                    <Route path="/learnorg" element={<LearnOrg />}></Route>
                    <Route path="/map" element={<Map />}></Route>
                    <Route path="/map/:id" element={<MapSinglePost />}></Route>
                    <Route path="/foodwaste" element={<FoodWaste />}></Route>
                    <Route
                        path="/profile/:id"
                        element={<SingleUserProfile />}
                    ></Route>
                    <Route path="/donor" element={<Donor />}></Route>
                </Routes>
            ) : (
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/aboutus" element={<AboutUs />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/profile" element={<UserProfile />}></Route>
                    <Route path="/feed" element={<Feed />}></Route>
                    <Route
                        path="/learnindividual"
                        element={<LearnIndividual />}
                    ></Route>
                    <Route path="/learnorg" element={<LearnOrg />}></Route>
                    <Route path="/map" element={<Map />}></Route>
                    <Route path="/map/:id" element={<MapSinglePost />}></Route>
                    <Route path="/foodwaste" element={<FoodWaste />}></Route>
                    <Route
                        path="/profile/:id"
                        element={<SingleUserProfile />}
                    ></Route>
                </Routes>
            )}
        </div>
    )
}

export default AppRoutes
