import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
    margin: "0 auto",
};

const center = {
    lat: 20.2899, // Latitude
    lng: 85.862, // Longitude
};

export default function GMap() {
    return (
        <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY || ""}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
            >
                {/* Add a marker */}
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}