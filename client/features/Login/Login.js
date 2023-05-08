import React from 'react'
import Navbar from '../Navbar/Navbar.js'

const Login = () => {
    return (
        <>
            <Navbar />
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>

                <p>New here? Sign up here!</p>
                <button
                    type="submit"
                    formNoValidate
                    onClick={() => (window.location.href = '/signup')}
                >
                    Sign Up
                </button>
            </form>
        </>
    )
}

export default Login
