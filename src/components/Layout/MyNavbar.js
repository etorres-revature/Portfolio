import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const MyNavBar = () => {
  return (
    <Navbar className="border-bottom" bg="transparent" expand="md">
      <Navbar.Brand>
        <strong>Eric D. Torres</strong>
      </Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/Portfolio">
            Home
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/resume">
            Resume
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavBar;
