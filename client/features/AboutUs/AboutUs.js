import React from "react";
import Footer from "../Footer/Footer.js";
import Navbar from "../Navbar/Navbar.js";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <h1>About Us</h1>
      <p>
        Food waste is an ever-increasing problem that contributes significantly
        to environmental degradation and greenhouse gas emissions. Restaurants
        are one of the main contributors to this problem, which is why we are
        encouraging them to take a proactive approach. One solution is to
        introduce a special hour or end-of-day call to offer a reduced-price
        meal or hand out surplus food for free. This approach can help reduce
        food waste and promote the restaurant's image as a socially responsible
        and eco-friendly business. It also raises awareness among customers
        about the issue of food waste and promotes the idea of reusing and
        recycling surplus food supplies. By taking such steps, restaurants can
        make a significant contribution to reducing food waste while also
        promoting their business and attracting customers who value social and
        environmental responsibility.
      </p>

      <Footer />
    </>
  );
};

export default AboutUs;
