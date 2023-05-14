import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const GET_ALL_USERS = 'GET_ALL_USERS'
const TOKEN = 'token'

const allUser = (users) => {
    return {
        type: GET_ALL_USERS,
        users,
    }
}

export const fetchAllUsers = () => {
    return async (dispatch) => {
        try {
            const token = window.localStorage.getItem(TOKEN)
            if (token) {
                const { data } = await axios.get('/api/users', {
                    headers: {
                        Authorization: token,
                    },
                })
                dispatch(allUser(data))
            }
        } catch (error) {}
    }
}

const UserProfile = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.me)

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    return (
        <>
            <Navbar />

            <h1>
                Welcome <span>{user.username}</span>
            </h1>
            <>
                <p>
                    <strong>Username: </strong> {user.username}
                </p>
                <p>
                    <strong>Email: </strong> {user.email}
                </p>
                <p>
                    <strong>Bio:</strong> {user.bio}
                </p>
                <p>
                    <strong>Address: </strong> {user.address}
                </p>
                <p>
                    <strong>Account Type: </strong> {user.userType}
                </p>
            </>
            <div className="footer-container">
                <Footer />
            </div>
        </>
    )
}

export default UserProfile
