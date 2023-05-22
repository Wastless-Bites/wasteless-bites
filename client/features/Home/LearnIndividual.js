import React from 'react'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.js'

const LearnIndividual = () => {
    return (
        <>
            <Navbar />
            <div className="individual-background">
                <div className="learn-individual-container">
                    <img
                        className="learn-individual-image"
                        src="https://thumbs.dreamstime.com/b/wooden-table-food-top-view-cafe-102532611.jpg"
                        alt="Food"
                    />
                    <h1 className="learn-individual-image-header">
                        What Individuals can do to help
                    </h1>
                </div>
                <div className="learn-individual-content">
                    <p>
                        Reducing food waste is crucial for combating climate
                        change and promoting sustainability. Individuals can
                        play a significant role by adopting simple habits like
                        buying only what they need, getting creative with
                        leftovers, and composting food scraps.
                        <br></br>
                        <br></br>
                        Another effective strategy is purchasing surplus food
                        from restaurants or grocery stores, as they often have
                        perfectly good food that would otherwise go to waste. By
                        doing so, individuals can save money while preventing
                        food waste. Additionally, donating excess food to food
                        banks or shelters helps provide nutritious meals to
                        those in need. Let's work together to make a positive
                        impact on our planet and communities.
                        <div>
                            <button
                                className="individual-page-btn"
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
        </>
    )
}

export default LearnIndividual
