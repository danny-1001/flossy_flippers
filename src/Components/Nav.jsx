import React from "react";
import "bootstrap/js/src/collapse.js";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand nav_logo">
            Shoe Store Logo
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto navbar_items">
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/flossy.flippers/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#about_us" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">
                  Questions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
