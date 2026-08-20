"use client";

import { useState } from "react";

type Port = {
  name: string;
  lat: number;
  lng: number;
};

type Region = {
  region: string;
  ports: Port[];
};

const portCoverage: Region[] = [
  {
    region: "Port Klang",
    ports: [
      { name: "Northport", lat: 3.0006, lng: 101.3903 },
      { name: "Westports", lat: 2.9954, lng: 101.3405 },
    ],
  },
  {
    region: "Johor",
    ports: [
      { name: "Pasir Gudang Port", lat: 1.4677, lng: 103.9018 },
      { name: "Tanjung Pelepas Port", lat: 1.3626, lng: 103.5502 },
    ],
  },
  {
    region: "Terengganu",
    ports: [{ name: "Kemaman Port", lat: 4.2439, lng: 103.4453 }],
  },
  {
    region: "Pahang",
    ports: [{ name: "Kuantan Port", lat: 3.9694, lng: 103.4297 }],
  },
  {
    region: "Kelantan",
    ports: [{ name: "Tok Bali Port", lat: 5.8214, lng: 102.4494 }],
  },
  {
    region: "Perak",
    ports: [{ name: "Lumut Port", lat: 4.234, lng: 100.6199 }],
  },
  {
    region: "Penang",
    ports: [{ name: "Penang Port", lat: 5.4141, lng: 100.355 }],
  },
  {
    region: "Sabah",
    ports: [
      { name: "Labuan Port", lat: 5.2831, lng: 115.2308 },
      { name: "Tawau Port", lat: 4.2449, lng: 117.8911 },
    ],
  },
  {
    region: "Sarawak",
    ports: [{ name: "Miri Port", lat: 4.3945, lng: 113.9915 }],
  },
  {
    region: "Brunei",
    ports: [{ name: "Muara Port", lat: 5.0167, lng: 115.0667 }],
  },
];

const allPorts = portCoverage.flatMap((r) =>
  r.ports.map((p) => ({ ...p, region: r.region }))
);

export default function PortCoverageMap() {
  const [selected, setSelected] = useState(allPorts[0]);

  const mapSrc = `https://www.google.com/maps?q=${selected.lat},${selected.lng}&z=12&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`;

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Port list */}
      <div className="lg:col-span-2">
        <div className="max-h-[420px] space-y-6 overflow-y-auto pr-2">
          {portCoverage.map((region) => (
            <div key={region.region}>
              <p className="font-display text-sm uppercase tracking-wide text-rig">
                {region.region}
              </p>
              <ul className="mt-2 space-y-1">
                {region.ports.map((port) => {
                  const isActive = selected.name === port.name;
                  return (
                    <li key={port.name}>
                      <button
                        onClick={() =>
                          setSelected({ ...port, region: region.region })
                        }
                        className={`w-full border-l-2 px-3 py-2 text-left text-sm transition-colors ${
                          isActive
                            ? "border-rig bg-rig/10 text-harbor"
                            : "border-transparent text-harbor/70 hover:border-steel hover:bg-white/60"
                        }`}
                        aria-pressed={isActive}
                      >
                        {port.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="lg:col-span-3">
        <div className="border border-steel/40 bg-white">
          <div className="flex items-center justify-between border-b border-steel/40 px-5 py-3">
            <div>
              <p className="font-display text-sm uppercase tracking-wide text-harbor">
                {selected.name}
              </p>
              <p className="text-xs text-harbor/60">{selected.region}</p>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs uppercase tracking-widest text-rig hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
          <iframe
            key={selected.name}
            title={`Map showing ${selected.name}`}
            src={mapSrc}
            className="h-[360px] w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
