import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Lazzez Foods, a culinary haven where flavors shine and memories are made.
            Indulge in our culinary creations crafted with passion and using the freshest ingredients.
            Immerse yourself in a vibrant atmosphere that celebrates food, family, and community.
            Dedicated to sustainability, we are proud to support local producers and reduce our carbon footprint.
            Join us at Lazzez Foods for a culinary journey that delights the senses and warms the soul.
            </p>
            <Link to={"/expmenu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
