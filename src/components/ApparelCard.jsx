import React from "react";

function ApparelCard({ img, text }) {
  return (
    <div className="apparel-card pt-5 px-4 pb-4 mt-4 d-flex flex-column justify-content-center align-items-center">
      <img src={img} alt="img" className="apparel-img" />
      <h6 className="m-0 apparel-card-text">{text}</h6>
    </div>
  );
}

export default ApparelCard;
