import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerLogo from "../assets/flogo.png";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const whatsappNumber = "918075578701";
    const whatsappMessage = `Name: ${name}. Email: ${email} Message: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="footer" id="footer">
      <Row className="mx-0 py-5 d-flex justify-content-between px-4 ">
        <Col
          md={3}
          sm={12}
          className="mx-0 d-flex flex-column  mb-sm-3 footer-column justify-content-between"
        >
          {/* <img
            src={footerLogo}
            alt="footer-logo"
            style={{ width: "147px", height: "54px" }}
          /> */}

          <Row className="mx-0 d-flex flex-column  align-items-start">
            <p
              className="m-0 footer-text p-0  mb-2 footer-border pb-1 fw-bold"
              style={{ fontSize: "18px" }}
            >
              Contact Us
            </p>
            <div className="d-flex align-items-center px-0">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ width: "15px" }}
                className="text-light ps-0 pe-2"
              />
              <p className="m-0 footer-text p-0">
                <a
                  href="tel:+918075578701"
                  className="text-light text-decoration-none"
                >
                  +91 8075578701
                </a>
              </p>
            </div>
            <div className="d-flex align-items-center px-0  pb-1">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: "15px" }}
                className="text-light ps-0 pe-2"
              />
              <p className="m-0 footer-text p-0">
                <a
                  href="mailto:info@millarcreativelifestyle.com"
                  className="m-0 footer-text p-0"
                  style={{ textDecoration: "none" }}
                >
                  info@millarcreativelifestyle.com
                </a>
              </p>
            </div>
            <Row className="mx-0 d-flex flex-column  align-items-center p-0 mt-md-5">
              <div className="d-flex  px-0 ">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ width: "15px" }}
                  className="text-light ps-0 pe-2 pt-1"
                />
                <p className="m-0 footer-text p-0">
                  Ground Floor, 26/37, Kattiparambil House, Cheranallur Ferry
                  Road, Opp Kasthurba English Medium School, Manjummel,
                  Ernakulam, Kerala, India Pin 683501
                </p>
              </div>
            </Row>
            <Row className="mx-0 d-flex align-items-center mt-md-5 pt--md-3">
              <p className="m-0 footer-text-2 p-0">
                GSTIN: 32AARCM2845FIZF
                <br />
                CIN NO: U13999KL2023PTC083459
                <br />
                IEC: AARCM2845F
              </p>
            </Row>
          </Row>
        </Col>
        <Col md={3} sm={12} className="mx-0 d-flex flex-column footer-column">
          <Row className="mx-0 d-flex align-items-center justify-content-center">
            <p
              className="m-0 footer-text p-0 text-center mb-3 pb-2 fw-bold"
              style={{ fontSize: "18px" }}
            >
              Built on Certified Inputs, Backed by Quality
            </p>
          </Row>
          <Row className="mx-0 d-flex align-itmes-center justify-content-center">
            <img
              src={c1}
              alt="certification-logo"
              style={{ width: "167px", height: "65px" }}
              className="p-0"
            />
          </Row>
          <Row className="mx-0 d-flex d-flex align-itmes-center justify-content-center">
            <img
              src={c2}
              alt="certification-logo"
              className="footer-certification-logo p-0 me-2"
            />

            <img
              src={c3}
              alt="certification-logo"
              className="footer-certification-logo p-0"
            />
          </Row>
          <Row className="mx-0 d-flex mt-3 d-flex align-itmes-center justify-content-center">
            <img
              src={c4}
              alt="certification-logo"
              className="footer-certification-logo p-0 me-2"
            />
            <img
              src={c6}
              alt="certification-logo"
              className="footer-certification-logo p-0 me-2 w-auto"
            />
          </Row>
          <Row className="mx-0 d-flex mt-3 d-flex align-itmes-center justify-content-center">
            <img
              src={c7}
              alt="certification-logo"
              className="footer-certification-logo p-0 w-auto"
            />
          </Row>
          <p className="text-light mt-2 text-center">
            The products and fabrics we maintain in production are sourced from
            certified suppliers, as listed.
          </p>
        </Col>
        <Col md={3} sm={12} className="mx-0 d-flex flex-column">
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.491546497385!2d76.29264937479446!3d10.058749490049681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ded96c15e4f%3A0x6389cfac01bc2b53!2sMillar%20Creative%20Lifestyle%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1756961197598!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
        <Col md={3} sm={12} className="mx-0  d-flex flex-column ">
          <form onSubmit={handleSubmit}>
            <label className="footer-text fw-bold pb-2">Drop Us A Line</label>
            <p className="footer-text-3 pb-2">
              We're happy to answer any questions you have or provide you with
              an estimate. Just send us a message in the form below with any
              questions you may have.
            </p>
            <input
              type="text"
              className="form-control bg-transparent rounded-0 text-light mb-4"
              placeholder="Name"
              style={{ border: "1px solid #C0C0C0" }}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="form-control bg-transparent rounded-0 text-light mb-4"
              placeholder="Email"
              style={{ border: "1px solid #C0C0C0" }}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="form-control bg-transparent rounded-0 text-light mb-4"
              placeholder="Message"
              style={{
                border: "1px solid #C0C0C0",
                color: "white",
                height: "130px",
              }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="d-flex justify-content-end">
              <button type="submit" className="footer-button mb-2">
                Submit
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
