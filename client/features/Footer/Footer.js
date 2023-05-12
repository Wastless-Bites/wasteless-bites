import React from 'react'

const Footer = () => {
    return (
        <footer className="section-footer">
            <div className="contact-info">
                <a href="/contact">Contact</a>
                <a href="/aboutus">About Us</a>
            </div>

            <div className="social-media-links">
                <a href="https://www.instagram.com/">
                    <span className="ig-link">
                        <i className="fa-brands fa-instagram"></i>
                    </span>
                </a>
                <a href="https://www.facebook.com">
                    <span className="facebook-link">
                        <i className="fa-brands fa-facebook"></i>
                    </span>
                </a>
                <a href="https://www.twitter-link">
                    <span className="twitter-link">
                        <i className="fa-brands fa-twitter"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com">
                    <span className="linkedin-link">
                        <i className="fa-brands fa-linkedin"></i>
                    </span>
                </a>
            </div>
        </footer>
    )
}

export default Footer
