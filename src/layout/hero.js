import React from "react";
import { Linkedin, Twitter, GitHub, Mail, ArrowRight } from "react-feather";
import PortraitSource from "../images/mark-portrait.png";

const Hero = (props) => {
  return (
    <div id="home" className="hero">
      <div className="u-container">
        <div className="hero__portrait-container">
          <img
            src={PortraitSource}
            alt="Mark Galang (Software Engineer)"
            className="hero__portrait"
          />
        </div>

        <div className="u-container">
          <div className="hero__text-container">
            <h2 className="secondary-header">Hello, I'm</h2>
            <h1 className="primary-header">Mark Galang</h1>

            <p className="hero__description">
              <span className="text-emphasize">Software Engineer </span>that can
              work both on the front end side and back end side of development.
              My experience focuses around{" "}
              <span className="text-emphasize">Web Development</span> using
              JavaScript as my main programming language and I am also
              knowledgeable with{" "}
              <span className="text-emphasize">Mobile development.</span>
              <a href="#about" className="hero__more">
                Read more
                <ArrowRight className="more-icon" />
              </a>{" "}
            </p>

            <a href="#contact">
              <button className="button button--gold u-margin-y-lg ">
                Schedule a Chat
              </button>
            </a>

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
    </div>
  );
};

export default Hero;
