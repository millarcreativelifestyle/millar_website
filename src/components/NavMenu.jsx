import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function NavMenu() {
  return (
    <Navbar className="bg-body-transparent navbar-dark pt-5" expand={false}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo"
            style={{ width: "118px", height: "44px" }}
            data-aos="fade-down"
            data-aos-duration="1000"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto d-flex flex-column align-items-center justify-content-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <a href="#home" className="menu-text">
              HOME
            </a>
            <a className="menu-text" href="#about">
              ABOUT US
            </a>
            <a href="#services" className="menu-text">
              SERVICES
            </a>
            <a href="#footer" className="menu-text">
              CONTACT US
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
