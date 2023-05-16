import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer'
import LoginPopUp from '../LoginPopUp/LoginPopUp.js'
import { authenticate } from '../auth/authSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginSuccess, setLoginSuccess] = useState(false)
    const userId = useSelector((state) => state.auth.me.id)

    const handleLogin = async (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        try {
            await dispatch(
                authenticate({ username, password, method: 'login' })
            )
            if (userId) {
                setLoginSuccess(true)
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if (userId) {
            setLoginSuccess(true)
        }
    }, [userId])

    const handleOk = () => {
        setLoginSuccess(false)
        navigate('/feed')
    }

    return (
        <>
            <Navbar />
            {loginSuccess && <LoginPopUp handleOk={handleOk} />}
            <div className="login-page">
                <div className="image-container">
                    <img
                        className="login-image"
                        src="https://www.realsimple.com/thmb/fMh6cWLYxsddO3BuSJXanCk1gpI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-dinner-recipes-f768402675e04452b1531360736da8b5.jpg"
                        alt="Food"
                    />
                </div>
                <div className="login-container">
                    <form className="login-form" onSubmit={handleLogin}>
                        <h1 className="login-header">Login</h1>
                        <label className="login-labels" htmlFor="username">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                        />
                        <label className="login-labels" htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                        <button className="login-btn" type="submit">
                            Login
                        </button>
                        <p>Don't have an account?</p>{' '}
                        <Link className="login-sign-up-btn" to="/signup">
                            Sign up
                        </Link>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
