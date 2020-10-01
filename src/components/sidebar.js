import React from "react";
import { Home, User, Settings, Box, Mail, Code } from "react-feather";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="home" smooth={true} duration={500} className="sidebar__brand">
        <p>MG</p>
      </Link>

      <Link
        activeClass="sidebar__active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="sidebar__item"
      >
        <Home />
        <p>Home</p>
      </Link>
      <Link
        activeClass="sidebar__active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className="sidebar__item"
      >
        <User />
        <p>Me</p>
      </Link>
      <Link
        activeClass="sidebar__active"
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        className="sidebar__item"
      >
        <Settings />
        <p>Skills</p>
      </Link>
      <Link
        activeClass="sidebar__active"
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className="sidebar__item"
      >
        <Box />
        <p>Projects</p>
      </Link>
      <Link
        activeClass="sidebar__active"
        to="experience"
        spy={true}
        smooth={true}
        duration={500}
        className="sidebar__item"
      >
        <Code />
        <p>Experience</p>
      </Link>
      <Link
        activeClass="sidebar__active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className="sidebar__item"
      >
        <Mail />
        <p>Contact</p>
      </Link>
    </div>
  );
};

export default Sidebar;
