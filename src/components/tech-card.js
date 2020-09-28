import React from "react";
import imageSource from "../images/logos/Javascript.png";
const TechCard = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.google.com/"
      className="tech-card"
    >
      <img src={imageSource} alt="asd" className="tech-card__image" />
      <p>Javascript</p>
    </a>
  );
};

export default TechCard;
