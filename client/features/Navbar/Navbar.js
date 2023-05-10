import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <Link to="/">
                <img
                    className="logo"
                    src="/assets/logo-no-background.png"
                    alt="Wasteless Bites"
                />
            </Link>
            <div className="nav-right-container">
                <Link to="/feed">Feed</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar
