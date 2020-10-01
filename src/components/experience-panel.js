import React from "react";
import TabPanel from "@material-ui/lab/TabPanel";

const ExperiencePanel = (props) => {
  const { name, description, date, location, responsibilities } = props.details;

  const responsibilitiesMarkup = responsibilities.map(
    (responsibility, index) => (
      <li key={index} className="panel__list-item">
        {responsibility}
      </li>
    )
  );
  return (
    <TabPanel value={`${props.value}`} className="panel">
      <h2 className="panel--title">{name}</h2>
      <p className="panel--location-date">
        {location} | {date}
      </p>
      <p className="panel--description">{description}</p>
      <h4 className="panel__header">Achievements / Work Description:</h4>
      <ul className="panel__list-items">{responsibilitiesMarkup}</ul>
    </TabPanel>
  );
};

export default ExperiencePanel;
