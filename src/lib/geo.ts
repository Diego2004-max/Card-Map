export type LatLng = [number, number];

// Calcula distancia total de una ruta en metros (fórmula Haversine)
export function polylineLengthMeters(points: LatLng[]): number {
  const R = 6371e3; // radio de la Tierra en metros
  const toRad = (d: number) => (d * Math.PI) / 180;
  let dist = 0;
  for (let i = 1; i < points.length; i++) {
    const [lat1, lon1] = points[i - 1];
    const [lat2, lon2] = points[i];
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    dist += R * c;
  }
  return dist;
}

export const metersToKm = (m: number) => (m / 1000).toFixed(2);
