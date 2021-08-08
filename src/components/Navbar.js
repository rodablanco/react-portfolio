import React, { Component } from "react";
import Contact from "./Contact";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";



class Navbar extends Component {
  render() {
    return (
      <ReactBootStrap.Navbar bg="dark" variant="dark">
        <ReactBootStrap.Container fluid>
          <Link className="navbar-brand" to="/">
            Rod's Portfolio
          </Link>
          <ReactBootStrap.Nav className="me-auto justify-content-end">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            <Link className="nav-link" to="/resume">
              Resume
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    );
  }
}

export default Navbar;
