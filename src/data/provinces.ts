// RiceGuard Sentinel — 12 research provinces across the 4 regions.
// Structural data only. All display text (province name, note, region label,
// status label/description) lives in src/i18n/ui.ts, keyed by slug / region /
// status, so every string is translatable (TH/EN/ZH).

export type ProvinceStatus = "live" | "soon" | "plan";
export type RegionCode = "north" | "northeast" | "central" | "south";

export interface Province {
  slug: string;
  region: RegionCode;
  status: ProvinceStatus;
  lat: number;
  lng: number;
}

export const provinces: Province[] = [
  { slug: "chiang-rai", region: "north", status: "live", lat: 19.91, lng: 99.83 },
  { slug: "chiang-mai", region: "north", status: "live", lat: 18.79, lng: 98.98 },
  { slug: "nan", region: "north", status: "soon", lat: 18.78, lng: 100.77 },
  { slug: "amnat-charoen", region: "northeast", status: "live", lat: 15.86, lng: 104.63 },
  { slug: "ubon-ratchathani", region: "northeast", status: "soon", lat: 15.24, lng: 104.85 },
  { slug: "roi-et", region: "northeast", status: "plan", lat: 16.05, lng: 103.65 },
  { slug: "suphan-buri", region: "central", status: "live", lat: 14.47, lng: 100.12 },
  { slug: "pathum-thani", region: "central", status: "soon", lat: 14.02, lng: 100.53 },
  { slug: "phichit", region: "central", status: "plan", lat: 16.44, lng: 100.35 },
  { slug: "songkhla", region: "south", status: "live", lat: 7.19, lng: 100.6 },
  { slug: "phatthalung", region: "south", status: "soon", lat: 7.62, lng: 100.08 },
  { slug: "nakhon-si-thammarat", region: "south", status: "plan", lat: 8.43, lng: 99.96 },
];

// Region label anchors (approx centroid lat/lng) for the map watermark.
export const regionAnchors: { region: RegionCode; lat: number; lng: number }[] = [
  { region: "north", lat: 19.4, lng: 98.7 },
  { region: "northeast", lat: 16.4, lng: 104.6 },
  { region: "central", lat: 15.1, lng: 99.2 },
  { region: "south", lat: 8.2, lng: 99.0 },
];
