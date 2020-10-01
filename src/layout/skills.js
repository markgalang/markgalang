import React from "react";
import SkillCard from "../components/skill-card";
import { connect } from "react-redux";

const Skills = (props) => {
  const skillCardsMarkup = props.skills.map(({ category, skills }) => (
    <SkillCard key={category} category={category} skills={skills} />
  ));
  return (
    <div id="skills" className="skills">
      <div className="u-container">
        <div className="skills__content">
          <h1 className="section-header">Skills</h1>
          <div className="skills__card-container">{skillCardsMarkup}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    skills: state.skills,
  };
};
export default connect(mapStateToProps)(Skills);
