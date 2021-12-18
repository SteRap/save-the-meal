import React from "react";
import text from "../Media/floating-text-grey.svg";
import logo from "../Media/logo_transparent_crop.png";

function CTA() {
  return (
    <div className="cta">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#94CFA1"
          fill-opacity="1"
          d="M0,64L40,80C80,96,160,128,240,133.3C320,139,400,117,480,96C560,75,640,53,720,74.7C800,96,880,160,960,160C1040,160,1120,96,1200,74.7C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="cta_content">
        <h2 className="cta_content-title">
          Our door is always open. Want to thrive on a Plant-based diet? Have
          questions? There’s a real person to hear you, on the other side →
        </h2>
        <p className="cta_content-subtitle">
          Hit us up day or night. We want to hear what you think -- questions
          and all.
        </p>
        <div className="cta_spinner">
          <div className="cta_spinner-wrapper">
            <img src={text} className="cta_spinner-text" alt="contact us" />
            <img src={logo} className="cta_spinner-logo" alt="Company logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CTA;
