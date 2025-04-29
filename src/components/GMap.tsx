import React, { useEffect, useState } from "react";
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";
import GDirection from "./GDirection";

const containerStyle = {
    width: "100%",
    height: "400px",
    // height: "100%",
    margin: "0 auto",
};

// const center = {
//     lat: 20.2899, // Latitude
//     lng: 85.862, // Longitude
// };

export default function GMap({ lat, lon }: { lat: number, lon: number }) {

    const [yourLocation, setYourLocation] = useState({ lat: 0, lng: 0 });
    // const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);

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

        // console.log(process.env.GOOGLE_API_KEY)
    }, []);


    // const handleDirectionsCallback = (response: google.maps.DirectionsResult | null, status: google.maps.DirectionsStatus) => {
    //     if (status === "OK" && response) {
    //         setDirectionsResponse(response);
    //         console.log(response)
    //     } else {
    //         console.error("Directions request failed due to " + status);
    //     }
    // };


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

                {/* {yourLocation.lat !== 0 && (
                    <DirectionsService
                        options={{
                            origin: yourLocation,
                            destination: { lat, lng: lon },
                            travelMode: google.maps.TravelMode.DRIVING,
                        }}
                        callback={handleDirectionsCallback}
                    />
                )}

                {directionsResponse && (
                    <DirectionsRenderer
                        options={{
                            directions: directionsResponse,
                        }}
                    />
                )}*/}

            </GoogleMap> 

            <GDirection lat={lat} lon={lon} />
        </LoadScript>
    );
}