import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ApparelCard from "../components/ApparelCard";
import tshirt from "../assets/tshirt.png";
import polo from "../assets/polo.png";
import jersey from "../assets/jersey.png";
import os from "../assets/os.png";
import hoodie from "../assets/hoodie.png";
import tp from "../assets/tp.png";
import jacket from "../assets/jacket.png";
import uniform from "../assets/uniform.png";
import Features from "../components/Features";

function Section4() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <Row
      className={`mx-0  ${isMobile && "mt-5"} ${!isMobile && "mb-5"}`}
      id="services"
    >
      <Row className="mx-0">
        <h1
          className={`sec-4-header ${!isMobile ? "ms-4 mt-5 ps-4" : ""}`}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          From Casual to Corporate: Custom Apparel for All
        </h1>
      </Row>
      <Row className="mx-0 px-5">
        <Col lg={3} md={12} sm={12} data-aos="fade-up" data-aos-duration="1000">
          <ApparelCard img={tshirt} text={"CREW NECK T - SHIRT"} />
        </Col>
        <Col
          lg={3}
          md={12}
          sm={12}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <ApparelCard img={polo} text={"POLO T - SHIRT"} />
        </Col>
        <Col lg={3} md={12} sm={12} data-aos="fade-up" data-aos-duration="1000">
          <ApparelCard img={jersey} text={"JERSEY"} />
        </Col>
        <Col
          lg={3}
          md={12}
          sm={12}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <ApparelCard img={os} text={"OVERSIZED TEES"} />
        </Col>
        <Col lg={3} md={12} sm={12} data-aos="fade-up" data-aos-duration="1000">
          <ApparelCard img={hoodie} text={"HOODIES"} />
        </Col>
        <Col
          lg={3}
          md={12}
          sm={12}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <ApparelCard img={tp} text={"TRACK PANTS"} />
        </Col>
        <Col lg={3} md={12} sm={12} data-aos="fade-up" data-aos-duration="1000">
          <ApparelCard img={jacket} text={"VARSITY JACKET"} />
        </Col>
        <Col
          lg={3}
          md={12}
          sm={12}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <ApparelCard img={uniform} text={"UNIFORMS"} />
        </Col>
      </Row>
      <Row className="mx-0 d-flex flex-column">
        <div
          className={`d-flex   flex-column ${
            !isMobile && "justify-content-center align-items-center"
          }`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h6
            className={`${
              isMobile ? "mt-5" : "mt-4"
            } mb-4 features-text text-center`}
          >
            Crafted for Comfort and Strength
          </h6>
          <div
            className={`d-flex  ${
              isMobile
                ? "flex-column"
                : "justify-content-center align-items-center"
            }`}
          >
            <Features text={"Wrinkle-Free Elegance"} />
            <Features text={"Built for Durability"} />
            <Features text={"Breathable Comfort"} />
            <Features text={"Pilling Resistance"} />
          </div>
        </div>
      </Row>
    </Row>
  );
}

export default Section4;
