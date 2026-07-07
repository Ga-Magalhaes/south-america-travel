import { images } from "./images";

export const project = {
  title: "South America Travel",
  subtitle: "Peru, Chile and Argentina under a strategic US$8,000 budget",
  totalBudget: 8000,
  plannedConservativeTotal: 4847,
  remainingReserve: 3153,
  note: "The three PDFs use different calculation bases. Peru and Argentina behave as individual plans, while Chile was prepared for 2 adults. The site makes that clear instead of hiding it."
};

export const countries = [
  {
    id: "peru",
    name: "Peru",
    kicker: "Capital, Andes, Titicaca and heritage city",
    tagline: "A seven-day cultural circuit designed for efficiency, altitude adaptation and strong visual storytelling.",
    base: "1 traveler · 7 days · Bolivia ⇄ Peru",
    route: ["Bolivia", "Lima", "Cusco", "Puno", "Arequipa", "Lima", "Bolivia"],
    currency: "PEN",
    exchange: "Planning exchange rate: 1 USD = S/ 3.60 and Bs 6.96",
    theme: {
      flag: "🇵🇪",
      accent: "#d91023",
      accent2: "#ffffff",
      accent3: "#d8a84d",
      dark: "#150609",
      soft: "rgba(217, 16, 35, .15)",
      gradient: "radial-gradient(circle at 12% 20%, rgba(217, 16, 35, .42), transparent 30%), radial-gradient(circle at 78% 8%, rgba(216, 168, 77, .22), transparent 28%), linear-gradient(135deg, #150609, #250b11 58%, #050509)"
    },
    heroImage: images.peru.hero,
    budget: {
      capUsd: 2900,
      plannedUsd: 1717,
      balanceUsd: 1183,
      headline: "US$1,717 recommended total",
      summary: "The Peru plan stays comfortably below the US$2,900 ceiling after adding souvenirs and a 15% contingency reserve."
    },
    keyFacts: [
      ["Best strategic route", "Bolivia → Lima → Cusco → Puno → Arequipa → Lima → Bolivia"],
      ["Transport logic", "Flights for long distances; land travel where the Andean corridor adds experience"],
      ["Operational subtotal", "US$1,428 before shopping reserve and contingency"],
      ["Final recommendation", "US$1,717 including US$65 souvenirs and 15% contingency"],
      ["Remaining budget", "US$1,183 inside the original US$2,900 cap"]
    ],
    transport: [
      {
        title: "International flight",
        route: "La Paz / Santa Cruz ⇄ Lima",
        cost: "US$390 planning total",
        detail: "The report recommends flying into and out of Peru to preserve time in a seven-day itinerary."
      },
      {
        title: "Internal transport",
        route: "Lima → Cusco by air · Cusco → Puno and Puno → Arequipa by land · Arequipa → Lima by air",
        cost: "US$208",
        detail: "This mix keeps the itinerary fast while keeping the Andean corridor as part of the travel experience."
      },
      {
        title: "Alternative scenic bus",
        route: "La Paz → Copacabana → Puno",
        cost: "From US$30 in the source plan",
        detail: "Useful if Titicaca is the main priority, but less efficient for a tight one-week circuit."
      }
    ],
    hotels: [
      { city: "Lima", area: "Miraflores", economy: "US$65–95 / night", comfort: "US$110–160 / night", example: "Casa Andina Standard / Select / Premium Miraflores" },
      { city: "Cusco", area: "Historic center", economy: "US$55–85 / night", comfort: "US$120–180 / night", example: "Casa Andina Standard Cusco Plaza / Premium Cusco" },
      { city: "Puno", area: "Center or lakefront", economy: "US$45–75 / night", comfort: "US$95–150 / night", example: "Casa Andina Standard / Premium Puno" },
      { city: "Arequipa", area: "Historic center", economy: "US$55–80 / night", comfort: "US$95–150 / night", example: "Casa Andina Standard / Select / Premium Arequipa" }
    ],
    attractions: [
      {
        title: "Miraflores / Larcomar",
        city: "Lima",
        price: "Urban walk · shopping varies",
        tag: "Coastal city start",
        imageUrl: images.peru.attractions.miraflores,
        description: "A light first-day area used for arrival, hotel check-in and an easy adaptation pace before the Andean route."
      },
      {
        title: "Museo Larco",
        city: "Lima",
        price: "S/ 50 general admission",
        tag: "Official price highlighted",
        imageUrl: images.peru.attractions.museoLarco,
        description: "The strongest paid cultural anchor in Lima, selected for its museum value and clear entrance price."
      },
      {
        title: "Plaza de Armas",
        city: "Cusco",
        price: "Public square · free",
        tag: "Historic center",
        imageUrl: images.peru.attractions.plazaArmasCusco,
        description: "Main stop for the Cusco adaptation day, combining architecture, history and low physical intensity at altitude."
      },
      {
        title: "San Blas",
        city: "Cusco",
        price: "Neighborhood walk · free",
        tag: "Artistic district",
        imageUrl: images.peru.attractions.sanBlas,
        description: "A slower cultural area used in the itinerary for a calmer afternoon and artisan-style exploration."
      },
      {
        title: "Lake Titicaca",
        city: "Puno",
        price: "Included in attractions estimate",
        tag: "Andean lake route",
        imageUrl: images.peru.attractions.titicaca,
        description: "The core reason to keep part of the trip by land, adding landscape and altitude narrative to the route."
      },
      {
        title: "Monasterio de Santa Catalina",
        city: "Arequipa",
        price: "Included in attractions estimate · confirm current ticket",
        tag: "Heritage highlight",
        imageUrl: images.peru.attractions.santaCatalina,
        description: "A major Arequipa attraction mentioned as a key cultural stop in the final day before returning through Lima."
      },
      {
        title: "Arequipa Historic Center",
        city: "Arequipa",
        price: "Public areas · free",
        tag: "Final heritage city",
        imageUrl: images.peru.attractions.arequipaCenter,
        description: "The closing urban scene of the Peru plan, suitable for a short morning visit before the return flight."
      }
    ],
    timeline: [
      { day: "Day 1", sleep: "Lima", title: "Bolivia → Lima", description: "Arrival, check-in in Miraflores and a light late-afternoon walk.", costUsd: 325, costLocal: "S/ 1,170" },
      { day: "Day 2", sleep: "Lima", title: "Museo Larco + Miraflores / Larcomar / Barranco", description: "Cultural museum anchor with a light urban circuit.", costUsd: 142, costLocal: "S/ 511.2" },
      { day: "Day 3", sleep: "Cusco", title: "Lima → Cusco", description: "Flight to Cusco, altitude adaptation, Plaza de Armas and San Blas.", costUsd: 208, costLocal: "S/ 748.8" },
      { day: "Day 4", sleep: "Cusco", title: "Cultural Cusco", description: "Historic center, light shopping and slower afternoon rhythm.", costUsd: 145, costLocal: "S/ 522.0" },
      { day: "Day 5", sleep: "Puno", title: "Cusco → Puno", description: "Andean transfer, check-in and free evening by Titicaca.", costUsd: 128, costLocal: "S/ 460.8" },
      { day: "Day 6", sleep: "Arequipa", title: "Titicaca + Puno → Arequipa", description: "Morning lake experience followed by land transfer to Arequipa.", costUsd: 156, costLocal: "S/ 561.6" },
      { day: "Day 7", sleep: "—", title: "Arequipa → Lima → Bolivia", description: "Historic center / Santa Catalina in the morning and return connection.", costUsd: 324, costLocal: "S/ 1,166.4" }
    ],
    budgetRows: [
      ["International transport Bolivia ⇄ Peru", "US$390", "S/ 1,404.0", "Bs 2,714.4"],
      ["Internal transport in Peru", "US$208", "S/ 748.8", "Bs 1,447.7"],
      ["Accommodation", "US$420", "S/ 1,512.0", "Bs 2,923.2"],
      ["Food", "US$196", "S/ 705.6", "Bs 1,364.2"],
      ["Urban / local transport", "US$84", "S/ 302.4", "Bs 584.6"],
      ["Attractions", "US$130", "S/ 468.0", "Bs 904.8"],
      ["Shopping / souvenirs reserve", "US$65", "S/ 234.0", "Bs 452.4"],
      ["15% contingency", "US$224", "S/ 806.4", "Bs 1,559.0"],
      ["Recommended total", "US$1,717", "S/ 6,181.2", "Bs 11,950.3"]
    ]
  },
  {
    id: "chile",
    name: "Chile",
    kicker: "Skyline, rooftops, snow and premium dining",
    tagline: "A compact three-day Santiago experience built around urban mobility, high-end restaurants and a snow day.",
    base: "2 adults · 3 days / 4 calendar dates · Lima ⇄ Santiago",
    route: ["Lima", "Santiago", "Valle Nevado", "Santiago", "Lima"],
    currency: "CLP",
    exchange: "Planning exchange rate: 1 USD ≈ CLP 887.71",
    theme: {
      flag: "🇨🇱",
      accent: "#0039a6",
      accent2: "#ffffff",
      accent3: "#d52b1e",
      dark: "#06101f",
      soft: "rgba(0, 57, 166, .18)",
      gradient: "radial-gradient(circle at 15% 12%, rgba(0, 57, 166, .48), transparent 32%), radial-gradient(circle at 82% 18%, rgba(213, 43, 30, .32), transparent 26%), linear-gradient(135deg, #06101f, #091a32 55%, #03050a)"
    },
    heroImage: images.chile.hero,
    budget: {
      capLabel: "Presentation budget",
      capUsd: 2300,
      plannedUsd: 2300,
      balanceUsd: 0,
      headline: "US$2,300 premium plan",
      summary: "The Chile travel uses a premium tone: hotels in Providencia / Lastarria, high-end food and a Valle Nevado experience."
    },
    keyFacts: [
      ["Travel base", "Lima → Santiago round trip, prepared for 2 adults"],
      ["Flight estimate", "About US$250–300 per person; budget table uses CLP 530,000 / US$597 for two"],
      ["Hotels", "Novotel Santiago Providencia and Hotel Capital Bellet"],
      ["Largest variable cost", "Valle Nevado full-day snow experience"],
      ["Money reference", "USD 1 ≈ CLP 887.71"]
    ],
    transport: [
      {
        title: "International flights",
        route: "Lima ⇄ Santiago",
        cost: "CLP 530,000 / US$597 for 2 passengers",
        detail: "The plan compares LATAM, Sky and JetSMART, using a conservative round-trip estimate."
      },
      {
        title: "Airport transfer",
        route: "SCL Airport ⇄ Providencia / hotel area",
        cost: "CLP 56,000 / US$63",
        detail: "Official taxi estimate is CLP 28,000 each way; Uber and shared transfers are alternatives."
      },
      {
        title: "Urban transport",
        route: "Providencia, Lastarria, Vitacura, Costanera Center",
        cost: "CLP 50,000 taxis + CLP 1,790 metro",
        detail: "Uber/taxi is used for comfort; Metro is useful for long urban movement."
      }
    ],
    hotels: [
      { city: "Santiago", area: "Providencia", economy: "Novotel · 2 nights", comfort: "CLP 200,000 / US$226", example: "Modern, comfortable and close to restaurants" },
      { city: "Santiago", area: "Providencia / Lastarria axis", economy: "Hotel Capital Bellet · 1 night", comfort: "CLP 65,000 / US$73", example: "More economic option used to diversify price and experience" }
    ],
    attractions: [
      {
        title: "Cerro San Cristóbal",
        city: "Santiago",
        price: "CLP 2,250 / adult in the PDF estimate",
        tag: "Panoramic start",
        imageUrl: images.chile.attractions.cerroSanCristobal,
        description: "A first-day viewpoint experience by funicular, giving the audience immediate visual context of Santiago."
      },
      {
        title: "Palacio de La Moneda",
        city: "Santiago",
        price: "Free guided tour · reservation required",
        tag: "Civic landmark",
        imageUrl: images.chile.attractions.laMoneda,
        description: "A zero-cost political and historical stop that balances the premium restaurants and paid attractions."
      },
      {
        title: "Valle Nevado",
        city: "Andes near Santiago",
        price: "CLP 484,000 / US$545 for 2 in the budget table",
        tag: "Snow experience",
        imageUrl: images.chile.attractions.valleNevado,
        description: "The most cinematic and price-sensitive part of the Chile plan, presented as a full-day snow experience."
      },
      {
        title: "Sky Costanera",
        city: "Santiago",
        price: "CLP 46,000 / US$52 for 2 in the PDF",
        tag: "City from above",
        imageUrl: images.chile.attractions.skyCostanera,
        description: "A high-impact skyline attraction placed on the final full day for a premium closing view."
      },
      {
        title: "Costanera Center",
        city: "Santiago",
        price: "Shopping varies",
        tag: "Shopping stop",
        imageUrl: images.chile.attractions.costaneraCenter,
        description: "Used after Sky Costanera for shopping and urban exploration."
      },
      {
        title: "Barrio Lastarria",
        city: "Santiago",
        price: "Walk + restaurants vary",
        tag: "Food and nightlife",
        imageUrl: images.chile.attractions.lastarria,
        description: "The route’s main dining and bar area, connected to The Singular, Bocanáriz, Chipe Libre and rooftop stops."
      }
    ],
    food: [
      ["Ambrosia", "~CLP 60,000 per person", "High-end dinner in Vitacura"],
      ["The Singular Restaurant", "~CLP 20,000+ per person in the schedule", "Lastarria premium restaurant / rooftop axis"],
      ["Le Fournil", "~CLP 20,000 per person in the schedule", "French bistro lunch in Vitacura"],
      ["Bocanáriz + Chipe Libre", "~CLP 100,000 for the final dinner block", "Wine bar + pisco bar experience"],
      ["Bajo Zero", "~CLP 30,000 per person", "Mountain lunch during Valle Nevado day"]
    ],
    timeline: [
      { day: "15 Jun", sleep: "Novotel", title: "Arrival + urban monuments", description: "SCL arrival, check-in, Cerro San Cristóbal, La Moneda, Plaza de Armas, Lastarria happy hour and Ambrosia dinner.", costUsd: null, costLocal: "Premium city day" },
      { day: "16 Jun", sleep: "Capital Bellet", title: "Valle Nevado snow day", description: "Transfer to Valle Nevado, snow photos and walk, Bajo Zero lunch, optional ski activity and return to Santiago.", costUsd: null, costLocal: "Highest variable cost" },
      { day: "17 Jun", sleep: "Santiago", title: "Sky Costanera + shopping + Lastarria night", description: "Metro to Costanera, Sky Costanera viewpoint, shopping, Le Fournil lunch, Bellas Artes / Parque Forestal and final dinner.", costUsd: null, costLocal: "Urban close" },
      { day: "18 Jun", sleep: "—", title: "Check-out + return flight", description: "Breakfast, transfer to airport and flight back to Lima.", costUsd: null, costLocal: "Departure" }
    ],
    budgetRows: [
      ["Flights, 2 passengers round trip", "CLP 530,000", "US$597", "LATAM / Sky / JetSMART estimate"],
      ["Novotel, 2 nights", "CLP 200,000", "US$226", "Providencia"],
      ["Hotel Capital Bellet, 1 night", "CLP 65,000", "US$73", "Economic night"],
      ["Airport transfers", "CLP 56,000", "US$63", "Two taxi trips"],
      ["Urban Uber / taxi", "CLP 50,000", "US$56", "Around five rides"],
      ["Metro / bus", "CLP 1,790", "US$2", "Two people"],
      ["Food, 3 days, 2 adults", "CLP 300,000", "US$338", "Premium restaurant reserve"],
      ["Cerro San Cristóbal funicular", "CLP 4,500", "US$5", "Two adults round trip"],
      ["Sky Costanera", "CLP 46,000", "US$52", "Two adults"],
      ["Valle Nevado full-day tour", "CLP 484,000", "US$545", "Two adults"],
      ["Palacio La Moneda", "CLP 0", "US$0", "Free with reservation"],
      ["Contingency", "CLP 54,000", "US$60", "Safety margin"],
      ["Presentation budget", "≈CLP 2,044,000", "≈US$2,300", "Rounded final cap from the PDF"]
    ]
  },
  {
    id: "argentina",
    name: "Argentina",
    kicker: "Buenos Aires in three urban chapters",
    tagline: "A compact executive itinerary focused on civic landmarks, color, architecture and iconic city symbols.",
    base: "3 days / 3 nights · Bolivia ⇄ Buenos Aires",
    route: ["Bolivia", "Buenos Aires", "Bolivia"],
    currency: "ARS",
    exchange: "Planning exchange rate: 1 USD ≈ ARS 900",
    theme: {
      flag: "🇦🇷",
      accent: "#74acdf",
      accent2: "#ffffff",
      accent3: "#f6b40e",
      dark: "#06111a",
      soft: "rgba(116, 172, 223, .16)",
      gradient: "radial-gradient(circle at 15% 8%, rgba(116, 172, 223, .45), transparent 34%), radial-gradient(circle at 78% 18%, rgba(246, 180, 14, .24), transparent 22%), linear-gradient(135deg, #06111a, #0b2030 55%, #030508)"
    },
    heroImage: images.argentina.hero,
    budget: {
      capUsd: 2500,
      plannedUsd: 830,
      balanceUsd: 1670,
      headline: "US$830 estimated total",
      summary: "The Argentina plan is the leanest route: three days in Buenos Aires with a strong remaining budget reserve."
    },
    keyFacts: [
      ["Destination", "Buenos Aires"],
      ["Preferred transport", "Airplane from Bolivia because it is faster and more comfortable than bus"],
      ["Flight estimate", "US$450 / ARS 405,000"],
      ["Hotel", "Hotel Conte · 3 stars · US$60 / ARS 54,000 per night"],
      ["Final balance", "US$1,670 remaining from the original US$2,500 budget"]
    ],
    transport: [
      {
        title: "International flight",
        route: "Bolivia ⇄ Argentina",
        cost: "US$450 / ARS 405,000",
        detail: "The original group plan chose the airplane because it is faster and more comfortable than bus travel."
      },
      {
        title: "Local transport",
        route: "Buenos Aires urban movement",
        cost: "ARS 10,000 per day · ARS 30,000 total",
        detail: "Used for moving between historical center, Puerto Madero, Caminito, city center and Teatro Colón."
      }
    ],
    hotels: [
      { city: "Buenos Aires", area: "Central area", economy: "Hotel Conte", comfort: "US$60 / ARS 54,000 per night", example: "3 nights = ARS 162,000 / US$180" }
    ],
    attractions: [
      {
        title: "Casa Rosada",
        city: "Buenos Aires",
        price: "Included in Day 1 attractions estimate",
        tag: "Political landmark",
        imageUrl: images.argentina.attractions.casaRosada,
        description: "A political and historical landmark used to introduce the civic identity of Buenos Aires."
      },
      {
        title: "Plaza de Mayo",
        city: "Buenos Aires",
        price: "Public square · free",
        tag: "Historic square",
        imageUrl: images.argentina.attractions.plazaMayo,
        description: "An essential public square connected to the city’s civic life and the first-day historical route."
      },
      {
        title: "Puerto Madero",
        city: "Buenos Aires",
        price: "Urban walk · free",
        tag: "Modern city area",
        imageUrl: images.argentina.attractions.puertoMadero,
        description: "A modern urban district showing the development and contemporary side of Buenos Aires."
      },
      {
        title: "Caminito",
        city: "La Boca, Buenos Aires",
        price: "Street walk · shopping varies",
        tag: "Color and art",
        imageUrl: images.argentina.attractions.caminito,
        description: "Chosen for its colorful houses and artistic culture, making it one of the strongest visual cards."
      },
      {
        title: "Obelisco de Buenos Aires",
        city: "Buenos Aires",
        price: "Exterior landmark · free",
        tag: "Main city symbol",
        imageUrl: images.argentina.attractions.obelisco,
        description: "One of the main symbols of the city and a clear anchor for the second-day urban exploration."
      },
      {
        title: "Teatro Colón",
        city: "Buenos Aires",
        price: "ARS 34,000 official guided-visit reference",
        tag: "World-class theater",
        imageUrl: images.argentina.attractions.teatroColon,
        description: "A major cultural stop, described in the PDF as one of the most important theaters in the world."
      }
    ],
    timeline: [
      { day: "Day 1", sleep: "Hotel Conte", title: "Casa Rosada + Plaza de Mayo + Puerto Madero", description: "09:00 arrival/start · 10:00 Casa Rosada · 11:30 Plaza de Mayo · 13:00 lunch · 15:00 Puerto Madero · 17:30 photos and walk · 19:30 dinner.", costUsd: 127, costLocal: "ARS 114,000" },
      { day: "Day 2", sleep: "Hotel Conte", title: "Caminito + Obelisco + city center", description: "09:00 breakfast · 10:00 Caminito · 12:30 lunch · 14:00 Obelisco · 15:30 city center · 18:00 return/rest · 20:00 dinner.", costUsd: 104, costLocal: "ARS 94,000" },
      { day: "Day 3", sleep: "Hotel Conte", title: "Teatro Colón + free time + shopping", description: "09:00 breakfast · 10:00 Teatro Colón · 12:30 lunch · 14:00 shopping · 17:00 final city walk · 20:00 dinner and end.", costUsd: 149, costLocal: "ARS 134,000" }
    ],
    budgetRows: [
      ["Flight Bolivia ⇄ Argentina", "ARS 405,000", "US$450", "Round trip estimate"],
      ["Hotel Conte", "ARS 162,000", "US$180", "3 nights at ARS 54,000"],
      ["Food", "ARS 90,000", "US$100", "ARS 30,000 per day"],
      ["Transportation", "ARS 30,000", "US$33", "ARS 10,000 per day"],
      ["Attractions Day 1", "ARS 20,000", "US$22", "Historical / cultural route"],
      ["Souvenirs / shopping Day 3", "ARS 40,000", "US$44", "Final free time"],
      ["Total estimated trip cost", "ARS 747,000", "US$830", "Flight + Day 1 + Day 2 + Day 3"],
      ["Remaining money", "ARS 1,503,000", "US$1,670", "From ARS 2,250,000 / US$2,500 budget"]
    ]
  }
];

export const finalComparison = {
  rows: [
    ["Peru", "1 traveler", "7 days", "US$1,717", "US$1,183 inside its own US$2,900 cap"],
    ["Chile", "2 adults", "3 days", "US$2,300", "Premium presentation budget"],
    ["Argentina", "Likely 1 traveler", "3 days", "US$830", "US$1,670 inside its own US$2,500 cap"],
    ["Conservative total", "Mixed bases", "—", "US$4,847", "US$3,153 remaining from the class US$8,000 cap"]
  ],
};
