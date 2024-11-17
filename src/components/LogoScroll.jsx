import React from "react";
import "../App.css";
import clogo1 from "../assets/clogo1.png";
import clogo2 from "../assets/clogo2.png";
import clogo3 from "../assets/clogo3.png";
import clogo4 from "../assets/clogo4.png";
import clogo5 from "../assets/clogo5.png";
import clogo6 from "../assets/clogo6.png";
import clogo7 from "../assets/clogo7.png";
import clogo8 from "../assets/clogo8.png";
import clogo9 from "../assets/clogo9.png";
import clogo10 from "../assets/clogo10.png";
import clogo11 from "../assets/clogo11.png";
import clogo12 from "../assets/clogo12.jpg";
import clogo13 from "../assets/clogo13.png";
import clogo14 from "../assets/clogo14.jpeg";
const LogoScroll = () => {
  const logos = [
    clogo1,
    clogo2,
    clogo3,
    clogo4,
    clogo5,
    clogo6,
    clogo7,
    clogo8,
    clogo9,
    clogo10,
    clogo11,
    clogo12,
    clogo13,
    clogo14,
  ];

  return (
    <div className="scroll-wrapper">
      <div className="logo-container">
        {logos.concat(logos).map((logo, index) => (
          <img
            src={logo}
            alt={`Client ${index}`}
            className="logo mx-3"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoScroll;
