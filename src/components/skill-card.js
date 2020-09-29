import React from "react";
import TechCard from "./tech-card";
import { connect } from "react-redux";
const SkillCard = (props) => {
  console.log(props.skills);
  return (
    <div className="skill-card">
      <div className="skill-card__header">Title</div>
      <div className="skill-card__tech-cards">
        <TechCard />
        <TechCard />
        <TechCard />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { skills: state.skills };
};
export default connect(mapStateToProps)(SkillCard);
