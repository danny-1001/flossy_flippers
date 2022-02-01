import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer_section">
        <section className="p-5 text-white text-center position-relative">
          <div className="container">
            <a href="#" target="_blank">
              <i className="bi bi-facebook h1"></i>
            </a>
            <a
              href="https://www.instagram.com/flossy.flippers/"
              target="_blank"
            >
              <i className="bi bi-instagram h1"></i>
            </a>
            <a href="#" className="position-absolute end-0">
              <i className="bi bi-arrow-up-circle d-none d-sm-block h1"></i>
            </a>
            <p className="copyright">Copyright &copy; 2021</p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
