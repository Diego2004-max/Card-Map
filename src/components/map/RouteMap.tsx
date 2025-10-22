"use client";

import { MapContainer, TileLayer, Polyline, CircleMarker, useMap } from "react-leaflet";
import type { LatLng } from "@/lib/geo";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

interface RouteMapProps {
  route: LatLng[];
}

function FitBounds({ route }: { route: LatLng[] }) {
  const map = useMap();
  useEffect(() => {
    if (!route.length) return;
    const latLngs = route.map(([lat, lng]) => ({ lat, lng })) as any;
    // @ts-ignore Leaflet types son algo estrictos
    const bounds = new (window as any).L.LatLngBounds(latLngs);
    map.fitBounds(bounds.pad(0.2));
  }, [map, route]);
  return null;
}

export default function RouteMap({ route }: RouteMapProps) {
  const center = route[Math.floor(route.length / 2)] ?? [40.4168, -3.7038];
  const start = route[0];
  const end = route[route.length - 1];

  return (
    <MapContainer
      center={center as any}
      zoom={16}
      scrollWheelZoom={false}
      className="h-[380px] w-full rounded-3xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Línea de la ruta */}
      <Polyline positions={route as any} weight={6} color="#f59e0b" opacity={0.9} />

      {/* Marcadores */}
      {start && (
        <CircleMarker
          center={start as any}
          radius={8}
          pathOptions={{ color: "#f59e0b", fillColor: "#fff", fillOpacity: 1 }}
        />
      )}
      {end && (
        <CircleMarker
          center={end as any}
          radius={8}
          pathOptions={{ color: "#f59e0b", fillColor: "#f59e0b", fillOpacity: 1 }}
        />
      )}

      <FitBounds route={route} />
    </MapContainer>
  );
}
