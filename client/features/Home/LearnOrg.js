import React from 'react'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.js'

const LearnOrg = () => {
    return (
        <>
            <Navbar />
            <div className="organization-background">
                <div className="learn-org-container">
                    <img
                        className="learn-org-image"
                        src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/tryitnow_GettyImages-1127515284_HR.jpg?w=1600&h=900"
                        alt="Food"
                    />
                    <h1 className="learn-org-header">
                        What Organizations can do to help
                    </h1>
                </div>
                <div className="learn-org-content">
                    <p>
                        Restaurants and organizations can make a difference in
                        reducing food waste and promoting sustainability. They
                        can offer surplus food for a lower price or even free at
                        certain times, showing their commitment to waste
                        reduction. Efficient inventory management, ordering only
                        what's needed, and utilizing excess ingredients are also
                        key strategies.
                        <br></br>
                        <br></br>
                        Partnering with food banks and charitable organizations
                        helps address food insecurity while reducing waste.
                        Restaurants can educate customers about the impact of
                        food waste and how they can contribute by taking home
                        leftovers or ordering smaller portions. Together, we can
                        create a greener future.
                        <div>
                            <button
                                className="organization-page-btn"
                                onClick={() =>
                                    (window.location.href = '/signup')
                                }
                            >
                                I'm interested!
                            </button>
                        </div>
                    </p>
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </>
    )
}

export default LearnOrg
