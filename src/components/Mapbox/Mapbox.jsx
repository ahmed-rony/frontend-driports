import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkerAlt } from "react-icons/fa";

import React, { useState } from "react";

const Mapbox = ({ lat, long }) => {
  const [viewport, setViewport] = useState({
    latitude: lat || 48.858093,
    longitude: long || 2.294694,
    zoom: 13,
  });
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactMapGl
        {...viewport}
        mapboxAccessToken="pk.eyJ1Ijoic2VjdXJlYXBwIiwiYSI6ImNsaXo4MWtmMjA0eHQzZ3FiZDRwNTh5OTMifQ.NAKC3bDfGRKqN55TVqnHug"
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker
          latitude={lat}
          longitude={long}
          offsetLeft={-3.5 * viewport.zoom}
          offsetTop={-7 * viewport.zoom}
        >
          <FaMapMarkerAlt
            style={{
              fontSize: 3 * viewport.zoom,
              color: "#eb2f2f",
              cursor: "pointer",
            }}
          />
        </Marker>
      </ReactMapGl>
    </div>
  );
};

export default Mapbox;
