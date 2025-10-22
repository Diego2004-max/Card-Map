"use client";

import dynamic from "next/dynamic";
import { polylineLengthMeters, metersToKm, LatLng } from "@/lib/geo";
import { Flame, Footprints, Timer } from "lucide-react";
import StatPill from "@/components/ui/StatPill";

const RouteMap = dynamic(() => import("@/components/map/RouteMap"), { ssr: false });

const ROUTE: LatLng[] = [
  [40.417624, -3.705218],
  [40.417170, -3.703615],
  [40.416580, -3.703920],
  [40.416150, -3.704950],
  [40.415880, -3.706000],
  [40.416220, -3.706720],
  [40.416780, -3.706380],
  [40.417420, -3.706900],
];

export default function RunningCard() {
  const distanceMeters = polylineLengthMeters(ROUTE);
  const distanceKm = metersToKm(distanceMeters);

  return (
    <div className="relative w-[380px] max-w-[95vw]">
      <div className="rounded-[40px] bg-white p-4 shadow-2xl ring-1 ring-zinc-100 overflow-hidden">
        {/* MAPA */}
        <div className="relative overflow-hidden rounded-[28px] shadow-sm">
          <RouteMap route={ROUTE} />

          {/* CHIP DE DISTANCIA */}
          <div className="absolute bottom-5 left-5 select-none rounded-[14px] bg-amber-400 px-4 py-2 text-[15px] font-semibold text-white shadow-md">
            {distanceKm} km
          </div>
        </div>

        {/* BLOQUE RUNNING */}
        <div className="mt-5 rounded-[18px] bg-zinc-900 px-5 py-4 text-white shadow-md">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
              <Footprints className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-[16px] font-semibold">Running</div>
              <div className="text-[13px] text-zinc-400">3000 meters per day</div>
            </div>
          </div>
        </div>

        {/* SECCIÓN TODAY */}
        <div className="mt-5 rounded-[28px] bg-white px-4 py-4 shadow-inner ring-1 ring-zinc-100">
          <div className="text-sm font-medium text-zinc-500 mb-4">Today</div>
          <div className="grid grid-cols-3 gap-4">
            <StatPill icon={<Footprints />} label="Kilometer" value={`${distanceKm}`} />
            <StatPill icon={<Timer />} label="Minutes" value="15" />
            <StatPill icon={<Flame />} label="Calories" value="75" />
          </div>
        </div>
      </div>
    </div>
  );
}
