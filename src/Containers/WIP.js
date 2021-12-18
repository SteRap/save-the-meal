import React from "react";
import text from "../Media/go_home.png";
import logo from "../Media/logo_transparent_crop.png";
import { Link } from "react-router-dom";

function WIP() {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="wip">
      <div className="wip_topper"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318">
        <path
          className="wip_wave"
          fill="#94CFA1"
          fill-opacity="1"
          d="M0,64L40,80C80,96,160,128,240,133.3C320,139,400,117,480,96C560,75,640,53,720,74.7C800,96,880,160,960,160C1040,160,1120,96,1200,74.7C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="wip_content">
        <h2 className=" wip_content_title">
          This page is still under construction! We apologize for the
          inconvenient.
        </h2>

        <div className="wip_image"></div>
        <p className=" wip_content-subtitle">
          We hope to see you here again! In the meantime, you can navigate
          through the other pages.
        </p>
        <div className="wip_spinner">
          <Link to="/">
            <div className="wip_spinner-wrapper">
              <img src={text} className="wip_spinner-text" alt="contact us" />
              <img src={logo} className="cta_spinner-logo" alt="Company logo" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default WIP;
