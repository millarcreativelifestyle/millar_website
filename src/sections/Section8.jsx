import React from "react";
import Row from "react-bootstrap/Row";
import LogoScroll from "../components/LogoScroll";
function Section8() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <Row className="mx-0">
      <Row
        className={`mx-0 d-flex flex-column py-4 ${
          isMobile ? "justify-content-center align-items-center" : ""
        }`}
      >
        <h1
          className={`sec-5-header ${!isMobile ? "ms-4 mt-5 ps-4 " : "px-5"}`}
          style={{ color: "#234752" }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Clients We’ve Crafted For
        </h1>
      </Row>
      <Row className="mx-0 d-flex justify-content-center align-items-center px-0 pb-5">
        <LogoScroll />
      </Row>
    </Row>
  );
}

export default Section8;
