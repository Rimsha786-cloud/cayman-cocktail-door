/**
 * Verified Door No. 4 business information, taken from doorno4.com,
 * its menus and its events brochure. Do not add facts that are not on
 * the original site.
 */
import documents from "@/assets/documents.json";

export const SITE = {
  name: "Door No. 4",
  tagline: "Neighbourhood cocktail bar · The Grove, Seven Mile Beach",
  email: "info@doorno4.com",
  /** "Call now to reserve a table" number used on the original site */
  reservationsPhone: { display: "+1 345-746-3619", href: "tel:+13457463619" },
  /** Number listed in the original site footer */
  generalPhone: { display: "+1 345-640-0440", href: "tel:+13456400440" },
  address: {
    unit: "Unit 12, The Grove",
    street: "1358 W Bay Rd",
    area: "Seven Mile Beach",
    city: "Grand Cayman",
    postal: "KY1-1000",
    country: "Cayman Islands",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Door+No.+4+The+Grove+1358+West+Bay+Road+Grand+Cayman",
  mapsEmbed:
    "https://www.google.com/maps?q=Door+No.+4,+The+Grove,+1358+West+Bay+Road,+Grand+Cayman&output=embed",
  socials: {
    instagram: { label: "Instagram", handle: "@doorno_4", href: "https://www.instagram.com/doorno_4" },
    facebook: { label: "Facebook", handle: "doorno4cayman", href: "https://www.facebook.com/doorno4cayman" },
  },
  founder: "Simon Crompton",
} as const;

export const HOURS = [
  { days: "Monday – Friday", short: "Mon – Fri", time: "4pm – 1am", opens: "16:00", closes: "01:00", schema: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
  { days: "Saturday", short: "Sat", time: "4pm – 12am", opens: "16:00", closes: "00:00", schema: ["Saturday"] },
  { days: "Sunday", short: "Sun", time: "11am – 12am", opens: "11:00", closes: "00:00", schema: ["Sunday"] },
] as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/menus", label: "Menus" },
  { to: "/whats-on", label: "What's On" },
  { to: "/private-events", label: "Private Events" },
  { to: "/contact", label: "Contact" },
] as const;

export const AWARDS = [
  { year: "2023", title: "Best New International Cocktail Bar", body: "Honoree", org: "Tales of the Cocktail" },
  { year: "2023", title: "Best Cocktail Bar", body: "Winner", org: "Best of Cayman" },
  { year: "2024", title: "Best Cocktail Bar", body: "Winner", org: "Best of Cayman" },
  { year: "2024", title: "Discovery List", body: "Featured", org: "50 Best" },
  { year: "Top 10", title: "New Cocktail Bar — Central/South America & Caribbean", body: "Top 10", org: "Spirited Awards" },
  { year: "#87", title: "Best Bars North America, Canada & the Caribbean", body: "2024", org: "Best Bars" },
  { year: "#99", title: "Best Bars North America, Canada & the Caribbean", body: "2025", org: "Best Bars" },
] as const;

export const DOCS = documents as Record<
  "dinner" | "cocktails" | "drinks" | "kids" | "happyHour" | "restaurantMonth" | "champagne" | "sundayRoast" | "brochure",
  string
>;

export const fullAddress = `${SITE.address.unit}, ${SITE.address.street}, ${SITE.address.area}, ${SITE.address.city} ${SITE.address.postal}, ${SITE.address.country}`;
