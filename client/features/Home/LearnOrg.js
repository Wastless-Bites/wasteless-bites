import React from 'react'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.js'

const LearnOrg = () => {
    return (
        <>
            <Navbar />
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
                    Restaurants and organizations can take various measures to
                    reduce food waste and contribute to a sustainable
                    environment. One way is to offer surplus food for a lower
                    price or even for free at certain times of the day. This
                    helps to reduce food waste while also promoting the food and
                    the organization. Additionally, implementing food waste
                    reduction strategies like proper inventory management,
                    ordering only what is needed, and monitoring and utilizing
                    excess ingredients can help prevent food waste. Some
                    restaurants and organizations also partner with food banks
                    or other charitable organizations to donate surplus food,
                    which not only reduces waste but also helps to address food
                    insecurity in the community. Finally, restaurants can
                    educate their customers about the importance of reducing
                    food waste by providing information about the amount of food
                    that goes to waste and how they can help by taking home
                    leftovers or ordering smaller portions.
                </p>

                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default LearnOrg
