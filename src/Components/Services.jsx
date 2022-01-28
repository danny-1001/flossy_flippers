import React from "react";

function Services() {
  return (
    <div>
      <section className="p-5 services_section">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">Shoes</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Natus minima dolorum, quod amet veritatis aliquid.
                  </p>
                  <a
                    href="https://www.instagram.com/flossy.flippers/"
                    className="btn services_btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3 className="card-title mb-3">Streetwear</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci, optio exercitationem id fugit facere quod, sit
                    repudiandae odio nemo et eligendi pariatur dolore ad
                    sapiente? Doloremque nemo laboriosam mollitia ab.
                  </p>
                  <a
                    href="https://www.instagram.com/flossy.flippers/"
                    className="btn services_btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3 className="card-title mb-3">Shipping</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Natus minima dolorum, quod amet veritatis aliquid.
                  </p>
                  <a
                    href="https://www.instagram.com/flossy.flippers/"
                    className="btn services_btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
