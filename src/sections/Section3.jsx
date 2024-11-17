import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import teamImg from "../assets/group-img.webp";
function Section3() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <Row className="m-0 sec-3 w-100" id="about">
      <Col
        lg={6}
        md={12}
        sm={12}
        className={`d-flex flex-column p-5 ${
          isMobile ? "justify-content-center align-items-center" : ""
        }`}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className={`sec-3-header ${!isMobile ? "ms-5 mt-2 " : ""}`}>
          Styles For Every Occasion
        </h1>
        <p className={`sec-3-text ${!isMobile ? "ms-5 mt-4 " : ""}`}>
          Millar Creative Lifestyle is your go-to partner for high-quality,
          customizable apparel for corporate events, sports, and celebrations.
          With state-of-the-art factories, premium fabrics, and eco-friendly
          practices, we deliver durable, comfortable clothing in quantities from
          100 to 100,000, all while maintaining export-quality standards and
          extensive customization.
        </p>
      </Col>
      <Col
        lg={6}
        md={12}
        sm={12}
        className="d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={teamImg} alt="image" className="team-img rounded-4" />
      </Col>
    </Row>
  );
}

export default Section3;
