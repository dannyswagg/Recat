import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { GiGuitarBassHead } from "react-icons/gi";
import { ButtonC } from "./Elements";
import { animateScroll as scroll, Link } from "react-scroll";

export class Navigation extends Component {
  render() {
    const toggleHome = () => {
      scroll.scrollToTop();
    };
    return (
      <>
        <Navbar fixed="top" variant="dark" expand="lg" id="navigation" collapseOnSelect="true">
          <Navbar.Brand>
            <Link to="navigation" onClick={toggleHome}>
              <GiGuitarBassHead style={{ color: "#b90abf" }} /> dbass-ED
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-center">
              <Nav.Link>
                <Link to="about" spy={true} smooth={true} duration={700}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="discover" spy={true} smooth={true} duration={700}>
                  Discover
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={700}
                >
                  Services
                </Link>
              </Nav.Link>
            </Nav>
            <Link to="sign" spy={true} smooth={true} duration={700}>
              <ButtonC>Sign Up</ButtonC>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
