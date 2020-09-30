import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MenuBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="menubar">
      <Navbar.Brand href="/#">
        <h1 className="menubar__brand-text">MG</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span className="menubar__icon">&nbsp;</span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/#">HOME</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#skills">SKILLS</Nav.Link>
          <Nav.Link href="#projects">PROJECTS</Nav.Link>
          <Nav.Link href="#experience">EXPERIENCE</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
