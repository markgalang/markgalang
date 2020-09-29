import React from "react";
import ProjectPreview from "../images/project-preview.png";
import TechCard from "../components/tech-card";

const ProjectSlide = () => {
  return (
    <div className="slide">
      <img
        src={ProjectPreview}
        alt="Project Preview"
        className="slide__preview"
      />
      <div className="slide__information">
        <h2 className="slide__information--title">Project XYZ</h2>
        <p className="slide__information--description">
          diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus
          cras adipiscing enim eu turpis egestas pretium aenean
        </p>
        <p className="slide__information--features">
          Key Features: Realtime, Team Messaging, Shift Monitoring
        </p>
        <p className="slide__information--tech-stack">Tech Stack:</p>
        <div className="slide__information--tech-stack-container">
          <TechCard />
          <TechCard />
          <TechCard />
        </div>

        <div className="slide__information--button-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/"
          >
            <button className="button button--gold slide__information--preview-button">
              Live Preview
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
