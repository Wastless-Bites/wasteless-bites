import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <img className="logo" src="somelogo" alt="Wasteless Bites" />
            <div className="nav-right-container">
                <Link to="/">Home</Link>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar
