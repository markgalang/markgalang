import React from "react";
import { Home, User, Settings, Box, Mail } from "react-feather";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="/#" className="sidebar__brand">
        MG
      </a>
      <a href="/#" className="sidebar__item">
        <Home />
        <p>Home</p>
      </a>
      <a href="#about" className="sidebar__item">
        <User />
        <p>Me</p>
      </a>
      <a href="#skills" className="sidebar__item">
        <Settings />
        <p>Skills</p>
      </a>
      <a href="#projects" className="sidebar__item">
        <Box />
        <p>Projects</p>
      </a>
      <a href="#contact" className="sidebar__item">
        <Mail />
        <p>Contact</p>
      </a>
    </div>
  );
};

export default Sidebar;
