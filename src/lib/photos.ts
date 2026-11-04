import manifest from "@/assets/photos.json";

export type Photo = { sm: string; lg: string; w: number; h: number };
export type PhotoKey = keyof typeof manifest;

/** Descriptive alt text for every Door No. 4 photograph. */
export const ALT: Record<PhotoKey, string> = {
  "terrace-evening": "Guests on the Door No. 4 terrace under festoon lights",
  "grove-night": "The Grove at dusk, with palms and garden lighting",
  "pink-fizz": "A pale pink fizz cocktail with a flower garnish on a marble table",
  "dinner-table": "Plates and cocktails shared across a candlelit table",
  "bar-interior": "The back bar at Door No. 4 with bartenders and guests",
  "red-cocktail": "A ruby-red cocktail served on a printed coaster",
  "golden-cocktail": "A golden cocktail with a leaf garnish on marble",
  "bartender-mixing": "A bartender mixing a drink in front of the brick back bar",
  "table-cocktails": "Tropical cocktails with orchid garnishes on a wooden table",
  "bartender-pour": "A bartender pouring for guests at the bar",
  "velvet-stools": "Emerald velvet bar stools lining the candlelit bar",
  "guests-at-bar": "Two guests at the bar in front of the backlit shelves",
  "punch-bowl": "A punch bowl garnished with orchids and citrus wheels",
  "green-highball": "A bright green highball with a leaf garnish",
  "bar-lights": "Globe pendant lights glowing along the bar",
  "team-toast": "The Door No. 4 bar team raising cocktails behind the bar",
  "dining-room": "The emerald art deco dining room with banquettes and brass lights",
  "bartender-garnish": "A bartender finishing a cocktail at the bar",
  "tropical-cocktail": "A tropical cocktail with an orchid garnish",
  "team-smiles": "Bar team members smiling across the bar",
  "guests-stools": "Guests seated on velvet stools at the bar",
  "tiki-row": "A row of cocktails over crushed ice on the bar",
  "bartenders-guests": "Bartenders talking with guests across the bar",
  "back-bar": "A bartender behind the illuminated back bar",
  "server-tray": "A server carrying drinks through the busy dining room",
  "plated-dish": "A plated dish with cocktails on a dark wood table",
  "cocktail-trio": "Three cocktails on a polished wooden bar",
  "terrace-busy": "A busy evening on the terrace at The Grove",
  "terrace-dining": "Guests dining together on the terrace",
  "friends-cocktails": "Two friends smiling with cocktails in hand",
  "server-champagne": "A smiling server carrying a tray of glasses",
  "short-rib": "Braised beef topped with crispy onions",
  "red-cocktails-raised": "Guests raising red cocktails at a party",
  "live-music": "A musician performing live, in black and white",
  "guest-bartenders": "Bartenders shaking cocktails behind the bar",
  "bartender-shake": "A bartender at work behind the bar",
  "rose-glasses": "Rows of rosé glasses ready for an event",
  "outdoor-event": "Guests gathered at an outdoor evening event",
  "cocktail-cart": "The mobile cocktail cart serving at an outdoor event",
  "bottled-cocktails": "Bottled cocktails served at an outdoor bar stand",
};

export function getPhoto(key: PhotoKey): Photo {
  return (manifest as Record<PhotoKey, Photo>)[key];
}
