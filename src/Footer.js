import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_upper_curved">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 317">
          <path
            fill="#94CFA1"
            fill-opacity="1"
            d="M0,128L40,144C80,160,160,192,240,176C320,160,400,96,480,101.3C560,107,640,181,720,181.3C800,181,880,107,960,69.3C1040,32,1120,32,1200,37.3C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="footer_section">
        <div className="footer_newsletter_form footer_element">
          <div className="footer_newsletter_form-text">
            <h3>Newsletter</h3>
          </div>
          <div className="footer_newsletter_form-input">
            <form action="#" />
            <input
              placeholder="E-mail"
              type="email"
              className="footer_newsletter_form-input-email"
            />
            <button
              type="submit"
              className="footer_newsletter_form-input-submit"
            >
              " Subscribe"
            </button>
          </div>
          <div className="form-check footer_newsletter_form-accept">
            <input
              className="form-check-input footer_newsletter_form-accept-box"
              type="checkbox"
              value=""
              id="flexPrivacyPolicy"
            />
            <label
              className="form-check-label footer_newsletter_form-accept-pp"
              for="flexPrivacyPolicy"
            >
              <span>
                By subscribing you agree to our <span>Privacy Policy</span>.{" "}
              </span>
              <span>You may unsubscribe at any time.</span>
            </label>
          </div>
        </div>
        <div className="footer_element footer_main">
          <div className="footer_main-btn">
            <button className="footer_main-button footer_main-button1">
              Shop
            </button>
            <button className="footer_main-button footer_main-button2">
              Recipes
            </button>
          </div>
          <p className="footer_main-pages">Learn</p>
          <p className="footer_main-pages">Don't waste it, taste it</p>
          <p className="footer_main-pages">Blog</p>
          <p className="footer_main-pages">Press</p>
          <p className="footer_main-pages">Contact</p>
          <p className="footer_main-pages">My Account</p>
          <p className="footer_main-pages">Reviews</p>
          <p className="footer_main-pages">FAQs</p>
          <p className="footer_main-pages">Shipping and Returns</p>
          <p className="footer_main-pages">
            Privacy Policy | Terms and Conditions
          </p>
          <p className="footer_main-pages">Careers</p>
        </div>
        <div className="footer_element footer_social">
          <h3 className="footer_socials">Facebook</h3>
          <h3 className="footer_socials">Instagram</h3>
          <h3 className="footer_socials">Youtube</h3>
        </div>
      </div>
      <div className="footer_rights">
        <p>All rights reserved ® 2021</p>
      </div>
    </footer>
  );
}
export default Footer;

/* <i className="far fa-arrow-alt-circle-right footer_newsletter_form-input-submit"></i> */
