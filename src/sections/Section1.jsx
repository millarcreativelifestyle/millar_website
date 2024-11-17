import React from "react";
import "../App.css";
import NavMenu from "../components/NavMenu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import heroLogo from "../assets/hero-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import downArrow from "../assets/downArrow.png";
function Section1() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <section className="d-flex flex-column sec-1 w-100">
      <Row className="w-100 mx-0 d-flex justify-content-center">
        <NavMenu />
      </Row>
      <Row
        className="w-100 mx-0 d-flex justify-content-center align-items-center flex-column"
        style={{ height: `${isMobile ? "80vh" : "100vh"}` }}
      >
        <img
          src={heroLogo}
          alt="logo"
          style={{ width: "220px", height: "140px" }}
          className="my-3 hero-logo"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <h1
          className="my-3 text-center hero-text"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Endless Collections
          <br />
          Curated For You
        </h1>
        <a
          className="hero-button my-3"
          data-aos="fade-up"
          data-aos-duration="1000"
          href="#about"
          style={{ textDecoration: "none" }}
        >
          Get Started
        </a>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={downArrow}
          alt="downArrow"
          style={{
            width: "90px",
            height: "60px",
            animation: "upDown 2s ease-in-out infinite",
          }}
        />
      </Row>
    </section>
  );
}

export default Section1;
