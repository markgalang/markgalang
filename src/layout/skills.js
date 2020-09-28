import React from "react";
import SkillCard from "../components/skill-card";

const Skills = () => {
  return (
    <div className="skills">
      <div className="u-container">
        <div className="skills__content">
          <h1 className="section-header">Skills</h1>
          <div className="skills__card-container">
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
