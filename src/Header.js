import React from "react";
import logo from "./Media/logo_transparent.png";
import { Link } from "react-router-dom";

function Header() {
  const [navbar, setNavbar] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);

  const changeBcgNav = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
      setCollapse(false);
    } else {
      setNavbar(false);
      setCollapse(true);
    }
  };

  const onCollapse = () => {
    if (collapse === false && navbar === false) {
      setCollapse(true);
      setNavbar(true);
    } else if (navbar === false) {
      setNavbar(true);
    } else if (collapse === true && navbar === true) {
      setNavbar(false);
      setCollapse(false);
    }
  };

  window.addEventListener("scroll", changeBcgNav);

  return (
    <nav
      className={
        navbar
          ? "navbar navbar-expand-md fixed-top navbar-light py-0 px-2 m-0 active"
          : "navbar navbar-expand-md fixed-top navbar-light py-0 px-2 m-0"
      }
    >
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="STM logo" className=" navbar__logo " />
      </Link>
      <button
        onClick={onCollapse}
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse active" id="collapsibleNavbar">
        <ul className="navbar-nav navbar-collapse_left navbar_item ">
          <li className="nav-item me-1 me-lg-2 ">
            <Link to="/save-the-meal/" className="nav-link">
              <span className="d-sm-block ms-1">Home</span>
            </Link>
          </li>
          <li className="nav-item me-1 me-lg-2">
            <Link to="/foods" className="nav-link ">
              <span className="d-sm-block ms-1">Foods</span>
            </Link>
          </li>
          <li className="nav-item me-1 me-lg-2">
            <Link to="/store" className="nav-link ">
              <span className="d-sm-block ms-1">Store</span>
            </Link>
          </li>
          <li className="nav-item me-1 me-lg-2">
            <Link to="/recipes" className="nav-link ">
              <span className="d-sm-block ms-1">Recipes</span>
            </Link>
          </li>
          <li className="nav-item me-1 me-lg-2">
            <Link
              to="/nowaste"
              className="nav-link d-sm-flex align-items-sm-center"
              href="#"
            >
              <strong className="d-sm-block ms-1">
                <i> Don't waste it, taste it!</i>
              </strong>
              <span
                className={
                  navbar
                    ? "badge rounded-pill badge-notification active"
                    : "badge rounded-pill badge-notification "
                }
              >
                new
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
