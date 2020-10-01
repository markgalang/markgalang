import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import ExperiencePanel from "../components/experience-panel";
import { connect } from "react-redux";

const Experience = (props) => {
  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { experience } = props;
  const tabsMarkup = experience.map((company, index) => {
    return <Tab key={index} label={company.name} value={`${index}`} />;
  });

  const experiencePanelsMarkup = experience.map((company, index) => (
    <ExperiencePanel key={index} details={company} value={index} />
  ));

  return (
    <div id="experience" className="experience">
      <div className="u-container">
        <h1 className="section-header">Experience</h1>
        <TabContext value={value}>
          <div className="experience__content">
            <>
              <Tabs
                className="experience__horizontal-tab"
                value={value}
                onChange={handleChange}
              >
                {tabsMarkup}
              </Tabs>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className="experience__vertical-tab"
              >
                {tabsMarkup}
              </Tabs>
            </>
            <>{experiencePanelsMarkup}</>
          </div>
        </TabContext>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    experience: state.experience,
  };
};
export default connect(mapStateToProps)(Experience);
