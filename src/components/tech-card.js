import React from "react";
const TechCard = (props) => {
  const { name, link, logo } = props;
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="tech-card"
    >
      <img src={logo} alt={name} className="tech-card__image" />
      <p>{name}</p>
    </a>
  );
};

export default TechCard;
