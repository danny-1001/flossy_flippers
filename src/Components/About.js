import React from "react";

function About() {
  return (
    <div>
      <section id="about_us" class=" about_section">
        <div className="container">
          <h2 className="text-center text-white">Our Team</h2>
          <p className="lead text-center text-white mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            eius aspernatur pariatur illo ipsum voluptatem?
          </p>
          <div className="row g-4">
            <div className="col-md">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Rob</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ducimus consequatur, quos sint id officia ad.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">John</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ducimus consequatur, quos sint id officia ad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
