export type County = "Benton" | "Franklin" | "Grant" | "Adams";

export type PlaceRole = "home" | "nearby" | "basin";

export type BasinCounty = "Grant" | "Adams" | "Franklin" | "Lincoln";

export type Place = {
  city: string;
  county: County;
  role: PlaceRole;
};

export const places: readonly Place[] = [
  { city: "Kennewick", county: "Benton", role: "home" },
  { city: "Pasco", county: "Franklin", role: "home" },
  { city: "Richland", county: "Benton", role: "home" },
  { city: "West Richland", county: "Benton", role: "home" },
  { city: "Prosser", county: "Benton", role: "nearby" },
  { city: "Moses Lake", county: "Grant", role: "basin" },
  { city: "Othello", county: "Adams", role: "basin" },
  { city: "Connell", county: "Franklin", role: "basin" },
];

export const basinCounties: readonly BasinCounty[] = [
  "Grant",
  "Adams",
  "Franklin",
  "Lincoln",
];
