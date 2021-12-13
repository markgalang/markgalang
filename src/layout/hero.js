import React from "react";
import { Linkedin, Twitter, GitHub, Mail, ArrowRight } from "react-feather";
// import PortraitSource from "../images/mark-portrait.png";
import Image1 from "../images/mark-casual-1.jpg";
import Image2 from "../images/mark-casual-2.jpg";
import Image3 from "../images/mark-casual-3.jpg";
import { Link } from "react-scroll";

const Hero = (props) => {
  const ImageArray = [Image3];
  const ImageSoure = ImageArray[Math.floor(Math.random() * ImageArray.length)];
  return (
    <div id="home" className="hero">
      <div className="u-container">
        <div className="hero__portrait-container">
          <img
            src={ImageSoure}
            alt="Mark Galang (Software Engineer)"
            className="hero__portrait"
          />
        </div>

        <div className="hero__text-container">
          <h2 className="secondary-header">Hello, I'm</h2>
          <h1 className="primary-header">Mark Galang</h1>

          <p className="hero__description">
            <span className="text-emphasize">Software Engineer </span>that is
            proficient both on the front end side and back end side of
            development. I mainly built things for the{" "}
            <span className="text-emphasize">Web</span> but I am also capable in{" "}
            <span className="text-emphasize">Mobile development.</span>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hero__more"
            >
              Read more
              <ArrowRight className="more-icon" />
            </Link>
          </p>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hero__more"
          >
            <button className="button button--gold u-margin-y-lg ">
              Schedule a Chat
            </button>
          </Link>

          <div className="social-media-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/dev_markG"
            >
              <Twitter className="social-media-icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/markggalang/"
            >
              <Linkedin className="social-media-icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/markgalang"
            >
              <GitHub className="social-media-icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:galangmarkg@gmail.com"
            >
              <Mail className="social-media-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
