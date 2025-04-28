import React, { useEffect } from "react";
import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
    margin: "0 auto",
};

// const center = {
//     lat: 20.2899, // Latitude
//     lng: 85.862, // Longitude
// };

export default function GMap({ lat, lon }: { lat: number, lon: number }) {

    const [yourLocation, setYourLocation] = React.useState({ lat: 0, lng: 0 });

    useEffect(() => {
        // Get the user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setYourLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const path = [
        { lat, lng: lon },  // First point
        // { lat:23, lng: 43 },  // First point
        { lat: yourLocation.lat !== 0 ? yourLocation?.lat : lat, lng: yourLocation.lng !== 0 ? yourLocation?.lng : lon },  // Second point
    ];

    console.log(lat, lon);
    return (
        <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY ?? ""}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat, lng: lon }}
                zoom={15}
            >
                {/* Add a marker */}
                <Marker position={{ lat, lng: lon }} icon={"https://img.icons8.com/isometric/50/bus.png"} />
                <Marker position={yourLocation} icon={"https://img.icons8.com/?size=25&id=w8DkIkRlcHuA&format=png&color=000000"} />
                <Polyline
                    path={path}
                    options={{
                        strokeColor: "#8080FF",
                        strokeOpacity: 1,
                        strokeWeight: 4,
                    }}
                />
            </GoogleMap>
        </LoadScript>
    );
}