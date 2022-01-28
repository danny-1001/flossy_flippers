import React from "react";

function Banner() {
  return (
    <div>
      <section className="banner_section text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between banner_text">
            <div>
              <h1>
                <span className="span_shoes">Shoes</span> for everyone
              </h1>
              <p className="lead my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                ratione officiis exercitationem quis tempora, <br /> quo
                corporis dicta, <br /> animi et nisi fugiat pariatur dolore
                modi, <br />
                reprehenderit reiciendis. <br /> Iusto in dolore distinctio?
              </p>
              <a
                href="https://www.instagram.com/flossy.flippers/"
                class="btn banner_btn"
              >
                Shop Now
              </a>
            </div>
            <img
              className="img-fluid w-25 d-none d-sm-block"
              src="/images/eye.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
