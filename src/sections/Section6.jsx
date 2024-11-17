import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pimaCotton from "../assets/pima.png";
import orgCotton from "../assets/org.png";
import polyCotton from "../assets/poly.png";
import recycledPolyster from "../assets/rpoly.png";
import bamboo from "../assets/bam.png";
function Section6() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <Row className="mx-0 sec-6 pb-4">
      <Row className="mx-0" data-aos="fade-down" data-aos-duration="1000">
        <p className="fabric-text text-center mb-4">
          From Soft to Sturdy: Fabrics for Every Need
        </p>
      </Row>
      <Row
        className="mx-0 d-flex justify-content-center align-items-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center mx-2"
          style={{ width: "fit-content" }}
        >
          <img src={pimaCotton} alt="fabric" className="fabric-img" />
          <p className="mb-0 fabric-sub-txt">
            PIMA
            <br />
            COTTON
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center mx-2"
          style={{ width: "fit-content" }}
        >
          <img src={orgCotton} alt="fabric" className="fabric-img" />
          <p className="mb-0 fabric-sub-txt">
            100% ORGANIC
            <br />
            COTTON
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center mx-2"
          style={{ width: "fit-content" }}
        >
          <img src={polyCotton} alt="fabric" className="fabric-img" />
          <p className="mb-0 fabric-sub-txt">
            POLY
            <br />
            COTTON
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center mx-2"
          style={{ width: "fit-content" }}
        >
          <img src={bamboo} alt="fabric" className="fabric-img" />
          <p className="mb-0 fabric-sub-txt">
            BAMBOO
            <br />
            FABRIC
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center mx-2"
          style={{ width: "fit-content" }}
        >
          <img src={recycledPolyster} alt="fabric" className="fabric-img" />
          <p className="mb-0 fabric-sub-txt">
            RECYCLED
            <br />
            POLYSTER
          </p>
        </div>
      </Row>
      <Row className="mx-0" data-aos="fade-up" data-aos-duration="1000">
        {isMobile ? (
          <p className="fabric-sub-2 my-3">
            See Something You Like? There’s Plenty More to Discover!
          </p>
        ) : (
          <p className="fabric-sub-2 my-3">
            See Something You Like? There’s Plenty
            <br />
            More to Discover!
          </p>
        )}
      </Row>
    </Row>
  );
}

export default Section6;
