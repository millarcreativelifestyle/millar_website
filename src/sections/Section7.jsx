import React from "react";
import Row from "react-bootstrap/Row";
import cd from "../assets/cd.png";
import desp from "../assets/desp.png";
import pp from "../assets/pp.png";
import pro from "../assets/pro.png";
import cr from "../assets/cr.png";
import irp from "../assets/irp.png";
import del from "../assets/del.png";
function Section7() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <Row className="mx-0 sec-7 pb-4">
      <Row
        className={`mx-0 d-flex flex-column py-4 ${
          isMobile ? "justify-content-center align-items-center" : ""
        }`}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1
          className={`sec-5-header ${!isMobile ? "ms-4 mt-5 ps-4 " : "px-5"}`}
        >
          Our Process: From
          <br />
          Concept to Creation
        </h1>
      </Row>
      <Row
        className={`mx-0 d-flex px-4 ${
          isMobile && "flex-column justify-content-center align-items-center"
        }`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="d-flex flex-column justify-content-center align-items-center processCard">
          <img src={cd} alt="processImg" className="processImg" />
          <p className="processText">Client Discussion</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center processCard">
          <img src={desp} alt="processImg" className="processImg" />
          <p className="processText">Design & Print Approval</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center processCard">
          <img src={pp} alt="processImg" className="processImg" />
          <p className="processText">Pre-Production</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center processCard">
          <img src={pro} alt="processImg" className="processImg" />
          <p className="processText">Production</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center processCard">
          <img src={cr} alt="processImg" className="processImg" />
          <p className="processText">Checking & Rework</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center processCard">
          <img src={irp} alt="processImg" className="processImg" />
          <p className="processText">Ironing & Packaging</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center processCard">
          <img src={del} alt="processImg" className="processImg" />
          <p className="processText">Dispatch & Delivery</p>
        </div>
      </Row>
    </Row>
  );
}

export default Section7;
