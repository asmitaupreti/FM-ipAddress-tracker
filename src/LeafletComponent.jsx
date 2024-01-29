import { useEffect, useRef } from "react";

// Here's our Mapbox imports
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customMapIcon from "./assets/icon-location.svg";

const LeafletComponent = ({ data }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    if (!mapRef.current) {
      // Initialize the map with the fetched location
      mapRef.current = L.map(mapContainerRef.current).setView(
        [data?.location?.lat || 0, data?.location?.lng || 0],
        13
      );

      // Add the OpenStreetMap tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
      }).addTo(mapRef.current);

      // Create a custom icon for the marker
      const customIcon = L.icon({
        iconUrl: customMapIcon,
        iconSize: [25, 30], // Adjust the size based on your icon dimensions
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      // Display a marker at the fetched location with the custom icon
      markerRef.current = L.marker(
        [data?.location?.lat || 0, data?.location?.lng || 0],
        {
          icon: customIcon,
        }
      ).addTo(mapRef.current);
    } else {
      // If the map is already initialized, update its view
      mapRef.current.setView(
        [data?.location?.lat || 0, data?.location?.lng || 0],
        13
      );

      // Update the marker position
      markerRef.current.setLatLng([
        data?.location?.lat || 0,
        data?.location?.lng || 0,
      ]);
    }
  }, [data]); // Re-render the map when the location changes

  return (
    <div ref={mapContainerRef} className="w-full h-[650px] bottom-20 z-0 " />
  );
};

export default LeafletComponent;
