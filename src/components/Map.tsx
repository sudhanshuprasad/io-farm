
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

interface MapProps {
    latitude: number;
    longitude: number;
    zoom?: number;
    height?: string;
    width?: string;
}

const Map = ({
    latitude,
    longitude,
    zoom = 13,
    height = "400px",
    width = "100%",
}: MapProps) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const marker = useRef<mapboxgl.Marker | null>(null);
    const [mapboxToken, setMapboxToken] = useState<string>("");

    useEffect(() => {
        // Function to initialize the map
        const initializeMap = () => {
            if (!mapContainer.current || !mapboxToken) return;

            // Initialize the map only once
            if (map.current) return;

            mapboxgl.accessToken = mapboxToken;

            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [longitude, latitude],
                zoom: zoom,
            });

            // Add navigation controls
            map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

            // Add a marker
            marker.current = new mapboxgl.Marker({ color: "#0EA5E9" })
                .setLngLat([longitude, latitude])
                .addTo(map.current);

            // Resize the map when container resizes
            map.current.on("load", () => {
                window.addEventListener("resize", () => {
                    map.current?.resize();
                });
            });
        };

        initializeMap();

        // Cleanup function
        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [latitude, longitude, zoom, mapboxToken]);

    // Update marker position when lat/long changes
    useEffect(() => {
        if (marker.current && map.current) {
            marker.current.setLngLat([longitude, latitude]);
            map.current.flyTo({
                center: [longitude, latitude],
                essential: true,
                duration: 1000,
            });
        }
    }, [latitude, longitude]);

    return (
        <div className="w-full flex flex-col gap-4">
            {!mapboxToken && (
                <div className="bg-iot-lightGray p-4 rounded-md">
                    <p className="text-sm text-gray-600 mb-2">
                        Please enter your Mapbox public token to display the map:
                    </p>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Mapbox public token"
                        onChange={(e) => setMapboxToken(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-2">
                        Get your token at <a href="https://mapbox.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>
                    </p>
                </div>
            )}
            <div
                ref={mapContainer}
                style={{ height, width }}
                className={`rounded-lg border border-gray-200 shadow-sm overflow-hidden ${!mapboxToken ? 'bg-gray-100 flex items-center justify-center' : ''}`}
            >
                {!mapboxToken && (
                    <div className="text-center p-4 flex items-center gap-2">
                        <MapPin className="text-iot-blue" />
                        <span className="text-gray-500">Enter Mapbox token to view map</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Map;
