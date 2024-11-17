import React from "react";
import Sec2Img from "../assets/Sec2Img.png";
function Section2() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-4">
      <img
        src={Sec2Img}
        alt="image"
        style={{ width: "86px", height: "82px" }}
        data-aos="fade-down"
        data-aos-duration="1000"
      />
      <p className="sec2-text mt-3" data-aos="fade-up" data-aos-duration="1000">
        At Millar Creative Lifestyle, we simplify event planning with premium,
        custom-designed apparel that embodies each client's unique style. We
        prioritize quality, creativity, and eco-friendly standards to deliver
        exceptional, sustainable products.
      </p>
    </div>
  );
}

export default Section2;
