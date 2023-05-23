import React from "react";
import Footer from "../Footer/Footer.js";
import Navbar from "../Navbar/Navbar.js";

const aboutUsData = [
  {
    name: "Richard Gasparini",
    imgUrl:
      "https://res.cloudinary.com/df1zxnn7h/image/upload/v1684727039/a8h8imyekrjhtm3eqly9.jpg",
    linkedin: "https://www.linkedin.com/in/richardgasparini/",
  },
  {
    name: "Noel Diaz",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4A2HMrV-6pnTb6c9Cilt8Paq70FD1SE-gpMI6CTG3mKb-JhyO0sNTzpdlGjg3jNdp-E&usqp=CAU",
    linkedin: "https://www.linkedin.com/in/noel-diaz/",
  },
  {
    name: "Steven Lee",
    imgUrl: "https://i.gyazo.com/c9ae62211404179d924fedde91037416.png",
    linkedin: "https://www.linkedin.com/in/steven-sehyun-lee/",
  },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <div className="about-us-container-section-one">
          {aboutUsData.map((data) => (
            <div className="about-us-image-container">
              <a href={data.linkedin} target="_blank">
                <img
                  className="about-us-image"
                  src={data.imgUrl}
                  alt={data.name}
                />
              </a>
              <p className="about-us-name">{data.name}</p>
            </div>
          ))}
        </div>

        <div className="about-us-container-section-two">
          <h1>About Us</h1>
          <p className="about-us-text">
            As a non-profit organization committed to promoting sustainability
            and reducing food waste, we know firsthand how important it is to
            get restaurants involved in this effort. By working together with
            restaurants, we can create a more eco-friendly and socially
            responsible food system that benefits everyone.
            <br></br>
            <br></br>
            Our approach involves encouraging restaurants to introduce special
            offers, like reduced-price meals or donating surplus food, which
            helps to reduce waste and promote a positive image for the
            restaurant as a socially responsible business. With your support, we
            can continue to raise awareness about food waste and create a more
            sustainable future for us all.
          </p>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
