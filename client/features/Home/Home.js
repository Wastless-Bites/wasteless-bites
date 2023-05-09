import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* ---SECTION ONE--- */}

            <div className="home-container">
                <div className="home-section-one">
                    <video
                        className="home-section-one-video"
                        width="100%"
                        autoPlay
                        muted
                        playsInline
                        loop
                    >
                        <source
                            src="https://res.cloudinary.com/df1zxnn7h/video/upload/v1683561384/Vid_ktsnsq.mp4"
                            type="video/mp4"
                        ></source>
                        <source
                            src="https://res.cloudinary.com/df1zxnn7h/video/upload/v1683561384/Vid_ktsnsq.mp4"
                            type="video/ogg"
                        ></source>
                    </video>

                    <div className="navbar-container-landing-page">
                        <img
                            className="logo"
                            src="somelogo"
                            alt="Wasteless Bites"
                        />
                        <div className="nav-right-container-landing-page">
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>

                {/* --- SECTION TWO --- */}

                <div className="home-section-two">
                    <section>
                        <div className="individual-box">
                            <h2>An individual</h2>
                            <p>
                                Uncover organizations in your area giving away
                                free food or food for a very minimal price. Help
                                our planet today.
                            </p>
                            <button>Learn more</button>
                        </div>

                        <div className="individual-box-image-container">
                            <img
                                className="individual-box-image"
                                src="https://www.contactspace.com/wp-content/uploads/happy-customer-on-the-phone-min-1024x723.jpg"
                            ></img>
                        </div>
                    </section>

                    <section>
                        <div className="organization-box">
                            <h2>An organization</h2>
                            <p>
                                Are you an organization facing waste problems
                                and don't know what to do with your surplus of
                                food? Discover our solutions to help you
                            </p>
                            <button>Learn more</button>
                        </div>
                        <div className="organization-box-image-container">
                            <img
                                className="organization-box-image"
                                src="https://st2.depositphotos.com/1037987/10278/i/450/depositphotos_102781232-stock-photo-supermarket-workers-standing-in-grocery.jpg"
                            ></img>
                        </div>
                    </section>
                </div>

                {/* --- SECTION THREE --- */}

                <div className="home-section-three">
                    <div className="home-section-three-left-container">
                        testing
                    </div>
                    <div className="home-section-three-right-container">
                        testing2
                    </div>
                </div>

                {/* ---SECTION FOUR--- */}

                <div className="home-section-four">
                    <div className="section-four-left-container">
                        <p className="section-four-gif"></p>
                    </div>
                    <div className="section-four-right-container">
                        <h3>Our mission</h3>
                        <h2>
                            Seeking solutions to eliminate waste of any
                            products.
                        </h2>
                        <p>
                            We are committed to creating a sustainable world
                            where no product goes to waste. Our mission is to
                            find innovative solutions that ensure unsold items
                            are repurposed, reused, or upcycled instead of
                            ending up in landfills. We strive to make the most
                            of every resource, including diverting waste towards
                            animal food and other eco-friendly methods.
                        </p>
                        <button>I'm interested!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
