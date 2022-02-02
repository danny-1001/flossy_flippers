import React from "react";
import ShoeIcon from "./Icons/shoe_icon.svg";
import ShirtIcon from "./Icons/shirt_icon.svg";
import ShippingIcon from "./Icons/shipping_icon.svg";

function Services() {
  return (
    <div>
      <section className="services_section" id="services">
        <div className="container">
          <div className="row text-center g-4">
            <h2 className="text-center ">Services</h2>
            <div className="col-md">
              <div className="card card_background ">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <img src={ShoeIcon} alt="Icon of a shoe" className="icon" />
                  </div>
                  <h3 className="card-title mb-3">Shoes</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, cumque repellat. Excepturi esse dignissimos
                    quisquam aliquam id accusantium sapiente illum veritatis
                    laboriosam consectetur, accusamus numquam maxime, quis
                    necessitatibus odio? Excepturi, beatae repellendus qui sed
                    nemo tempora placeat quo, pariatur doloremque necessitatibus
                    culpa laboriosam libero doloribus dolorum praesentium
                    distinctio id ipsum non voluptas, voluptates impedit
                    adipisci corrupti atque. Ipsum, provident ullam!
                  </p>
                  <a
                    href="https://www.instagram.com/flossy.flippers/"
                    className="btn services_btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card card_background ">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <img
                      src={ShirtIcon}
                      alt="Icon of a shirt"
                      className="icon"
                    />
                  </div>
                  <h3 className="card-title mb-3">Streetwear</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, cumque repellat. Excepturi esse dignissimos
                    quisquam aliquam id accusantium sapiente illum veritatis
                    laboriosam consectetur, accusamus numquam maxime, quis
                    necessitatibus odio? Excepturi, beatae repellendus qui sed
                    nemo tempora placeat quo, pariatur doloremque necessitatibus
                    culpa laboriosam libero doloribus dolorum praesentium
                    distinctio id ipsum non voluptas, voluptates impedit
                    adipisci corrupti atque. Ipsum, provident ullam!
                  </p>
                  <a
                    href="https://www.instagram.com/flossy.flippers/"
                    className="btn services_btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card card_background ">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <img
                      src={ShippingIcon}
                      alt="Icon of a sealed box hovering over a hand"
                      className="icon"
                    />
                  </div>
                  <h3 className="card-title mb-3">Shipping</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, cumque repellat. Excepturi esse dignissimos
                    quisquam aliquam id accusantium sapiente illum veritatis
                    laboriosam consectetur, accusamus numquam maxime, quis
                    necessitatibus odio? Excepturi, beatae repellendus qui sed
                    nemo tempora placeat quo, pariatur doloremque necessitatibus
                    culpa laboriosam libero doloribus dolorum praesentium
                    distinctio id ipsum non voluptas, voluptates impedit
                    adipisci corrupti atque. Ipsum, provident ullam!
                  </p>
                  <a
                    href="https://www.instagram.com/flossy.flippers/"
                    className="btn services_btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
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
