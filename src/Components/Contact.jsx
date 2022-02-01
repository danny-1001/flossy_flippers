import React from "react";

function Contact() {
  return (
    <div>
      <section className="p-5 contact_info">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact info</h2>
              <ul className="list-group list-group-flush lead contact_list">
                <li className="list-group-item contact_list_item">
                  <span className="fw-bold">Mainlocation:</span> Brooklyn
                </li>
                <li className="list-group-item contact_list_item">
                  <span className="fw-bold">Phone:</span> 718.718.7187
                </li>
                <li className="list-group-item contact_list_item">
                  <span className="fw-bold">Email:</span> email@email.com
                </li>
              </ul>
            </div>
            <div className="col-md">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
