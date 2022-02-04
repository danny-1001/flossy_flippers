import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFubnkwMTEwIiwiYSI6ImNrejdsdzAyczFidWwydXBoNmc5Ymo3OGYifQ.9qw-fhObc9WJJL_m3e3PaQ";
function Contact() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-73.9442);
  const [lat, setLat] = useState(40.6782);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  //
  return (
    <div>
      <section className="p-5 contact_info">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact info</h2>
              <ul className="text-left list-group list-group-flush lead contact_list">
                <li className="list-group-item contact_list_item">
                  <span className="fw-bold">Mainlocation:</span> Brooklyn, New
                  York
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
              <div id="map">
                <div>
                  <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                  </div>
                  <div ref={mapContainer} className="map-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
