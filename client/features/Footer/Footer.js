import React from 'react'

const Footer = () => {
    return (
        <footer className="section-footer">
            <div className="contact-info">
                <a href="/contact">Contact</a>
                <a href="/aboutus">About Us</a>
            </div>

            <div className="social-media-links">
                <a href="#">
                    <span className="ig-link">
                        <i className="fa-brands fa-instagram"></i>
                    </span>
                </a>
                <a href="#">
                    <span className="ig-link">
                        <i className="fa-brands fa-facebook"></i>
                    </span>
                </a>
                <span className="ig-link">
                    <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </span>
                <span className="ig-link">
                    <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
