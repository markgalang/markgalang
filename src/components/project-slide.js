import React from "react";
import ProjectPreview from "../images/project-preview.png";
import TechCard from "../components/tech-card";

const ProjectSlide = (props) => {
  const { title, description, link, keyFeatures, techStack } = props.project;

  const keyFeaturesStringMarkup = keyFeatures.join(", ");
  const teckStackMarkup = techStack.map(({ name, link, logo }, index) => (
    <TechCard key={index} name={name} link={link} logo={logo} />
  ));
  return (
    <div className="slide">
      <img
        src={ProjectPreview}
        alt="Project Preview"
        className="slide__preview"
      />
      <div className="slide__information">
        <h2 className="slide__information--title">{title}</h2>
        <p className="slide__information--description">{description}</p>
        <p className="slide__information--features">
          Key Features: {keyFeaturesStringMarkup}
        </p>
        <p className="slide__information--tech-stack">Tech Stack:</p>
        <div className="slide__information--tech-stack-container">
          {teckStackMarkup}
        </div>

        {link && (
          <div className="slide__information--button-container">
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <button className="button button--gold slide__information--preview-button">
                Live Preview
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSlide;
