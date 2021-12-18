import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <div className="main">
        <section className="main-section">
          <h1 className="main-section__title my-3">Save the meal</h1>
          <p className="main-section__description mb-4">
            <span>You can do better,</span>
            <span> one bite at a time!</span>
          </p>
          <div className="btn main-section__btn ">
            <Link to="/foods">
              <button
                type="button"
                className="btn  main-section__btn-def main-section__btn1"
              >
                Find out more
              </button>
            </Link>
            <Link to="/store">
              <button
                type="button"
                className="btn  main-section__btn-def main-section__btn2"
              >
                Shop now
              </button>
            </Link>
          </div>
        </section>
        <div>
          <a href="#Content">
            <div className="main-section__pointer-down">
              <i className="fas fa-angle-double-down "></i>
            </div>
          </a>
          <svg
            className="main-overlay"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
          >
            <path
              fill="#94cfa1"
              fill-opacity="1"
              d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,144C800,139,880,181,960,176C1040,171,1120,117,1200,112C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Main;
