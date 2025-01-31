import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// Import the dotenv package and load variables from .env
require('dotenv').config();

// Access variables defined in .env
const apiKey = process.env.API_KEY;

function GoogleMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "API_KEY",
  });

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading Google Maps...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 19.020145856138136, lng: -98.24006775697993 }}
    >
      <Marker
        position={{ lat: 19.020145856138136, lng: -98.24006775697993 }}
      />
    </GoogleMap>
  );
}

export default GoogleMapComponent;
