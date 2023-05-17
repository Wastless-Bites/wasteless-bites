import React from 'react'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.js'

const Donor = () => {
    return (
        <>
            <Navbar />
            <div className="donors-container">
                <img
                    className="donors-image"
                    src="https://rare-gallery.com/uploads/posts/508321-food-luxury.jpg"
                    alt="Food"
                />
                <h1 className="donors-header">How Donors can contribute</h1>
            </div>
            <div className="donor-text-background">
                <div className="donors-content">
                    <p>
                        As a donor, you have the power to make a difference in
                        reducing food waste and supporting sustainability
                        efforts. Consider supporting organizations that actively
                        work towards minimizing food waste and promoting
                        responsible consumption. You can contribute by donating
                        funds, resources, or time to initiatives such as food
                        banks, community kitchens, and organizations dedicated
                        to rescuing surplus food. By supporting these efforts,
                        you help redirect edible food that would otherwise go to
                        waste to those in need. Together, we can create a
                        positive impact on both the environment and the lives of
                        individuals facing food insecurity.
                    </p>
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </>
    )
}

export default Donor
