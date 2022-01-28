import React from "react";

function Footer() {
  return (
    <div>
      <section class="p-5 contact-info">
        <div class="container">
          <div class="row g-4">
            <div class="col-md">
              <h2 class="text-center mb-4">Contact info</h2>
              <ul class="list-group list-group-flush lead">
                <li class="list-group-item">
                  <span class="fw-bold">Mainlocation:</span> Brooklyn
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Phone:</span> Brooklyn
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Email:</span> Brooklyn
                </li>
              </ul>
            </div>
            <div class="col-md">
              <div id="map"></div>
            </div>
          </div>
        </div>
        <footer class="p-5 text-white text-center position-relative">
          <div class="container">
            <p class="lead">Copyright &copy; 2021 Website Yo!</p>
            <a>
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" class="position-absolute bottom-0 end-0 p-5">
              <i className="bi bi-arrow-up-circle h1"></i>
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
