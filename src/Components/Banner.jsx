import React from "react";
import Shoe from "./Images/orange_shoe.png";

function Banner() {
  return (
    <div>
      <section id="banner" className="banner_section text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between banner_text">
            <div>
              <h1>Shoes for everyone</h1>
              <p className=" my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                ratione officiis exercitationem quis tempora, quo corporis
                dicta, <br /> animi et nisi fugiat pariatur dolore modi,
                reprehenderit reiciendis. Iusto in dolore distinctio?
              </p>
              <a
                href="https://www.instagram.com/flossy.flippers/"
                class="btn banner_btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop Now
              </a>
            </div>
            <img
              src={Shoe}
              alt="Logo"
              className="img-fluid w-50 d-none d-sm-block"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
