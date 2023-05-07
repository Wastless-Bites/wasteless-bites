import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-section-one">
                    <video
                        width="100%"
                        height="100%"
                        autoPlay
                        muted
                        playsInline
                        loop
                    >
                        <source
                            src="https://vod-progressive.akamaized.net/exp=1683416363~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3301%2F28%2F716506977%2F3322312678.mp4~hmac=234460b081a3166e7b2be44d9a8536f1af20234e68bc96e29d474c463bdde1fb/vimeo-prod-skyfire-std-us/01/3301/28/716506977/3322312678.mp4?filename=file.mp4"
                            type="video/mp4"
                        ></source>
                        <source
                            src="https://vod-progressive.akamaized.net/exp=1683416363~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3301%2F28%2F716506977%2F3322312678.mp4~hmac=234460b081a3166e7b2be44d9a8536f1af20234e68bc96e29d474c463bdde1fb/vimeo-prod-skyfire-std-us/01/3301/28/716506977/3322312678.mp4?filename=file.mp4"
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
                            <Link href="/login">Login</Link>
                            <Link href="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>

                <div className="home-section-two">
                    <div className="individual-box">
                        <h2>An individual</h2>
                        <p>
                            Uncover organizations in your area giving away free
                            food or food for a very minimal price. Help our
                            planet today.
                        </p>
                        <button>Learn more</button>
                    </div>

                    <div className="organization-box">
                        <h2>A organization</h2>
                        <p>
                            Are you an organization facing waste problems and
                            don't know what to do with your surplus of food?
                            Discover our solutions to help you
                        </p>
                        <button>Learn more</button>
                    </div>
                </div>

                <div className="home-section-three">
                    <div className="section-three-left-container">
                        <p className="section-three-gif"></p>
                    </div>
                    <div className="section-three-right-container">
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
