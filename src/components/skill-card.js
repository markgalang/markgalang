import React from "react";
import TechCard from "./tech-card";
const SkillCard = () => {
  return (
    <div className="skill-card">
      <div className="skill-card__header">Title</div>
      <div className="skill-card__tech-cards">
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
      </div>
    </div>
  );
};

export default SkillCard;
