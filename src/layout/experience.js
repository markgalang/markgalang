import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";

const Experience = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="experience" className="experience">
      <div className="u-container">
        <h1 className="section-header">Experience</h1>
        <div className="experience__horizontal-tab">
          <TabContext value={value}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="RMCordoviz Inc." value={0} />
              <Tab label="Twist Resources Inc." value={1} />
              <Tab label="Company 3" value={2} />
            </Tabs>

            <TabPanel value={0} className="panel">
              <h2 className="panel--title">RMCordoviz Inc.</h2>
              <p className="panel--location-date">
                Las Vegas, Nevada | Mar 2020 - Sep 2020
              </p>
              <p className="panel--description">
                A business consulting company based in the Las Vegas that offers
                services in Web Development, Game Development, Business
                Coaching, etc.{" "}
              </p>
              <h3 className="panel__header">
                Achievements / Work Description:
              </h3>
              <ul className="panel__list-items">
                <li className="panel__list-item">
                  accumsan lacus vel facilisis volutpat est velit egestas dui id
                </li>
                <li className="panel__list-item">
                  elementum eu facilisis sed odio morbi quis commodo odio aenean
                </li>
                <li className="panel__list-item">
                  faucibus a pellentesque sit amet porttitor eget dolor morbi
                  non
                </li>
                <li className="panel__list-item">
                  at elementum eu facilisis sed odio morbi quis commodo odio
                  aenean sed adipiscing diam donec
                </li>
                <li className="panel__list-item">
                  sollicitudin nibh sit amet commodo nulla facilisi nullam
                  vehicula ipsum a arcu
                </li>
              </ul>
            </TabPanel>
            <TabPanel value={1} className="panel">
              Item Two
            </TabPanel>
            <TabPanel value={2} className="panel">
              Item Three
            </TabPanel>
          </TabContext>
        </div>
        <h1 className="section-header">Experience</h1>
        <div className="experience__vertical-tab">
          <TabContext value={value}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className="experience__vertical-tabs"
            >
              <Tab
                label="RMCordoviz Inc."
                value={0}
                aria-controls={`vertical-tabpanel-${0}`}
              />
              <Tab label="Twist Resources Inc." value={1} />
              <Tab label="Company 3" value={2} />
            </Tabs>

            <TabPanel value={0} className="panel">
              <h2 className="panel--title">RMCordoviz Inc.</h2>
              <p className="panel--location-date">
                Las Vegas, Nevada | Mar 2020 - Sep 2020
              </p>
              <p className="panel--description">
                A business consulting company based in the Las Vegas that offers
                services in Web Development, Game Development, Business
                Coaching, etc.{" "}
              </p>
              <h3 className="panel__header">
                Achievements / Work Description:
              </h3>
              <ul className="panel__list-items">
                <li className="panel__list-item">
                  accumsan lacus vel facilisis volutpat est velit egestas dui id
                </li>
                <li className="panel__list-item">
                  elementum eu facilisis sed odio morbi quis commodo odio aenean
                </li>
                <li className="panel__list-item">
                  faucibus a pellentesque sit amet porttitor eget dolor morbi
                  non
                </li>
                <li className="panel__list-item">
                  at elementum eu facilisis sed odio morbi quis commodo odio
                  aenean sed adipiscing diam donec
                </li>
                <li className="panel__list-item">
                  sollicitudin nibh sit amet commodo nulla facilisi nullam
                  vehicula ipsum a arcu
                </li>
              </ul>
            </TabPanel>
            <TabPanel value={1} className="panel">
              Item Two
            </TabPanel>
            <TabPanel value={2} className="panel">
              Item Three
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  );
};

export default Experience;
