/**
 * Menu content transcribed from Door No. 4's current published menus.
 * Prices are in CI dollars, as printed.
 */

export type MenuItem = { name: string; price?: string; desc?: string; tags?: string };
export type MenuSection = { title: string; note?: string; items: MenuItem[] };
export type Menu = {
  id: string;
  label: string;
  intro: string;
  sections: MenuSection[];
  footnote?: string;
};

const SERVICE_NOTE =
  "All prices in CI dollars. A 15% gratuity will be added to your bill. Please inform your server of any allergies or dietary restrictions.";

export const MENUS: Menu[] = [
  {
    id: "cocktails",
    label: "Cocktails",
    intro:
      "Cocktails inspired by Caribbean hospitality, showcasing quality Caymanian ingredients — approachable, flavourful and made to be enjoyed by everyone.",
    footnote: SERVICE_NOTE,
    sections: [
      {
        title: "Cocktails",
        items: [
          { name: "BBQ Peach Old Fashioned", price: "16", desc: "bulleit rye whiskey, charred peach, bitters" },
          { name: "Sea Breeze No.4", price: "15", desc: "ketel one vodka, cranberry cordial, aperol soda, grapefruit foam" },
          { name: "Bajan Treacle", price: "16", desc: "doorlys 12yr rum, calvados, cooked pineapple, apple cider vinegar" },
          { name: "Table Martini", price: "15", desc: "belvedere vodka, rice wine vinegar, blanc vermouth, orange bitters, red pickled onion" },
          { name: "No.75", price: "25", desc: "beefeater gin, house oleo, lemon, veuve clicquot champagne" },
          { name: "Strawberry Sbagliato", price: "15", desc: "beefeater gin, strawberry, campari, prosecco" },
          { name: "Rude Cosmo", price: "15", desc: "los vecinos mezcal, amaro nonino, lime, cranberry, raspberry" },
          { name: "Café Manhattan", price: "16", desc: "evan williams bourbon, rittenhouse rye, cynar, coffee" },
          { name: "B.L.T.", price: "16", desc: "g4 blanco tequila, lemongrass tea, clarified blackberry, soda" },
          { name: "Banoffee Coffee", price: "15", desc: "banana irish whiskey, coffee, brown sugar molasses, salted banana cream" },
          { name: "Mudslide Rocher", price: "15", desc: "werther's original infused vodka, rocher gelato, espresso" },
          { name: "Pornstar Sgroppino", price: "15", desc: "absolut vanilla vodka, chinola passion fruit liqueur, crémant sparkling" },
        ],
      },
      {
        title: "Door to the Disco",
        items: [
          { name: "Blue Raspberry Negroni", price: "14", desc: "tanqueray, raspberry eau de vie, blue curaçao, bitter vermouth" },
          { name: "Milano Grasshopper", price: "16", desc: "fernet branca, crème de cacao blanc, rémy martin vsop, mint gelato" },
          { name: "Lemon Drop Sour", price: "14", desc: "ketel one, lemon curd, triple sec" },
          { name: "Hard Appletini", price: "14", desc: "cocchi americano, calvados, ketel one, apple" },
        ],
      },
      {
        title: "Non-Alcoholic",
        items: [
          { name: "Earl's Peach Tea", price: "10", desc: "earl grey, marigold, burnt peach" },
          { name: "Cherry Coke Float", price: "12", desc: "cherry cordial, coca-cola, vanilla gelato" },
          { name: "Designated Driver", price: "14", desc: "mionetto aperitivo, grüvi dry secco, soda" },
          { name: "Super Citrus Lemonade", price: "9", desc: "house citrus oleo, lemon, still or sparkling" },
        ],
      },
    ],
  },
  {
    id: "kitchen",
    label: "From the Kitchen",
    intro:
      "Elevated bar favourites and shareable plates, made with the finest local ingredients — perfect for casual evenings, celebrations, or anything in between.",
    footnote: `Allergens: g gluten · sf seafood · d dairy · n nuts · sy soy · * can be removed · v vegetarian · vg vegan. Kitchen closes at 11pm. ${SERVICE_NOTE}`,
    sections: [
      {
        title: "To Share",
        items: [
          { name: "Beef Arancini", price: "15", desc: "slow-braised brisket, mushroom pan jus emulsion, parmesan", tags: "g, d" },
          { name: "Tuna Tartare", price: "20", desc: "marinated tuna, fennel & poblano gazpacho, pickled shallots, fried capers", tags: "sf, sy" },
          { name: "Pulpo a la Plancha", price: "20", desc: "citrus braised octopus, mint-pea purée, burnt lemon aioli, guava gel, pickled enoki mushroom", tags: "sf" },
          { name: "Titoté Bisque Ravioli", price: "16", desc: "shrimp & toasted coconut ravioli, creamy tomato-basil sauce, herb oil, parmesan", tags: "g, sf" },
          { name: "Salmon Crudo", price: "18", desc: "cured salmon, pickled onion & cucumber, orange-lime-basil cure, beetroot dust", tags: "sf" },
          { name: "Quinoa Salad", price: "12", desc: "toasted pumpkin seeds, orange, basil balsamic vinaigrette, pickled radish & cucumber, grape infused tomatoes", tags: "vg" },
          { name: "Miso Pumpkin", price: "14", desc: "smoked miso glazed pumpkin, corn hummus, pumpkin seed dukkha, pickled starfruit", tags: "vg" },
          { name: "Cayman Beef Bao", price: "18", desc: "cayman style braised beef, pickled daikon, scotch bonnet aioli, scallion", tags: "g, sy" },
        ],
      },
      {
        title: "Something Bigger",
        items: [
          { name: "Chicken '69'", price: "18", desc: "chickpea flour fried chicken, butter chicken sauce, sautéed greens · side rice +5", tags: "d" },
          { name: "6oz Picanha", price: "24", desc: "chimichurri aioli, compound butter", tags: "d" },
          { name: "Creole Meatballs", price: "16", desc: "herb ground beef, caramelized onion, celeriac mash, cherry tomato relish", tags: "d" },
          { name: "Bourbon-Agave Salmon", price: "22", desc: "smoked cauliflower purée, preserved shallots, sautéed beans, toasted almond", tags: "sf" },
          { name: "Udon Bowl", price: "22", desc: "housemade udon, roasted pork belly, bone broth, nori, scallion, peanuts, fried egg", tags: "g*, sy, n" },
          { name: "Burmese Khao Suey", price: "16", desc: "rice noodles, curried coconut broth, spring & crispy onions, cherry tomatoes, pepper flakes, cilantro, lime", tags: "vg" },
        ],
      },
      {
        title: "On the Side",
        items: [
          { name: "Triple Cooked Chips", price: "8" },
          { name: "Garlic Parmesan Fries", price: "8", desc: "jerk aioli", tags: "d*, v" },
          { name: "Bean Almondine", price: "10", desc: "toasted almonds", tags: "n, v" },
          { name: "Sautéed Broccolini", price: "10", desc: "hot honey", tags: "v" },
          { name: "Roast Vegetables", price: "8", desc: "balsamic glaze", tags: "vg" },
          { name: "Caesar Salad", price: "10", desc: "romaine, croutons, parmesan, housemade caesar dressing", tags: "g*" },
          { name: "Mac & Cheese", price: "12", desc: "four cheese sauce, truffle oil, mushroom powder", tags: "g, d, v" },
        ],
      },
      {
        title: "Something Sweet",
        items: [
          { name: "Sticky Toffee Pudding", price: "12", desc: "date & rum pudding, salted caramel, vanilla gelato", tags: "d" },
          { name: "Cassava Cake", price: "12", desc: "cassava coconut sponge, coconut caramel, plantain crumble, vanilla gelato", tags: "d*" },
          { name: "Tres Leches", price: "12", desc: "rose vanilla sponge dunked in dulce de leche, whipped sorrel cream", tags: "g, d" },
        ],
      },
    ],
  },
  {
    id: "happy-hour",
    label: "Happy Hour",
    intro: "2-4-1 selected cocktails, Sunday to Thursday, 4pm – 6pm and 10pm – close.",
    footnote: SERVICE_NOTE,
    sections: [
      {
        title: "Happy Hour · 2-4-1",
        note: "4 – 6pm & 10pm – close",
        items: [
          { name: "Negroni", price: "16", desc: "gin or los vecinos mezcal, campari, sweet vermouth" },
          { name: "Tommy's Marg", price: "16", desc: "olmeca altos plata tequila, lime, agave" },
          { name: "Espresso Martini", price: "16", desc: "tito's vodka, kahlua, espresso" },
          { name: "Army & Navy", price: "16", desc: "bombay sapphire gin, lemon, orgeat" },
          { name: "Floradora", price: "16", desc: "bombay sapphire gin, ginger, raspberry, lime, soda" },
          { name: "Dry Daiquiri", price: "16", desc: "planteray 3 star rum, passion fruit, lime, bitter italian liqueur" },
          { name: "East 8 Hold Up", price: "16", desc: "tito's vodka, italian bitter, passion fruit liqueur, lime, pineapple" },
          { name: "Old Fashioned", price: "16", desc: "maker's mark bourbon, angostura bitters, demerara" },
          { name: "Peach Bellini", price: "16", desc: "peach liqueur, peach gelato, prosecco" },
          { name: "Moscow Mule", price: "16", desc: "tito's vodka, ginger, lime, bitters, soda" },
        ],
      },
    ],
  },
  {
    id: "sunday-roast",
    label: "Sunday Roast",
    intro:
      "Served every Sunday from 11am to 3pm. Choose two or three courses — vegetarian options available.",
    footnote: `3 courses 45 · 2 courses 35 · kids 20. ${SERVICE_NOTE}`,
    sections: [
      {
        title: "Appetizer",
        items: [
          { name: "Roasted Pumpkin Soup", desc: "coconut milk, warm spices, toasted baguette" },
          { name: "Chicken Liver Pâté", desc: "garlic butter, toasted baguette" },
          { name: "Pork Croquetas", desc: "achiote braised pork, mornay, cheese blend, amarillo crema" },
        ],
      },
      {
        title: "Entrées",
        note: "served with fat roast potatoes, cheesy cauliflower & roasted vegetables",
        items: [
          { name: "Roast Beef", desc: "yorkshire pudding, horseradish cream, gravy" },
          { name: "Crackling Pork", desc: "yorkshire pudding, apple sauce, gravy" },
          { name: "Pan Roasted Chicken", desc: "yorkshire pudding, chimichurri, gravy" },
          { name: "Vegetarian Nut Roast", desc: "lentils, almonds, mirepoix, roasted tomato pepper sauce" },
        ],
      },
      {
        title: "Dessert",
        items: [{ name: "Sticky Toffee", desc: "banana bread, caramel, vanilla gelato" }],
      },
      {
        title: "Sunday Drinks",
        items: [
          { name: "Modelo, Caybrew", price: "5" },
          { name: "Forever Summer Rosé · Crémant Sparkling · Crémant Rosé Sparkling", price: "7" },
          { name: "Tito's Bloody Mary · Bloody Caesar", price: "9" },
          { name: "Mimosa & Bellini", price: "9" },
        ],
      },
    ],
  },
  {
    id: "champagne-saturdays",
    label: "Champagne Saturdays",
    intro: "Every Saturday from 4pm, enjoy 25% off a selection of champagnes from our collection.",
    footnote: `Prices as printed on our Champagne Saturdays menu. ${SERVICE_NOTE}`,
    sections: [
      {
        title: "Champagnes",
        note: "25% off all night",
        items: [
          { name: "Veuve Clicquot Brut", price: "16.5 / 86.25", desc: "glass / bottle" },
          { name: "Veuve Clicquot Rosé Brut", price: "18.75 / 93.75", desc: "glass / bottle" },
          { name: "Ruinart Blanc de Blancs", price: "26.25 / 157.5", desc: "glass / bottle" },
          { name: "Ruinart Rosé", price: "26.25 / 157.5", desc: "glass / bottle" },
          { name: "Dom Pérignon 2013", price: "292.5", desc: "bottle" },
        ],
      },
    ],
  },
  {
  "id": "drinks",
  "label": "Wine & Spirits",
  "intro": "Our full back bar — Caribbean cane spirits, whiskies, agave, wines by the glass and bottle, beer, and bar snacks to go with them.",
  "footnote": SERVICE_NOTE,
  "sections": [
    {
      "title": "Bar Snacks",
      "items": [
        {
          "name": "Truffle Butter Popcorn",
          "price": "5",
          "tags": "v, d*"
        },
        {
          "name": "Bar Mix",
          "price": "5",
          "desc": "toasted foxnuts, chickpeas, pumpkin seeds, jerk powder, lager honey glaze"
        },
        {
          "name": "Citrus Vermouth Olives",
          "price": "6",
          "desc": "3 olive blend, pickled onions, artichoke, red wine vinegar, vermouth, orange & lemon zest",
          "tags": "vg"
        },
        {
          "name": "House Made Potato Chips",
          "price": "6",
          "desc": "garlic aioli",
          "tags": "v, d*"
        },
        {
          "name": "Garlic Parmesan Fries",
          "price": "8",
          "desc": "jerk aioli",
          "tags": "v, d*"
        },
        {
          "name": "Mini Grilled Cheese",
          "price": "6",
          "desc": "fontina, provolone, asiago, bacon jam · large +6",
          "tags": "g, d"
        },
        {
          "name": "Wings",
          "price": "6 for 12 / 12 for 20",
          "desc": "chicken, tamarind ginger sauce, house hot sauce",
          "tags": "g, d"
        },
        {
          "name": "Cheeseburger Sliders",
          "price": "14",
          "desc": "bordelaise onions, swiss cheese, greens, tomato chutney",
          "tags": "g, d"
        },
        {
          "name": "Tuna Aburi",
          "price": "18",
          "desc": "yellowfin tuna, wasabi mayo, crispy rice cake, chilli oil",
          "tags": "sf, g*, d"
        }
      ],
      "note": "g gluten · sf seafood · d dairy · * can be removed · v vegetarian · vg vegan"
    },
    {
      "title": "Gin",
      "items": [
        {
          "name": "Beefeater, UK",
          "price": "10"
        },
        {
          "name": "Blue Iguana, Cayman Islands",
          "price": "14"
        },
        {
          "name": "Bombay Sapphire, UK",
          "price": "10"
        },
        {
          "name": "Botanist, Scotland",
          "price": "12"
        },
        {
          "name": "Citadelle, France",
          "price": "9"
        },
        {
          "name": "Hayman's Old Tom, UK",
          "price": "9"
        },
        {
          "name": "Hayman's Sloe Gin, UK",
          "price": "10"
        },
        {
          "name": "Hendricks, Scotland",
          "price": "12"
        },
        {
          "name": "Monkey 47, Germany",
          "price": "11"
        },
        {
          "name": "Offshore, Cayman Islands",
          "price": "9"
        },
        {
          "name": "Plymouth, UK",
          "price": "9"
        },
        {
          "name": "St George Terroir, USA",
          "price": "11"
        },
        {
          "name": "Tanqueray No. TEN, UK",
          "price": "9"
        },
        {
          "name": "Tenjaku, Japan",
          "price": "14"
        },
        {
          "name": "Whitley Neill, UK",
          "price": "12"
        }
      ]
    },
    {
      "title": "Vodka",
      "items": [
        {
          "name": "Absolut Elyx, Sweden",
          "price": "12"
        },
        {
          "name": "Belvedere, Poland",
          "price": "14"
        },
        {
          "name": "Grey Goose, France",
          "price": "12"
        },
        {
          "name": "Ketel One, Holland",
          "price": "9"
        },
        {
          "name": "Tito's, USA",
          "price": "9"
        }
      ]
    },
    {
      "title": "Agave",
      "items": [
        {
          "name": "Clase Azul Añejo Tequila",
          "price": "110"
        },
        {
          "name": "Del Maguey Chichicapa Mezcal",
          "price": "19"
        },
        {
          "name": "Don Julio 1942 Tequila",
          "price": "35"
        },
        {
          "name": "Don Julio 70 Cristalino Tequila",
          "price": "18"
        },
        {
          "name": "Don Julio Blanco Tequila",
          "price": "12"
        },
        {
          "name": "Don Julio Reposado Tequila",
          "price": "14"
        },
        {
          "name": "Don Julio Añejo Tequila",
          "price": "16"
        },
        {
          "name": "Fortaleza Blanco Tequila",
          "price": "15"
        },
        {
          "name": "Fortaleza Reposado Tequila",
          "price": "17"
        },
        {
          "name": "Los Vencinos Mezcal",
          "price": "12"
        },
        {
          "name": "Olmeca Altos Reposado Tequila",
          "price": "10"
        },
        {
          "name": "Ocho Blanco Tequila",
          "price": "12"
        }
      ]
    },
    {
      "title": "Brandy & Eau-de-Vie",
      "items": [
        {
          "name": "Armagnac Janneau V.S.O.P.",
          "price": "12"
        },
        {
          "name": "Barsol Pisco",
          "price": "11"
        },
        {
          "name": "Blume Marillen Apricot Eau-de-Vie",
          "price": "12"
        },
        {
          "name": "Catan Pisco",
          "price": "11"
        },
        {
          "name": "Hennessy V.S.",
          "price": "10"
        },
        {
          "name": "Hennessy V.S.O.P.",
          "price": "17"
        },
        {
          "name": "Hennessy X.O.",
          "price": "28"
        },
        {
          "name": "Magloire V.S.O.P. Calvados",
          "price": "11"
        },
        {
          "name": "Martell Blue Swift",
          "price": "14"
        },
        {
          "name": "Martell Single Distillery V.S.",
          "price": "10"
        },
        {
          "name": "Pierre Ferrand 1840 Cognac",
          "price": "12"
        },
        {
          "name": "Remy Martin V.S.O.P.",
          "price": "15"
        },
        {
          "name": "Singani 63",
          "price": "11"
        }
      ]
    },
    {
      "title": "Whisk(e)y · Blended",
      "items": [
        {
          "name": "Chivas Regal 12yo, Scotland",
          "price": "10"
        },
        {
          "name": "Compass Box Hedonism, Scotland",
          "price": "18"
        },
        {
          "name": "Compass Box Peat Monster, Scotland",
          "price": "14"
        },
        {
          "name": "J&B Rare, Scotland",
          "price": "9"
        },
        {
          "name": "Jameson, Ireland",
          "price": "8"
        },
        {
          "name": "Johnnie Walker Black Label, Scotland",
          "price": "11"
        },
        {
          "name": "Mars Iwai Whiskey, Nagano, Japan",
          "price": "13"
        },
        {
          "name": "Mars Cosmo Whiskey, Nagano, Japan",
          "price": "22"
        },
        {
          "name": "Monkey Shoulder, Scotland",
          "price": "12"
        },
        {
          "name": "Teeling Small Batch, Ireland",
          "price": "13"
        },
        {
          "name": "Tenjaku, Japan",
          "price": "16"
        }
      ]
    },
    {
      "title": "Whisk(e)y · Single Malt",
      "items": [
        {
          "name": "Aberlour A'bunadh, Speyside, Scotland",
          "price": "19"
        },
        {
          "name": "Ardbeg Uigueadal, Islay, Scotland",
          "price": "18"
        },
        {
          "name": "Bruichladdich Classic Laddie, Islay, Scotland",
          "price": "15"
        },
        {
          "name": "Glenfarclas 15yo, Speyside, Scotland",
          "price": "17"
        },
        {
          "name": "Glenmorangie Quinta Ruban, Highland, Scotland",
          "price": "18"
        },
        {
          "name": "Macallan 12 YO Double Cask, Highland, Scotland",
          "price": "18"
        }
      ]
    },
    {
      "title": "Whisk(e)y · Bourbon",
      "items": [
        {
          "name": "Angel's Envy, Kentucky",
          "price": "18"
        },
        {
          "name": "Basil Hayden, Kentucky",
          "price": "12"
        },
        {
          "name": "Blanton's Gold, Kentucky",
          "price": "55"
        },
        {
          "name": "Blanton's Straight, Kentucky",
          "price": "60"
        },
        {
          "name": "Buffalo Trace, Kentucky",
          "price": "11"
        },
        {
          "name": "Bulleit, Kentucky",
          "price": "10"
        },
        {
          "name": "Elijah Craig Small Batch, Kentucky",
          "price": "12"
        },
        {
          "name": "Evan Williams Black, Kentucky",
          "price": "10"
        },
        {
          "name": "Jack Daniels', Tennessee",
          "price": "9"
        },
        {
          "name": "Gentleman Jack, Tennessee",
          "price": "12"
        },
        {
          "name": "Knob Creek, Kentucky",
          "price": "11"
        },
        {
          "name": "Maker's Mark, Kentucky",
          "price": "11"
        },
        {
          "name": "Michter's, Kentucky",
          "price": "16"
        },
        {
          "name": "Redemption, Indiana",
          "price": "10"
        },
        {
          "name": "Woodford Reserve, Kentucky",
          "price": "11"
        },
        {
          "name": "Uncle Nearest 1856, Tennessee",
          "price": "18"
        }
      ]
    },
    {
      "title": "Whisk(e)y · Rye",
      "items": [
        {
          "name": "Michters' Rye, Kentucky",
          "price": "14"
        },
        {
          "name": "Redemption Rye, Indiana",
          "price": "9"
        },
        {
          "name": "Rittenhouse Rye, Philadelphia",
          "price": "10"
        },
        {
          "name": "Sazerac Rye, Kentucky",
          "price": "13"
        },
        {
          "name": "Templeton Rye, Indiana",
          "price": "11"
        },
        {
          "name": "Whistle Pig 12 YO Rye, Vermont",
          "price": "24"
        },
        {
          "name": "Woodford Rye, Kentucky",
          "price": "14"
        }
      ]
    },
    {
      "title": "Cane Spirits",
      "items": [
        {
          "name": "Abelha Prata Cachaça, Brazil",
          "price": "11"
        },
        {
          "name": "Angostura 1919, Trinidad & Tobago",
          "price": "10"
        },
        {
          "name": "Appleton Reserve Blend 21yo, Jamaica",
          "price": "28"
        },
        {
          "name": "Bacardi 8yo, Cuba",
          "price": "12"
        },
        {
          "name": "Bacardi Light, Cuba",
          "price": "10"
        },
        {
          "name": "Black Tot Finest Caribbean, Blended",
          "price": "14"
        },
        {
          "name": "Chairman's Reserve Spiced, St. Lucia",
          "price": "9"
        },
        {
          "name": "Clairin Communal, Haiti",
          "price": "10"
        },
        {
          "name": "Cruzan Single Barrel, US Virgin Islands",
          "price": "11"
        },
        {
          "name": "Doorly's 12yo, Barbados",
          "price": "15"
        },
        {
          "name": "El Dorado 5yo, Guyana",
          "price": "9"
        },
        {
          "name": "El Dorado 15yo, Guyana",
          "price": "14"
        },
        {
          "name": "Flor de Caña Centenario 12yo, Nicaragua",
          "price": "11"
        },
        {
          "name": "Foursquare Isonomy, Barbados",
          "price": "20"
        },
        {
          "name": "Foursquare Probitas, Barbados",
          "price": "10"
        },
        {
          "name": "Goslings Black Seal, Bermuda",
          "price": "8"
        },
        {
          "name": "Havana Club 7yo, Cuba",
          "price": "10"
        },
        {
          "name": "Havana Selección De Maestros, Cuba",
          "price": "18"
        },
        {
          "name": "Mount Gay Eclipse, Barbados",
          "price": "9"
        },
        {
          "name": "Mount Gay Black Barrel, Barbados",
          "price": "9"
        },
        {
          "name": "Planteray 3 Stars White Rum, Blended",
          "price": "9"
        },
        {
          "name": "Planteray Cut & Dry Coconut, Blended",
          "price": "12"
        },
        {
          "name": "Planteray O.F.T.D., Blended",
          "price": "9"
        },
        {
          "name": "Planteray Stiggin's Pineapple, Blended",
          "price": "11"
        },
        {
          "name": "Planteray X.O, Blended",
          "price": "12"
        },
        {
          "name": "Planteray XO 20th Anniversary, Barbados",
          "price": "12"
        },
        {
          "name": "Pussers' British Navy Rum, British Virgin Islands",
          "price": "7"
        },
        {
          "name": "Ron Zacapa 23yo, Guatemala",
          "price": "15"
        },
        {
          "name": "Santa Teresa Solera 1796, Venezuela",
          "price": "12"
        },
        {
          "name": "Seven Fathoms, Cayman Islands",
          "price": "8"
        },
        {
          "name": "Wray & Nephew Overproof, Jamaica",
          "price": "9"
        }
      ]
    },
    {
      "title": "Liqueurs",
      "items": [
        {
          "name": "Baileys Irish Cream",
          "price": "9"
        },
        {
          "name": "Benedictine",
          "price": "10"
        },
        {
          "name": "Cointreau",
          "price": "12"
        },
        {
          "name": "Drambuie",
          "price": "12"
        },
        {
          "name": "Frangelico",
          "price": "11"
        },
        {
          "name": "Galliano L'Autentico",
          "price": "12"
        },
        {
          "name": "Grand Marnier",
          "price": "12"
        },
        {
          "name": "Grand Marnier Cherry",
          "price": "10"
        },
        {
          "name": "Italicus",
          "price": "11"
        },
        {
          "name": "Kahlua",
          "price": "7"
        },
        {
          "name": "Lazzaroni Amaretto",
          "price": "8"
        },
        {
          "name": "Lazzaroni Sambuca",
          "price": "8"
        },
        {
          "name": "Limoncello",
          "price": "7"
        }
      ]
    },
    {
      "title": "Amari & Vermouth",
      "items": [
        {
          "name": "Jägermeister",
          "price": "9"
        },
        {
          "name": "Lillet Blanc",
          "price": "7"
        },
        {
          "name": "Mattei Cap Corse Blanc",
          "price": "7"
        },
        {
          "name": "Mattei Cap Corse Rouge",
          "price": "7"
        },
        {
          "name": "Nonino Quintessentia",
          "price": "9"
        },
        {
          "name": "Nux Alpenz Nocino",
          "price": "12"
        },
        {
          "name": "Peychaud's Aperitivo",
          "price": "7"
        },
        {
          "name": "Pimms",
          "price": "8"
        },
        {
          "name": "Salers Gentiane Aperitif",
          "price": "9"
        },
        {
          "name": "Select Aperitivo",
          "price": "7"
        },
        {
          "name": "St George Absinthe",
          "price": "15"
        },
        {
          "name": "St George Bruto Americano",
          "price": "11"
        },
        {
          "name": "Zirbenz Stone Pine Liqueur",
          "price": "11"
        }
      ]
    },
    {
      "title": "Champagne & Sparkling",
      "items": [
        {
          "name": "Alberto Nani Organic Prosecco, Italy",
          "price": "12 / 55"
        },
        {
          "name": "De Chanceny Crémant de Loire Brut, France",
          "price": "12 / 55"
        },
        {
          "name": "De Chanceny Crémant de Loire Brut Rosé, France",
          "price": "12 / 55"
        },
        {
          "name": "Veuve Clicquot Brut Champagne, France",
          "price": "25 / 130"
        },
        {
          "name": "Veuve Rosé Champagne, France",
          "price": "28 / 150"
        },
        {
          "name": "Billecart-Salmon Le Rosé Champagne, France",
          "price": "205"
        },
        {
          "name": "Ruinart Blanc de Blancs Champagne, France",
          "price": "210"
        },
        {
          "name": "Ruinart Rosé Champagne, France",
          "price": "210"
        },
        {
          "name": "Dom Pérignon Brut 2015, France",
          "price": "390"
        }
      ],
      "note": "glass / bottle"
    },
    {
      "title": "White Wine",
      "items": [
        {
          "name": "Leitz Dragonstone Riesling, Germany",
          "price": "12 / 50"
        },
        {
          "name": "Loimer Gruner Veltliner, Austria",
          "price": "12 / 50"
        },
        {
          "name": "Misty Cove Sauvignon Blanc, New Zealand",
          "price": "12 / 55"
        },
        {
          "name": "St. Francis Chardonnay, Sonoma, USA",
          "price": "12 / 50"
        },
        {
          "name": "Reverdy Sancerre, France",
          "price": "16 / 64"
        },
        {
          "name": "Stag's Leap Karia Chardonnay, Napa, USA",
          "price": "23 / 90"
        }
      ],
      "note": "glass / bottle"
    },
    {
      "title": "Rosé",
      "items": [
        {
          "name": "Mirabeau Forever Summer, France",
          "price": "12 / 50"
        }
      ],
      "note": "glass / bottle"
    },
    {
      "title": "Red Wine",
      "items": [
        {
          "name": "Cooper Hill Pinot Noir, Oregon, USA",
          "price": "12 / 50"
        },
        {
          "name": "St. Cosme Côtes du Rhône, France",
          "price": "12 / 50"
        },
        {
          "name": "Benziger Cabernet Sauvignon, Sonoma, USA",
          "price": "14 / 55"
        },
        {
          "name": "Landmark Overlook Pinot Noir, Sonoma, USA",
          "price": "23 / 90"
        }
      ],
      "note": "glass / bottle"
    },
    {
      "title": "Beer & Cider",
      "items": [
        {
          "name": "Michelob Ultra",
          "price": "6.25"
        },
        {
          "name": "Modelo",
          "price": "6.25"
        },
        {
          "name": "Heineken",
          "price": "6.25"
        },
        {
          "name": "Caybrew",
          "price": "6"
        },
        {
          "name": "Asahi",
          "price": "6.25"
        },
        {
          "name": "Koppaberg Cider",
          "price": "7.5"
        },
        {
          "name": "Sierra Nevada Pale Ale",
          "price": "7"
        },
        {
          "name": "Heineken 0.0%",
          "price": "5"
        },
        {
          "name": "Corona 0.0%",
          "price": "5"
        }
      ]
    }
  ]
},
  {
  "id": "restaurant-month",
  "label": "Restaurant Month",
  "intro": "Our seasonal Restaurant Month menu — three courses for CI$40.",
  "footnote": SERVICE_NOTE,
  "sections": [
    {
      "title": "Appetizer",
      "note": "3 courses · 40",
      "items": [
        {
          "name": "Tuna Croustades",
          "desc": "honey wasabi-soy marinated tuna, sesame, spring onion, chili oil",
          "tags": "df"
        },
        {
          "name": "Jerk Pork Belly",
          "desc": "jerk mayo, bean ragout, pickled onion",
          "tags": "gf, df"
        },
        {
          "name": "Watermelon Tataki",
          "desc": "tamari-agave dressing, pickled watermelon rind, yuzu aioli, furikake",
          "tags": "vg, gf, df"
        }
      ]
    },
    {
      "title": "Main Course",
      "items": [
        {
          "name": "Chicken 69",
          "desc": "bone-in drumstick, tikka marinade, 69 sauce, veg pilau",
          "tags": "gf"
        },
        {
          "name": "Pan Roasted Snapper",
          "desc": "garlic sautéed beans, coconut rice, brown butter & caper sauce",
          "tags": "gf"
        },
        {
          "name": "Mushroom Cappelletti",
          "desc": "mixed mushroom duxelles, parmesan, herb beurre blanc, chives",
          "tags": "v"
        }
      ]
    },
    {
      "title": "Dessert",
      "items": [
        {
          "name": "Coconut Pudding",
          "desc": "coconut & sago pudding, mango sorbet, toasted coconut crumble",
          "tags": "vg, gf, df"
        },
        {
          "name": "Chocoloava",
          "desc": "orange, couverture, vanilla gelato"
        }
      ]
    }
  ]
},
  {
    id: "kids",
    label: "Kids",
    intro: "Little guests are always welcome.",
    footnote: `Kitchen closes at 11pm. ${SERVICE_NOTE}`,
    sections: [
      {
        title: "Kid's Menu",
        items: [
          { name: "Grilled Cheese", price: "6 / 12", desc: "small or large · fontina, provolone, asiago · with or without bacon jam" },
          { name: "Mac & Cheese", price: "10", desc: "four cheese sauce · add truffle 2" },
          { name: "Cassava Fries", price: "7", desc: "mint chutney", tags: "gf" },
          { name: "Chicken Bites", price: "10", desc: "chickpea flour fried chicken", tags: "gf" },
          { name: "Fries", price: "8", desc: "togarashi spice upon request", tags: "gf" },
          { name: "Cheeseburger Sliders", price: "14", desc: "two beef sliders, swiss cheese" },
          { name: "Roast Vegetables", price: "8", desc: "charred broccolini, zucchini, carrots", tags: "vegan" },
          { name: "Tagliatelle", price: "12", desc: "homemade pasta, tomato sauce or butter sauce" },
          { name: "Selection of Gelato", price: "5", desc: "per scoop" },
        ],
      },
    ],
  },
];

/** Signature highlights drawn from the current cocktail list */
export const SIGNATURES = ["BBQ Peach Old Fashioned", "Sea Breeze No.4", "Bajan Treacle", "Table Martini", "No.75", "Rude Cosmo"]
  .map((name) => MENUS[0]?.sections[0]?.items.find((i) => i.name === name))
  .filter((i): i is MenuItem => Boolean(i));
