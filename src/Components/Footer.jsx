import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer_section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Mainlocation:</span> Brooklyn
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Phone:</span> Brooklyn
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Email:</span> Brooklyn
                </li>
              </ul>
            </div>
            <div className="col-md">
              <div id="map"></div>
            </div>
          </div>
        </div>
        <section className="p-5 text-white text-center position-relative">
          <div className="container">
            <p className="lead">Copyright &copy; 2021</p>
            <a
              href="https://www.instagram.com/flossy.flippers/"
              target="_blank"
            >
              <i className="bi bi-instagram h1"></i>
            </a>
            <a href="#" className="position-absolute bottom-0 end-0 p-5">
              <i className="bi bi-arrow-up-circle h1"></i>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
