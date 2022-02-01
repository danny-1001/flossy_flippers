import React from "react";

function About() {
  return (
    <div>
      <section id="about_us" class=" about_section">
        <div className="container">
          <h2 className="text-center text-white">Our Team</h2>
          <p className="lead text-center text-white mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus reprehenderit neque dolores quas nobis commodi nihil!
          </p>
          <div className="row g-4">
            <div className="col-md">
              <div className="card about_card">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Rob</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione numquam provident assumenda eum similique error
                    voluptates distinctio veniam iure explicabo laudantium, fuga
                    at neque quas dolores voluptatum! Nisi mollitia minus
                    quisquam omnis! Facilis, error officiis obcaecati explicabo
                    eligendi dolor perspiciatis!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card about_card">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">John</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione numquam provident assumenda eum similique error
                    voluptates distinctio veniam iure explicabo laudantium, fuga
                    at neque quas dolores voluptatum! Nisi mollitia minus
                    quisquam omnis! Facilis, error officiis obcaecati explicabo
                    eligendi dolor perspiciatis!
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
