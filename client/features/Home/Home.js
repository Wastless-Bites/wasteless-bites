import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* ---SECTION ONE--- */}

      <div className="home-container">
        <div className="section-one-text-container">
          <h1 className="section-one-header-text">
            At Wasteless Bites, we're passionate about fighting food waste and
            are proud to work alongside partners across the food industry.
          </h1>
          <p className="section-one-text">
            We do our best to reduce food loss and waste. Together, we're making
            a positive impact on the planet, one bite at a time.
          </p>
          <button className="section-one-btn-about-food-waste">
            About Food Waste
          </button>
          <button className="section-one-btn-about-us">About Us</button>
        </div>
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
            <Link to="/">
              <img
                className="logo"
                src="/assets/logo-no-background.png"
                alt="Wasteless Bites"
              />
            </Link>
            <div className="nav-right-container-landing-page">
              <Link to="/feed">Feed</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>

        {/* --- SECTION TWO --- */}
        <div className="navbar-container-landing-page">
          <Link to="/">
            <img
              className="logo"
              src="/assets/logo-no-background.png"
              alt="Wasteless Bites"
            />
          </Link>
          <div className="nav-right-container-landing-page">
            {user ? (
              <>
                <Link to="/profile">{user.username}</Link>
                <Link to="/feed">Feed</Link>
                <Link to="/singlepost">Map</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* --- SECTION THREE --- */}

      <div className="home-section-three">
        <div className="home-section-three-left-container">testing</div>
        <div className="home-section-three-right-container">testing2</div>
      </div>

      {/* ---SECTION FOUR--- */}

      <div className="home-section-four">
        <div className="section-four-left-container">
          <p className="section-four-gif"></p>
        </div>
        <div className="section-four-right-container">
          <h3>Our mission</h3>
          <h2>Seeking solutions to eliminate waste of any products.</h2>
          <p>
            We are committed to creating a sustainable world where no product
            goes to waste. Our mission is to find innovative solutions that
            ensure unsold items are repurposed, reused, or upcycled instead of
            ending up in landfills. We strive to make the most of every
            resource, including diverting waste towards animal food and other
            eco-friendly methods.
          </p>
          <button
            type="submit"
            onClick={() => (window.location.href = "/signup")}
          >
            I'm interested!
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
