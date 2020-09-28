import React from "react";
import { Linkedin, Twitter, GitHub, Mail, ArrowRight } from "react-feather";
import PortraitSource from "../images/mark-portrait.png";

const Hero = () => {
  return (
    <div className="hero">
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
              <a href="https://www.google.com/" className="hero__more">
                Read more
                <ArrowRight className="more-icon" />
              </a>{" "}
            </p>

            <a href="https://www.google.com/">
              <button className="button button--gold u-margin-y-lg ">
                Schedule a Chat
              </button>
            </a>

            <div className="social-media-icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/"
              >
                <Twitter className="social-media-icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/"
              >
                <Linkedin className="social-media-icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/"
              >
                <GitHub className="social-media-icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/"
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
