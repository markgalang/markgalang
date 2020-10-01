import React from "react";
import TechCard from "./tech-card";
const SkillCard = (props) => {
  const { skills, category } = props;

  const techCardsMarkup = skills.map(({ name, link, logo }, index) => (
    <TechCard key={logo + index} name={name} link={link} logo={logo} />
  ));

  return (
    <div className="skill-card">
      <div className="skill-card__header">{category}</div>
      <div className="skill-card__tech-cards">{techCardsMarkup}</div>
    </div>
  );
};

export default SkillCard;
