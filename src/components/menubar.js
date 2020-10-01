import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

const MenuBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="menubar">
      <Navbar.Brand as="span" href="#home">
        <Link to="home" smooth={true} duration={500}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <h1 className="menubar__brand-text">MG</h1>
          </Navbar.Toggle>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span className="menubar__icon">&nbsp;</span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link
            as="div"
            activeClass="menubar__active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="menubar__link"
          >
            <Nav.Link as="span" href="#home">
              HOME
            </Nav.Link>
          </Link>
          <Link
            as="div"
            activeClass="sidebar__active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="menubar__link"
          >
            <Nav.Link as="span" href="#about">
              ABOUT
            </Nav.Link>
          </Link>
          <Link
            as="div"
            activeClass="sidebar__active"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="menubar__link"
          >
            <Nav.Link as="span" href="#skills">
              SKILLS
            </Nav.Link>
          </Link>
          <Link
            as="div"
            activeClass="sidebar__active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="menubar__link"
          >
            <Nav.Link as="span" href="#projects">
              PROJECTS
            </Nav.Link>
          </Link>
          <Link
            as="div"
            activeClass="sidebar__active"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="menubar__link"
          >
            <Nav.Link as="span" href="#experience">
              EXPERIENCE
            </Nav.Link>
          </Link>
          <Link
            activeClass="sidebar__active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="menubar__link"
          >
            <Nav.Link as="span" href="#contact">
              CONTACT
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
