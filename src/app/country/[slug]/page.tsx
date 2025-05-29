import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const countryData = {
  france: {
    title: 'France Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore France\'s most beautiful destinations from Paris to the French Riviera. Discover iconic landmarks, art, cuisine, and culture with our comprehensive France travel guide.',
    keywords: 'France travel guide, Paris, French Riviera, Loire Valley, Mont Saint-Michel, French food, France attractions, France itinerary, France travel tips',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    heroAlt: 'French landscape featuring Paris skyline and Eiffel Tower',
    destinations: [
      {
        name: "Paris",
        description: "The City of Light, home to iconic landmarks, world-class museums, and elegant boulevards. A perfect blend of history, art, and modern culture.",
        image: "https://images.unsplash.com/photo-1431274172761-fca41d930114",
        highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
        bestTime: "April to June, September to October",
        duration: "4-5 days minimum"
      },
      {
        name: "French Riviera",
        description: "The glamorous Mediterranean coastline featuring pristine beaches, luxury resorts, and charming coastal towns.",
        image: "https://images.unsplash.com/photo-1533614767967-c4c1fb457e7a",
        highlights: ["Nice", "Cannes", "Saint-Tropez"],
        bestTime: "June to September",
        duration: "3-4 days"
      },
      {
        name: "Loire Valley",
        description: "Known as the 'Garden of France', featuring magnificent châteaux, historic towns, and renowned vineyards.",
        image: "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211",
        highlights: ["Château de Chambord", "Château de Chenonceau", "Wine Tours"],
        bestTime: "May to October",
        duration: "2-3 days"
      },
      {
        name: "Mont Saint-Michel",
        description: "Iconic tidal island crowned by a stunning medieval monastery, one of France's most remarkable landmarks.",
        image: "https://images.unsplash.com/photo-1580909090792-1b7ae20ef4cd",
        highlights: ["Abbey", "Medieval Ramparts", "Tidal Views"],
        bestTime: "July to August",
        duration: "1-2 days"
      },
      {
        name: "Provence",
        description: "Picturesque region known for lavender fields, charming villages, Roman ruins, and excellent wine.",
        image: "https://images.unsplash.com/photo-1595844730298-b3c5f464afd1",
        highlights: ["Avignon", "Lavender Fields", "Aix-en-Provence"],
        bestTime: "June to August (lavender season)",
        duration: "3-4 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover French gastronomy through cooking classes, wine tastings, and food tours across different regions.",
        activities: [
          "Croissant baking in Paris",
          "Wine tasting in Bordeaux",
          "Cheese making in Normandy",
          "Truffle hunting in Périgord"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in France's rich cultural heritage through art, history, and local traditions.",
        activities: [
          "Art workshops in Montmartre",
          "Palace of Versailles tours",
          "Perfume making in Grasse",
          "French language cafés"
        ]
      }
    ]
  },
  italy: {
    title: 'Italy Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Italy\'s most beautiful destinations from Rome to Venice. Discover iconic landmarks, art, cuisine, and culture with our comprehensive Italy travel guide.',
    keywords: 'Italy travel guide, Rome, Florence, Venice, Tuscany, Italian food, Italy attractions, Italy itinerary, Italy travel tips',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    heroAlt: 'Italian landscape featuring Rome skyline and Colosseum',
    destinations: [
      {
        name: "Rome",
        description: "The Eternal City, home to ancient ruins, world-class art, and vibrant street life. A perfect blend of history and modern culture.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
        highlights: ["Colosseum", "Vatican Museums", "Roman Forum"],
        bestTime: "March to May, September to November",
        duration: "3-4 days minimum"
      },
      {
        name: "Florence",
        description: "Birthplace of the Renaissance, featuring magnificent art, architecture, and Tuscan cuisine.",
        image: "https://images.unsplash.com/photo-1541370545674-ebf8425b3df8",
        highlights: ["Uffizi Gallery", "Duomo", "Ponte Vecchio"],
        bestTime: "April to October",
        duration: "2-3 days"
      },
      {
        name: "Venice",
        description: "The floating city of canals, gondolas, and historic palaces. A unique blend of art, architecture, and romance.",
        image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
        highlights: ["St. Mark's Basilica", "Grand Canal", "Rialto Bridge"],
        bestTime: "September to November",
        duration: "2-3 days"
      },
      {
        name: "Tuscany",
        description: "Rolling hills, medieval towns, and world-class wineries define this iconic Italian region.",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
        highlights: ["Siena", "Chianti Region", "Val d'Orcia"],
        bestTime: "April to October",
        duration: "4-5 days"
      },
      {
        name: "Amalfi Coast",
        description: "Dramatic coastline featuring colorful towns, stunning beaches, and Mediterranean charm.",
        image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7",
        highlights: ["Positano", "Ravello", "Boat Tours"],
        bestTime: "May to September",
        duration: "3-4 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Italian gastronomy through cooking classes, wine tastings, and food tours across different regions.",
        activities: [
          "Pasta making in Bologna",
          "Wine tasting in Tuscany",
          "Pizza making in Naples",
          "Truffle hunting in Piedmont"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Italy's rich cultural heritage through art, history, and local traditions.",
        activities: [
          "Art workshops in Florence",
          "Gladiator school in Rome",
          "Mask making in Venice",
          "Italian language cafés"
        ]
      }
    ]
  },
  spain: {
    title: 'Spain Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Spain\'s most vibrant destinations from Barcelona to Madrid. Discover iconic landmarks, art, cuisine, and culture with our comprehensive Spain travel guide.',
    keywords: 'Spain travel guide, Barcelona, Madrid, Seville, Granada, Spanish food, Spain attractions, Spain itinerary, Spain travel tips',
    heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325',
    heroAlt: 'Spanish landscape featuring Plaza de España in Seville',
    destinations: [
      {
        name: "Barcelona",
        description: "A city of artistic marvels, with stunning architecture, vibrant culture, and beautiful beaches. Home to Gaudi's masterpieces and Catalan heritage.",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
        highlights: ["Sagrada Familia", "Park Güell", "Las Ramblas"],
        bestTime: "April to June, September to October",
        duration: "4-5 days minimum"
      },
      {
        name: "Madrid",
        description: "Spain's dynamic capital, offering world-class art museums, elegant boulevards, and beautiful parks, combined with fantastic food scene.",
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
        highlights: ["Prado Museum", "Royal Palace", "Retiro Park"],
        bestTime: "March to May, September to November",
        duration: "3-4 days"
      },
      {
        name: "Seville",
        description: "The heart of Andalusia, famous for its flamenco heritage, stunning architecture, and orange-scented streets.",
        image: "https://images.unsplash.com/photo-1559386484-97dfc0e15539",
        highlights: ["Plaza de España", "Real Alcázar", "Giralda Tower"],
        bestTime: "March to May",
        duration: "2-3 days"
      },
      {
        name: "Granada",
        description: "Home to the magnificent Alhambra palace and the historic Albaicín quarter, showcasing Spain's Moorish heritage.",
        image: "https://images.unsplash.com/photo-1591806663029-da5da36df6c8",
        highlights: ["Alhambra", "Albaicín", "Sierra Nevada"],
        bestTime: "March to May, September to November",
        duration: "2-3 days"
      },
      {
        name: "San Sebastian",
        description: "A coastal gem known for its beautiful beaches, Basque culture, and world-renowned culinary scene.",
        image: "https://images.unsplash.com/photo-1591465001609-ded6360ecaab",
        highlights: ["La Concha Beach", "Pintxos Bars", "Monte Igueldo"],
        bestTime: "June to September",
        duration: "2-3 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Spanish gastronomy through cooking classes, wine tastings, and food tours across different regions.",
        activities: [
          "Paella cooking in Valencia",
          "Wine tasting in Rioja",
          "Pintxos tour in San Sebastian",
          "Tapas crawl in Madrid"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Spain's rich cultural heritage through art, history, and local traditions.",
        activities: [
          "Flamenco shows in Seville",
          "Art museums in Madrid",
          "Arabic baths in Granada",
          "Spanish language cafés"
        ]
      }
    ]
  },
  greece: {
    title: 'Greece Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Greece\'s enchanting destinations from Athens to Santorini. Discover ancient ruins, stunning islands, cuisine, and culture with our comprehensive Greece travel guide.',
    keywords: 'Greece travel guide, Athens, Santorini, Mykonos, Crete, Greek food, Greece attractions, Greece itinerary, Greece travel tips',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
    heroAlt: 'Stunning view of Santorini with white buildings and blue domes',
    destinations: [
      {
        name: "Athens",
        description: "The historic capital, where ancient ruins meet modern life. Home to the iconic Acropolis and vibrant neighborhoods filled with culture and art.",
        image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb",
        highlights: ["Acropolis", "Plaka", "Ancient Agora"],
        bestTime: "March to May, September to November",
        duration: "3-4 days minimum"
      },
      {
        name: "Santorini",
        description: "A stunning volcanic island known for its dramatic caldera views, white-washed buildings, and spectacular sunsets.",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
        highlights: ["Oia", "Caldera Views", "Red Beach"],
        bestTime: "April to October",
        duration: "3-4 days"
      },
      {
        name: "Mykonos",
        description: "Cosmopolitan island famous for its beautiful beaches, windmills, and vibrant nightlife scene.",
        image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a",
        highlights: ["Little Venice", "Windmills", "Paradise Beach"],
        bestTime: "June to September",
        duration: "2-3 days"
      },
      {
        name: "Crete",
        description: "Greece's largest island, offering rich history, beautiful beaches, mountain villages, and excellent cuisine.",
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe",
        highlights: ["Palace of Knossos", "Samaria Gorge", "Elafonisi Beach"],
        bestTime: "April to October",
        duration: "4-5 days"
      },
      {
        name: "Meteora",
        description: "Stunning monastery complex perched atop dramatic rock formations, offering spiritual and natural wonder.",
        image: "https://images.unsplash.com/photo-1579422369814-86262fd35c31",
        highlights: ["Monasteries", "Sunset Views", "Rock Climbing"],
        bestTime: "March to May, September to November",
        duration: "2-3 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Greek gastronomy through cooking classes, wine tastings, and food tours across different regions.",
        activities: [
          "Traditional cooking in Athens",
          "Wine tasting in Santorini",
          "Olive oil tasting in Crete",
          "Street food tours in Thessaloniki"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Greece's rich cultural heritage through history, art, and local traditions.",
        activities: [
          "Ancient ruins exploration",
          "Greek pottery workshops",
          "Traditional dance lessons",
          "Island hopping adventures"
        ]
      }
    ]
  },
  germany: {
    title: 'Germany Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Germany\'s diverse destinations from Berlin to Bavaria. Discover historic cities, fairytale castles, cuisine, and culture with our comprehensive Germany travel guide.',
    keywords: 'Germany travel guide, Berlin, Munich, Black Forest, Bavaria, German food, Germany attractions, Germany itinerary, Germany travel tips',
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
    heroAlt: 'Stunning view of Neuschwanstein Castle in Bavaria',
    destinations: [
      {
        name: "Berlin",
        description: "Germany's dynamic capital, where history meets modern culture. A city of art, innovation, and powerful historical landmarks.",
        image: "https://images.unsplash.com/photo-1560969184-10fe8719e047",
        highlights: ["Brandenburg Gate", "East Side Gallery", "Museum Island"],
        bestTime: "May to September",
        duration: "4-5 days minimum"
      },
      {
        name: "Munich",
        description: "Bavaria's capital, known for its traditional festivals, beer halls, and stunning architecture, perfectly blending old and new.",
        image: "https://images.unsplash.com/photo-1595867818082-083862f3d630",
        highlights: ["Marienplatz", "Oktoberfest", "English Garden"],
        bestTime: "April to October",
        duration: "3-4 days"
      },
      {
        name: "Black Forest",
        description: "Mystical woodland region famous for its scenic beauty, traditional villages, and cuckoo clocks.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
        highlights: ["Triberg Waterfalls", "Baden-Baden", "Hiking Trails"],
        bestTime: "June to October",
        duration: "2-3 days"
      },
      {
        name: "Hamburg",
        description: "Maritime city with stunning architecture, vibrant cultural scene, and Europe's second-largest port.",
        image: "https://images.unsplash.com/photo-1581513700095-7272f3e5f1b6",
        highlights: ["Speicherstadt", "Elbphilharmonie", "Harbor Tour"],
        bestTime: "May to September",
        duration: "2-3 days"
      },
      {
        name: "Heidelberg",
        description: "Romantic university town with medieval charm, riverside setting, and iconic castle ruins.",
        image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef",
        highlights: ["Heidelberg Castle", "Old Bridge", "Philosophers' Way"],
        bestTime: "April to October",
        duration: "2-3 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover German gastronomy through traditional food, beer tastings, and regional specialties.",
        activities: [
          "Beer brewing workshop in Munich",
          "Black Forest cake making",
          "Wine tasting in Rhine Valley",
          "Street food tours in Berlin"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Germany's rich cultural heritage through history, art, and local traditions.",
        activities: [
          "Classical music concerts",
          "Christmas markets in winter",
          "Castle tours in Bavaria",
          "Historical walking tours"
        ]
      }
    ]
  },
  japan: {
    title: 'Japan Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Japan\'s fascinating destinations from Tokyo to Kyoto. Discover ancient temples, modern cities, cuisine, and culture with our comprehensive Japan travel guide.',
    keywords: 'Japan travel guide, Tokyo, Kyoto, Mount Fuji, Japanese food, Japan attractions, Japan itinerary, Japan travel tips',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    heroAlt: 'Beautiful view of Mount Fuji with cherry blossoms in Japan',
    destinations: [
      {
        name: "Tokyo",
        description: "Japan's dynamic capital, where tradition meets ultra-modernity. Experience cutting-edge technology, ancient temples, and vibrant pop culture.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        highlights: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Skytree"],
        bestTime: "March to May, September to November",
        duration: "4-5 days minimum"
      },
      {
        name: "Kyoto",
        description: "The cultural heart of Japan, featuring over 1,600 temples, traditional gardens, and preserved historic districts.",
        image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f",
        highlights: ["Fushimi Inari Shrine", "Kinkaku-ji", "Arashiyama Bamboo Grove"],
        bestTime: "March to May, October to November",
        duration: "3-4 days"
      },
      {
        name: "Osaka",
        description: "Japan's kitchen and entertainment capital, known for its amazing food scene, friendly locals, and vibrant nightlife.",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549",
        highlights: ["Dotonbori", "Osaka Castle", "Kuromon Market"],
        bestTime: "March to May, October to November",
        duration: "2-3 days"
      },
      {
        name: "Hakone",
        description: "Scenic hot spring resort town offering stunning views of Mount Fuji and peaceful natural settings.",
        image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
        highlights: ["Mount Fuji Views", "Onsen Baths", "Hakone Shrine"],
        bestTime: "July to August, October to November",
        duration: "2-3 days"
      },
      {
        name: "Hiroshima",
        description: "A city of peace and resilience, offering powerful historical sites and beautiful island scenery.",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
        highlights: ["Peace Memorial", "Miyajima Island", "Atomic Dome"],
        bestTime: "March to May, October to November",
        duration: "2-3 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Japanese gastronomy through cooking classes, market tours, and regional specialties.",
        activities: [
          "Sushi making workshop",
          "Ramen cooking class",
          "Sake tasting experience",
          "Street food tours"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Japan's rich cultural heritage through traditional arts and customs.",
        activities: [
          "Tea ceremony participation",
          "Kimono wearing experience",
          "Zen meditation session",
          "Traditional craft workshops"
        ]
      }
    ]
  },
  china: {
    title: 'China Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore China\'s incredible destinations from the Great Wall to ancient cities. Discover iconic landmarks, rich history, cuisine, and culture with our comprehensive China travel guide.',
    keywords: 'China travel guide, Beijing, Shanghai, Great Wall, Chinese food, China attractions, China itinerary, China travel tips',
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d',
    heroAlt: 'The Great Wall of China stretching across mountains at sunset',
    destinations: [
      {
        name: "Beijing",
        description: "China's historic capital, home to imperial palaces, ancient temples, and the iconic Great Wall. A perfect blend of ancient and modern China.",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b",
        highlights: ["Great Wall", "Forbidden City", "Temple of Heaven"],
        bestTime: "March to May, September to October",
        duration: "4-5 days minimum"
      },
      {
        name: "Shanghai",
        description: "China's largest city and financial hub, featuring futuristic skylines, historic districts, and vibrant culture.",
        image: "https://images.unsplash.com/photo-1545893835-abaa50cbe628",
        highlights: ["The Bund", "Yu Garden", "Pudong Skyline"],
        bestTime: "March to May, September to November",
        duration: "3-4 days"
      },
      {
        name: "Xi'an",
        description: "Ancient capital featuring the Terracotta Army and one of the best-preserved ancient city walls in China.",
        image: "https://images.unsplash.com/photo-1591499370596-5d3d1f337cc9",
        highlights: ["Terracotta Warriors", "City Wall", "Muslim Quarter"],
        bestTime: "March to May, September to October",
        duration: "2-3 days"
      },
      {
        name: "Guilin",
        description: "Stunning landscape of limestone karst mountains and peaceful rivers, offering some of China's most beautiful scenery.",
        image: "https://images.unsplash.com/photo-1537687264563-47a1116b6970",
        highlights: ["Li River Cruise", "Rice Terraces", "Reed Flute Cave"],
        bestTime: "April to October",
        duration: "3-4 days"
      },
      {
        name: "Chengdu",
        description: "Capital of Sichuan Province, famous for spicy cuisine, giant pandas, and traditional culture.",
        image: "https://images.unsplash.com/photo-1545506475-5a8e68a23825",
        highlights: ["Giant Panda Base", "Leshan Giant Buddha", "Jinli Street"],
        bestTime: "March to June, September to November",
        duration: "2-3 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Chinese gastronomy through cooking classes, market tours, and regional specialties.",
        activities: [
          "Dumpling making workshop",
          "Street food tours",
          "Tea ceremonies",
          "Sichuan cooking class"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in China's rich cultural heritage through traditional arts and customs.",
        activities: [
          "Calligraphy lessons",
          "Tai Chi in parks",
          "Traditional medicine workshops",
          "Temple visits and ceremonies"
        ]
      }
    ]
  },
  thailand: {
    title: 'Thailand Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Thailand\'s tropical paradise from Bangkok to pristine islands. Discover temples, beaches, cuisine, and culture with our comprehensive Thailand travel guide.',
    keywords: 'Thailand travel guide, Bangkok, Phuket, Chiang Mai, Thai food, Thailand attractions, Thailand itinerary, Thailand travel tips',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    heroAlt: 'Beautiful Thai temple with sunset background',
    destinations: [
      {
        name: "Bangkok",
        description: "Thailand's vibrant capital, where traditional temples meet modern skyscrapers, with amazing street food and nightlife.",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed",
        highlights: ["Grand Palace", "Wat Phra Kaew", "Chatuchak Market"],
        bestTime: "November to March",
        duration: "3-4 days minimum"
      },
      {
        name: "Chiang Mai",
        description: "Cultural capital of the north, known for temples, traditional crafts, and elephant sanctuaries.",
        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a34",
        highlights: ["Doi Suthep", "Night Bazaar", "Elephant Nature Park"],
        bestTime: "October to February",
        duration: "3-4 days"
      },
      {
        name: "Phuket",
        description: "Thailand's largest island, offering beautiful beaches, luxury resorts, and vibrant nightlife.",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5",
        highlights: ["Phi Phi Islands", "Old Town", "Big Buddha"],
        bestTime: "November to April",
        duration: "4-5 days"
      },
      {
        name: "Ayutthaya",
        description: "Ancient capital with impressive temple ruins and historical parks, a UNESCO World Heritage site.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
        highlights: ["Temple Ruins", "Buddha Head in Tree", "River Cruise"],
        bestTime: "November to February",
        duration: "1-2 days"
      },
      {
        name: "Krabi",
        description: "Stunning coastal province with limestone cliffs, clear waters, and beautiful beaches.",
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
        highlights: ["Railay Beach", "Tiger Cave Temple", "Island Hopping"],
        bestTime: "November to March",
        duration: "3-4 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Thai gastronomy through cooking classes, market tours, and street food exploration.",
        activities: [
          "Thai cooking classes",
          "Street food tours",
          "Fruit carving workshop",
          "Market exploration"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Thailand's rich cultural heritage through traditional arts and customs.",
        activities: [
          "Temple meditation",
          "Thai massage course",
          "Traditional dance shows",
          "Muay Thai training"
        ]
      }
    ]
  },
  vietnam: {
    title: 'Vietnam Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Vietnam\'s diverse landscapes from Hanoi to Ho Chi Minh City. Discover ancient towns, beautiful bays, cuisine, and culture with our comprehensive Vietnam travel guide.',
    keywords: 'Vietnam travel guide, Hanoi, Ha Long Bay, Hoi An, Vietnamese food, Vietnam attractions, Vietnam itinerary, Vietnam travel tips',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592',
    heroAlt: 'Beautiful landscape of Ha Long Bay with traditional boats',
    destinations: [
      {
        name: "Hanoi",
        description: "Vietnam's charming capital, featuring colonial architecture, ancient temples, and vibrant street life.",
        image: "https://images.unsplash.com/photo-1509030450996-dd1a26367f37",
        highlights: ["Old Quarter", "Hoan Kiem Lake", "Temple of Literature"],
        bestTime: "October to December",
        duration: "3-4 days minimum"
      },
      {
        name: "Ha Long Bay",
        description: "UNESCO World Heritage site with thousands of limestone islands rising from emerald waters.",
        image: "https://images.unsplash.com/photo-1573270695497-da9c3360dc18",
        highlights: ["Island Cruises", "Cave Exploration", "Kayaking"],
        bestTime: "October to December",
        duration: "2-3 days"
      },
      {
        name: "Hoi An",
        description: "Ancient trading port known for its well-preserved architecture, tailors, and lantern-lit streets.",
        image: "https://images.unsplash.com/photo-1540870373726-97f5a8194c5a",
        highlights: ["Ancient Town", "Japanese Bridge", "Lantern Market"],
        bestTime: "February to July",
        duration: "2-3 days"
      },
      {
        name: "Ho Chi Minh City",
        description: "Dynamic southern hub with French colonial landmarks, war history, and modern development.",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
        highlights: ["Cu Chi Tunnels", "War Remnants Museum", "Ben Thanh Market"],
        bestTime: "December to April",
        duration: "3-4 days"
      },
      {
        name: "Sapa",
        description: "Mountain town famous for rice terraces, ethnic minorities, and trekking opportunities.",
        image: "https://images.unsplash.com/photo-1528891677728-8ec148196e62",
        highlights: ["Rice Terraces", "Fansipan Mountain", "Local Markets"],
        bestTime: "March to May, September to November",
        duration: "2-3 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Vietnamese gastronomy through cooking classes, market tours, and street food exploration.",
        activities: [
          "Pho cooking class",
          "Street food tours",
          "Coffee culture experience",
          "Market visits"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Vietnam's rich cultural heritage through traditional arts and customs.",
        activities: [
          "Water puppet shows",
          "Traditional craft villages",
          "Countryside bike tours",
          "Local homestays"
        ]
      }
    ]
  },
  korea: {
    title: 'South Korea Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore South Korea\'s dynamic cities and serene temples. Discover K-culture, ancient traditions, cuisine, and modern innovations with our comprehensive Korea travel guide.',
    keywords: 'Korea travel guide, Seoul, Busan, Jeju Island, Korean food, Korea attractions, Korea itinerary, Korea travel tips',
    heroImage: 'https://images.unsplash.com/photo-1538669715315-155098f0fb1d',
    heroAlt: 'Beautiful view of Seoul skyline with Namsan Tower',
    destinations: [
      {
        name: "Seoul",
        description: "South Korea's dynamic capital, where ancient palaces meet K-pop culture and technological innovation.",
        image: "https://images.unsplash.com/photo-1538669715315-155098f0fb1d",
        highlights: ["Gyeongbokgung Palace", "Namsan Tower", "Hongdae"],
        bestTime: "March to May, September to November",
        duration: "4-5 days minimum"
      },
      {
        name: "Busan",
        description: "Vibrant port city known for beaches, seafood, temples, and colorful cultural villages.",
        image: "https://images.unsplash.com/photo-1578632618324-1e5e85df4d8c",
        highlights: ["Haeundae Beach", "Gamcheon Culture Village", "Haedong Yonggungsa Temple"],
        bestTime: "April to June, September to November",
        duration: "2-3 days"
      },
      {
        name: "Jeju Island",
        description: "Volcanic island paradise with beautiful beaches, waterfalls, and unique local culture.",
        image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58",
        highlights: ["Hallasan Mountain", "Seongsan Ilchulbong", "Manjanggul Cave"],
        bestTime: "April to June, September to October",
        duration: "3-4 days"
      },
      {
        name: "Gyeongju",
        description: "Ancient capital of the Silla Kingdom, filled with historic sites and cultural treasures.",
        image: "https://images.unsplash.com/photo-1625995386160-e224de438509",
        highlights: ["Bulguksa Temple", "Seokguram Grotto", "Tumuli Park"],
        bestTime: "March to May, September to November",
        duration: "2-3 days"
      },
      {
        name: "Jeonju",
        description: "Traditional Korean culture hub, famous for hanok village and bibimbap cuisine.",
        image: "https://images.unsplash.com/photo-1625995386160-e224de438509",
        highlights: ["Hanok Village", "Korean Food Culture", "Traditional Crafts"],
        bestTime: "March to May, September to November",
        duration: "1-2 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Korean gastronomy through cooking classes, market tours, and street food exploration.",
        activities: [
          "Kimchi making class",
          "Street food tours",
          "Traditional tea ceremony",
          "Korean BBQ experience"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Korea's rich cultural heritage through traditional arts and modern K-culture.",
        activities: [
          "Hanbok wearing",
          "K-pop dance class",
          "Temple stay program",
          "Traditional craft workshops"
        ]
      }
    ]
  },
  usa: {
    title: 'United States Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore America\'s most iconic destinations from New York to California. Discover national parks, vibrant cities, diverse cuisine, and culture with our comprehensive USA travel guide.',
    keywords: 'USA travel guide, New York, California, National Parks, American food, USA attractions, USA itinerary, USA travel tips, American cities, United States tourism',
    heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    heroAlt: 'Stunning view of New York City skyline at sunset',
    destinations: [
      {
        name: "New York City",
        description: "The iconic metropolis offering world-class culture, dining, shopping, and entertainment. A city that truly never sleeps.",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
        highlights: ["Times Square", "Central Park", "Empire State Building"],
        bestTime: "April to June, September to November",
        duration: "4-5 days minimum"
      },
      {
        name: "San Francisco",
        description: "A beautiful coastal city known for its iconic bridge, historic cable cars, diverse neighborhoods, and tech culture.",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
        highlights: ["Golden Gate Bridge", "Alcatraz", "Fisherman's Wharf"],
        bestTime: "September to November",
        duration: "3-4 days"
      },
      {
        name: "Grand Canyon",
        description: "One of the world's most spectacular natural wonders, offering breathtaking views and outdoor adventures.",
        image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
        highlights: ["South Rim", "Hiking Trails", "Sunset Views"],
        bestTime: "March to May, September to November",
        duration: "2-3 days"
      },
      {
        name: "Hawaii",
        description: "Paradise islands offering stunning beaches, volcanic landscapes, rich culture, and perfect tropical weather.",
        image: "https://images.unsplash.com/photo-1542259009477-d625272157b7",
        highlights: ["Waikiki Beach", "Volcanoes National Park", "Road to Hana"],
        bestTime: "April to October",
        duration: "7-10 days"
      },
      {
        name: "Las Vegas",
        description: "The entertainment capital of the world, featuring world-class shows, casinos, dining, and desert adventures.",
        image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4",
        highlights: ["The Strip", "Fremont Street", "Shows"],
        bestTime: "March to May, September to November",
        duration: "3-4 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover American gastronomy through regional specialties, food tours, and iconic dining experiences.",
        activities: [
          "New York pizza tours",
          "Southern BBQ trails",
          "California wine tasting",
          "Food truck festivals"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in America's diverse cultural heritage through arts, history, and local traditions.",
        activities: [
          "Broadway shows in NYC",
          "Jazz clubs in New Orleans",
          "Hollywood studio tours",
          "Native American heritage sites"
        ]
      }
    ]
  },
  brazil: {
    title: 'Brazil Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Brazil\'s vibrant destinations from Rio to the Amazon. Discover beaches, rainforests, cuisine, and culture with our comprehensive Brazil travel guide.',
    keywords: 'Brazil travel guide, Rio de Janeiro, Amazon, Brazilian food, Brazil attractions, Brazil itinerary, Brazil travel tips, Brazilian cities, Carnival, beaches',
    heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325',
    heroAlt: 'Stunning view of Rio de Janeiro with Christ the Redeemer statue',
    destinations: [
      {
        name: "Rio de Janeiro",
        description: "The Marvelous City, featuring iconic beaches, vibrant culture, and stunning landscapes. Home to world-famous Carnival celebrations.",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
        highlights: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain"],
        bestTime: "December to March (Summer/Carnival)",
        duration: "4-5 days minimum"
      },
      {
        name: "Amazon Rainforest",
        description: "The world's largest rainforest offering unique wildlife encounters, indigenous cultures, and unforgettable river cruises.",
        image: "https://images.unsplash.com/photo-1516514213560-5d0977d3c8e0",
        highlights: ["Manaus Opera House", "River Tours", "Wildlife Watching"],
        bestTime: "July to September (Dry Season)",
        duration: "3-4 days"
      },
      {
        name: "Salvador",
        description: "Brazil's capital of happiness, known for its colorful colonial architecture, Afro-Brazilian culture, and vibrant music scene.",
        image: "https://images.unsplash.com/photo-1564658504685-63774e1d159e",
        highlights: ["Pelourinho Historic Center", "African Heritage", "Local Festivals"],
        bestTime: "March to June, September to November",
        duration: "2-3 days"
      },
      {
        name: "Iguazu Falls",
        description: "One of the world's most spectacular waterfalls, straddling the border with Argentina, offering breathtaking views and adventures.",
        image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2",
        highlights: ["Devil's Throat", "Boat Tours", "Helicopter Rides"],
        bestTime: "March to November",
        duration: "2-3 days"
      },
      {
        name: "Fernando de Noronha",
        description: "Paradise archipelago featuring pristine beaches, crystal-clear waters, and incredible marine life.",
        image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef",
        highlights: ["Baía do Sancho", "Dolphin Watching", "Snorkeling"],
        bestTime: "August to January",
        duration: "3-4 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Brazilian gastronomy through regional specialties, cooking classes, and food tours.",
        activities: [
          "Feijoada cooking class",
          "Churrasco experience",
          "Açaí tasting",
          "Local market tours"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Brazil's vibrant cultural heritage through music, dance, and traditions.",
        activities: [
          "Samba dance lessons",
          "Carnival costume making",
          "Capoeira workshops",
          "Favela community tours"
        ]
      }
    ]
  },
  canada: {
    title: 'Canada Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Canada\'s breathtaking destinations from Vancouver to Quebec. Discover national parks, vibrant cities, cuisine, and culture with our comprehensive Canada travel guide.',
    keywords: 'Canada travel guide, Vancouver, Toronto, Montreal, Canadian food, Canada attractions, Canada itinerary, Canada travel tips, Canadian cities, Canadian tourism',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce',
    heroAlt: 'Stunning view of Moraine Lake in Banff National Park, Canadian Rockies',
    destinations: [
      {
        name: "Vancouver",
        description: "A stunning coastal city surrounded by mountains, offering perfect blend of urban life and outdoor adventures.",
        image: "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba",
        highlights: ["Stanley Park", "Granville Island", "Grouse Mountain"],
        bestTime: "June to September",
        duration: "3-4 days minimum"
      },
      {
        name: "Toronto",
        description: "Canada's largest city, a multicultural metropolis featuring iconic landmarks, diverse neighborhoods, and vibrant culture.",
        image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f",
        highlights: ["CN Tower", "Royal Ontario Museum", "Distillery District"],
        bestTime: "May to October",
        duration: "3-4 days"
      },
      {
        name: "Banff National Park",
        description: "A paradise for nature lovers with stunning mountain landscapes, glacial lakes, and abundant wildlife.",
        image: "https://images.unsplash.com/photo-1561134643-668f9b71bb53",
        highlights: ["Lake Louise", "Moraine Lake", "Banff Gondola"],
        bestTime: "June to August, December to March",
        duration: "4-5 days"
      },
      {
        name: "Montreal",
        description: "A charming blend of European flair and modern North American culture, known for its historic architecture and food scene.",
        image: "https://images.unsplash.com/photo-1519178614-68673b201f36",
        highlights: ["Old Montreal", "Mount Royal", "Notre-Dame Basilica"],
        bestTime: "June to September",
        duration: "2-3 days"
      },
      {
        name: "Quebec City",
        description: "North America's oldest walled city, offering French culture, historic charm, and European atmosphere.",
        image: "https://images.unsplash.com/photo-1558489580-fab3c3109a34",
        highlights: ["Old Quebec", "Château Frontenac", "Plains of Abraham"],
        bestTime: "July to September, December to February",
        duration: "2-3 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Canadian gastronomy through regional specialties, food tours, and local delicacies.",
        activities: [
          "Poutine tasting in Quebec",
          "Maple syrup experience",
          "West Coast seafood tours",
          "Multicultural food markets"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Canada's rich cultural heritage through arts, history, and local traditions.",
        activities: [
          "Indigenous cultural tours",
          "Winter festivals",
          "Historic site visits",
          "Hockey game experience"
        ]
      }
    ]
  },
  mexico: {
    title: 'Mexico Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Mexico\'s vibrant destinations from ancient ruins to pristine beaches. Discover rich culture, cuisine, and traditions with our comprehensive Mexico travel guide.',
    keywords: 'Mexico travel guide, Mexico City, Cancun, Tulum, Mexican food, Mexico attractions, Mexico itinerary, Mexico travel tips, Mexican cities, Mexican tourism',
    heroImage: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542',
    heroAlt: 'Stunning view of Chichen Itza pyramid at sunset, Mexico',
    destinations: [
      {
        name: "Mexico City",
        description: "The bustling capital, blending colonial architecture with modern culture, world-class museums, and incredible street food.",
        image: "https://images.unsplash.com/photo-1518659526054-190340b32735",
        highlights: ["Zócalo", "Frida Kahlo Museum", "Teotihuacan"],
        bestTime: "March to May",
        duration: "4-5 days minimum"
      },
      {
        name: "Cancun & Riviera Maya",
        description: "Paradise beaches, crystal-clear waters, and luxury resorts along the Caribbean coast.",
        image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18",
        highlights: ["Beaches", "Cenotes", "Mayan Ruins"],
        bestTime: "December to April",
        duration: "5-7 days"
      },
      {
        name: "Oaxaca",
        description: "Cultural heart of Mexico, famous for its cuisine, indigenous cultures, and colonial architecture.",
        image: "https://images.unsplash.com/photo-1585975985662-449adf2e7f8f",
        highlights: ["Monte Albán", "Food Markets", "Mezcal Tours"],
        bestTime: "October to March",
        duration: "3-4 days"
      },
      {
        name: "San Miguel de Allende",
        description: "Charming colonial city known for its arts scene, colorful architecture, and cultural festivals.",
        image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396",
        highlights: ["Parroquia", "Art Galleries", "Colonial Streets"],
        bestTime: "November to April",
        duration: "2-3 days"
      },
      {
        name: "Tulum",
        description: "Bohemian beach town featuring Mayan ruins, eco-resorts, and pristine beaches.",
        image: "https://images.unsplash.com/photo-1504730655501-24c39ac53f0e",
        highlights: ["Mayan Ruins", "Beaches", "Cenotes"],
        bestTime: "November to March",
        duration: "3-4 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Mexican gastronomy through regional specialties, cooking classes, and street food tours.",
        activities: [
          "Street food tours",
          "Cooking classes",
          "Mezcal tasting",
          "Market exploration"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Mexico's rich cultural heritage through arts, history, and traditions.",
        activities: [
          "Day of the Dead celebrations",
          "Artisan workshops",
          "Archaeological sites",
          "Traditional dance shows"
        ]
      }
    ]
  },
  argentina: {
    title: 'Argentina Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Argentina\'s diverse landscapes from Patagonia to Buenos Aires. Discover tango, wine, nature, and culture with our comprehensive Argentina travel guide.',
    keywords: 'Argentina travel guide, Buenos Aires, Patagonia, Mendoza, Argentine food, Argentina attractions, Argentina itinerary, Argentina travel tips',
    heroImage: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849',
    heroAlt: 'Stunning view of Mount Fitz Roy in Patagonia, Argentina',
    destinations: [
      {
        name: "Buenos Aires",
        description: "The passionate capital city, known for tango, stunning architecture, and vibrant cultural scene.",
        image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e",
        highlights: ["La Boca", "Recoleta", "San Telmo Market"],
        bestTime: "March to May, September to November",
        duration: "4-5 days minimum"
      },
      {
        name: "Patagonia",
        description: "Dramatic landscapes featuring glaciers, mountains, and pristine wilderness.",
        image: "https://images.unsplash.com/photo-1460176449511-ff3dc12eecef",
        highlights: ["Perito Moreno Glacier", "Mount Fitz Roy", "Torres del Paine"],
        bestTime: "December to March",
        duration: "5-7 days"
      },
      {
        name: "Mendoza",
        description: "World-renowned wine region with stunning Andean backdrop and excellent cuisine.",
        image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a",
        highlights: ["Wine Tours", "Aconcagua", "Olive Farms"],
        bestTime: "March to May, September to November",
        duration: "3-4 days"
      },
      {
        name: "Iguazu Falls",
        description: "One of the world's most spectacular waterfalls, surrounded by tropical rainforest.",
        image: "https://images.unsplash.com/photo-1564587433899-f89341cff472",
        highlights: ["Devil's Throat", "Boat Tours", "Rainforest Walks"],
        bestTime: "March to April, August to October",
        duration: "2-3 days"
      },
      {
        name: "Bariloche",
        description: "Alpine-style resort town offering lakes, mountains, and outdoor adventures.",
        image: "https://images.unsplash.com/photo-1583254151664-5a637d0504dc",
        highlights: ["Nahuel Huapi Lake", "Cerro Catedral", "Chocolate Shops"],
        bestTime: "December to March (Summer), July to September (Winter)",
        duration: "3-4 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Argentine gastronomy through wine tours, asados, and regional specialties.",
        activities: [
          "Wine tasting in Mendoza",
          "Asado experience",
          "Mate ceremony",
          "Empanada making class"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Argentina's rich cultural heritage through tango, gaucho culture, and arts.",
        activities: [
          "Tango shows and lessons",
          "Gaucho day trips",
          "Football matches",
          "Art gallery tours"
        ]
      }
    ]
  },
  turkey: {
    title: 'Turkey Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Turkey\'s fascinating destinations from Istanbul to Cappadocia. Discover ancient history, rich culture, cuisine, and traditions with our comprehensive Turkey travel guide.',
    keywords: 'Turkey travel guide, Istanbul, Cappadocia, Turkish food, Turkey attractions, Turkey itinerary, Turkey travel tips, Turkish cities, Turkish tourism',
    heroImage: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05',
    heroAlt: 'Stunning view of Istanbul skyline with Hagia Sophia and Blue Mosque',
    destinations: [
      {
        name: "Istanbul",
        description: "A magical city straddling two continents, where East meets West, featuring stunning mosques, bustling bazaars, and rich history.",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
        highlights: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar"],
        bestTime: "March to May, September to November",
        duration: "4-5 days minimum"
      },
      {
        name: "Cappadocia",
        description: "Otherworldly landscape of fairy chimneys, cave churches, and underground cities, famous for hot air balloon rides.",
        image: "https://images.unsplash.com/photo-1570643965467-92e5146c27f9",
        highlights: ["Hot Air Balloons", "Underground Cities", "Cave Hotels"],
        bestTime: "April to June, September to November",
        duration: "3-4 days"
      },
      {
        name: "Antalya",
        description: "Beautiful Mediterranean coastal city offering ancient ruins, stunning beaches, and luxury resorts.",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
        highlights: ["Old Town", "Düden Waterfalls", "Ancient Ruins"],
        bestTime: "April to October",
        duration: "3-4 days"
      },
      {
        name: "Pamukkale",
        description: "Natural wonder featuring white travertine terraces and ancient Roman ruins of Hierapolis.",
        image: "https://images.unsplash.com/photo-1590114399591-8e2b4c56e116",
        highlights: ["Travertine Terraces", "Hierapolis", "Cleopatra's Pool"],
        bestTime: "March to June, September to November",
        duration: "2-3 days"
      },
      {
        name: "Ephesus",
        description: "One of the best-preserved ancient cities in the Mediterranean, showcasing remarkable Roman architecture.",
        image: "https://images.unsplash.com/photo-1564593523884-6eadee7ee605",
        highlights: ["Library of Celsus", "Temple of Hadrian", "Ancient Theater"],
        bestTime: "March to May, September to November",
        duration: "1-2 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Turkish gastronomy through regional specialties, cooking classes, and food tours.",
        activities: [
          "Turkish coffee experience",
          "Street food tours",
          "Cooking workshops",
          "Spice bazaar exploration"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Turkey's rich cultural heritage through traditional arts and customs.",
        activities: [
          "Turkish bath (hamam)",
          "Whirling dervishes show",
          "Carpet weaving demos",
          "Traditional pottery making"
        ]
      }
    ]
  },
  croatia: {
    title: 'Croatia Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints',
    description: 'Explore Croatia\'s stunning destinations from Dubrovnik to Split. Discover ancient cities, beautiful islands, cuisine, and culture with our comprehensive Croatia travel guide.',
    keywords: 'Croatia travel guide, Dubrovnik, Split, Croatian food, Croatia attractions, Croatia itinerary, Croatia travel tips, Croatian cities, Croatian tourism',
    heroImage: 'https://images.unsplash.com/photo-1555990538-17392d5e576a',
    heroAlt: 'Beautiful view of Dubrovnik old town and Adriatic Sea',
    destinations: [
      {
        name: "Dubrovnik",
        description: "The 'Pearl of the Adriatic', featuring stunning medieval walls, limestone streets, and crystal-clear waters.",
        image: "https://images.unsplash.com/photo-1542295474-5e78124e5d59",
        highlights: ["City Walls", "Old Town", "Cable Car"],
        bestTime: "May to June, September to October",
        duration: "3-4 days minimum"
      },
      {
        name: "Split",
        description: "Ancient Roman city centered around Diocletian's Palace, offering vibrant culture and coastal charm.",
        image: "https://images.unsplash.com/photo-1555990538-17392d5e576a",
        highlights: ["Diocletian's Palace", "Riva Promenade", "Marjan Hill"],
        bestTime: "May to October",
        duration: "2-3 days"
      },
      {
        name: "Hvar",
        description: "Glamorous island known for lavender fields, historic towns, and vibrant nightlife.",
        image: "https://images.unsplash.com/photo-1542882247-b86e5a727f8c",
        highlights: ["Hvar Town", "Lavender Fields", "Pakleni Islands"],
        bestTime: "June to September",
        duration: "2-3 days"
      },
      {
        name: "Plitvice Lakes",
        description: "Stunning national park featuring cascading lakes, waterfalls, and wooden walkways.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        highlights: ["16 Lakes", "Waterfalls", "Hiking Trails"],
        bestTime: "June to September",
        duration: "1-2 days"
      },
      {
        name: "Rovinj",
        description: "Charming coastal town in Istria, known for its colorful houses and artistic atmosphere.",
        image: "https://images.unsplash.com/photo-1593420035426-5c4e53a11d46",
        highlights: ["Old Town", "St. Euphemia Church", "Artists' Street"],
        bestTime: "May to October",
        duration: "2-3 days"
      }
    ],
    experiences: [
      {
        name: "Culinary Adventures",
        description: "Discover Croatian gastronomy through regional specialties, wine tours, and food experiences.",
        activities: [
          "Truffle hunting in Istria",
          "Wine tasting tours",
          "Seafood experiences",
          "Olive oil tasting"
        ]
      },
      {
        name: "Cultural Experiences",
        description: "Immerse yourself in Croatia's rich cultural heritage through history, arts, and traditions.",
        activities: [
          "Game of Thrones tours",
          "Traditional klapa music",
          "Folk festivals",
          "Island hopping"
        ]
      }
    ]
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const country = countryData[slug as keyof typeof countryData];
  
  if (!country) {
    return {
      title: 'Country Not Found',
      description: 'The requested country page could not be found.'
    };
  }

  return {
    title: country.title,
    description: country.description,
    keywords: country.keywords,
    openGraph: {
      title: country.title,
      description: country.description,
      images: [country.heroImage],
    },
  };
}

export default async function CountryGuide({ params }: PageProps) {
  const slug = params.slug;
  const country = countryData[slug as keyof typeof countryData];

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src={country.heroImage}
          alt={country.heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg">
              {slug.charAt(0).toUpperCase() + slug.slice(1)} Travel Guide
            </h1>
            <p className="text-xl mb-6 text-white drop-shadow-md">
              Discover the magic of {slug.charAt(0).toUpperCase() + slug.slice(1)}: from iconic landmarks to picturesque countryside, and world-renowned cuisine.
            </p>
            <div className="flex gap-4">
              <Link 
                href="#destinations"
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Top Destinations
              </Link>
              <Link 
                href="#experiences"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold mb-2 text-white">Best Time to Visit</h3>
              <p className="text-gray-300">April-October</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💶</span>
              </div>
              <h3 className="font-semibold mb-2 text-white">Currency</h3>
              <p className="text-gray-300">Euro (€)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="font-semibold mb-2 text-white">Language</h3>
              <p className="text-gray-300">
                {slug === 'france' ? 'French' : slug === 'italy' ? 'Italian' : slug === 'spain' ? 'Spanish' : slug === 'greece' ? 'Greek' : slug === 'germany' ? 'German' : slug === 'japan' ? 'Japanese' : slug === 'china' ? 'Mandarin' : slug === 'thailand' ? 'Thai' : slug === 'vietnam' ? 'Vietnamese' : slug === 'korea' ? 'Korean' : slug === 'usa' ? 'English' : 'Portuguese'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-semibold mb-2 text-white">Time Zone</h3>
              <p className="text-gray-300">CET (UTC+1)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section id="destinations" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
            Must-Visit Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {country.destinations.map((destination) => (
              <div key={destination.name} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="space-y-2 text-sm bg-gray-800 p-4 rounded-lg text-white">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">✨</span>
                      <div>
                        <strong>Highlights:</strong>
                        <p className="text-gray-300">{destination.highlights.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🗓️</span>
                      <div>
                        <strong>Best Time:</strong>
                        <p className="text-gray-300">{destination.bestTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg mr-2">⌛</span>
                      <div>
                        <strong>Suggested Duration:</strong>
                        <p className="text-gray-300">{destination.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
            Unique {slug.charAt(0).toUpperCase() + slug.slice(1)} Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {country.experiences.map((experience) => (
              <div key={experience.name} className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{experience.name}</h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Recommended Activities:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {experience.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
            Essential Travel Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Transportation</h3>
              <ul className="space-y-2 text-gray-600">
                {slug === 'france' ? (
                  <>
                    <li>• TGV trains connect major cities</li>
                    <li>• Metro systems in larger cities</li>
                    <li>• Car rental for countryside exploration</li>
                    <li>• Navigo pass for Paris transport</li>
                  </>
                ) : slug === 'italy' ? (
                  <>
                    <li>• High-speed trains between cities</li>
                    <li>• Extensive bus networks</li>
                    <li>• Car rental for rural areas</li>
                    <li>• Water taxis in Venice</li>
                  </>
                ) : slug === 'spain' ? (
                  <>
                    <li>• AVE high-speed trains</li>
                    <li>• Metro in major cities</li>
                    <li>• Car rental for regions</li>
                    <li>• Local bus networks</li>
                  </>
                ) : slug === 'greece' ? (
                  <>
                    <li>• Ferry services between islands</li>
                    <li>• Metro in Athens</li>
                    <li>• KTEL intercity buses</li>
                    <li>• Domestic flights to islands</li>
                  </>
                ) : slug === 'germany' ? (
                  <>
                    <li>• Deutsche Bahn rail network</li>
                    <li>• Efficient public transport</li>
                    <li>• Autobahn for driving</li>
                    <li>• Regional transport passes</li>
                  </>
                ) : slug === 'japan' ? (
                  <>
                    <li>• JR Rail Pass for intercity travel</li>
                    <li>• Efficient metro systems</li>
                    <li>• Shinkansen bullet trains</li>
                    <li>• IC cards for local transport</li>
                  </>
                ) : slug === 'china' ? (
                  <>
                    <li>• High-speed rail network</li>
                    <li>• Metro systems in major cities</li>
                    <li>• DiDi ride-hailing app</li>
                    <li>• Domestic flights for long distances</li>
                  </>
                ) : slug === 'thailand' ? (
                  <>
                    <li>• BTS Skytrain in Bangkok</li>
                    <li>• Tuk-tuks for short trips</li>
                    <li>• Long-distance buses</li>
                    <li>• Island ferries</li>
                  </>
                ) : slug === 'vietnam' ? (
                  <>
                    <li>• Motorbike taxis (Grab)</li>
                    <li>• Overnight trains</li>
                    <li>• Local buses</li>
                    <li>• Domestic flights</li>
                  </>
                ) : slug === 'korea' ? (
                  <>
                    <li>• Efficient metro system</li>
                    <li>• KTX high-speed trains</li>
                    <li>• Local buses</li>
                    <li>• T-money card for transport</li>
                  </>
                ) : slug === 'usa' ? (
                  <>
                    <li>• Domestic flights for long distances</li>
                    <li>• Metro in major cities</li>
                    <li>• Long-distance buses</li>
                    <li>• Uber available in cities</li>
                  </>
                ) : (
                  <>
                    <li>• Domestic flights for long distances</li>
                    <li>• Metro in major cities</li>
                    <li>• Long-distance buses</li>
                    <li>• Uber available in cities</li>
                  </>
                )}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cultural Tips</h3>
              <ul className="space-y-2 text-gray-600">
                {slug === 'france' ? (
                  <>
                    <li>• Greet with "Bonjour" when entering shops</li>
                    <li>• Lunch: 12-2 PM, Dinner: 7:30-10 PM</li>
                    <li>• Many shops closed on Sundays</li>
                    <li>• Learn basic French phrases</li>
                  </>
                ) : slug === 'italy' ? (
                  <>
                    <li>• Greet with "Ciao" or "Buongiorno"</li>
                    <li>• Lunch: 1-3 PM, Dinner: 8-11 PM</li>
                    <li>• Afternoon siesta is common</li>
                    <li>• Learn basic Italian phrases</li>
                  </>
                ) : slug === 'spain' ? (
                  <>
                    <li>• Greet with "Hola" or "Buenos días"</li>
                    <li>• Late dining culture (9-11 PM)</li>
                    <li>• Siesta time respected</li>
                    <li>• Learn basic Spanish phrases</li>
                  </>
                ) : slug === 'greece' ? (
                  <>
                    <li>• Greet with "Yassou"</li>
                    <li>• Lunch: 2-4 PM, Dinner: 9-11 PM</li>
                    <li>• Afternoon rest common in summer</li>
                    <li>• Learn basic Greek phrases</li>
                  </>
                ) : slug === 'germany' ? (
                  <>
                    <li>• Greet with "Guten Tag"</li>
                    <li>• Punctuality is important</li>
                    <li>• Most shops closed on Sundays</li>
                    <li>• Learn basic German phrases</li>
                  </>
                ) : slug === 'japan' ? (
                  <>
                    <li>• Bow when greeting</li>
                    <li>• Remove shoes before entering homes</li>
                    <li>• Use two hands when giving/receiving</li>
                    <li>• Learn basic Japanese phrases</li>
                  </>
                ) : slug === 'china' ? (
                  <>
                    <li>• Respect personal space</li>
                    <li>• Learn basic Mandarin phrases</li>
                    <li>• Use chopsticks properly</li>
                    <li>• Accept business cards with both hands</li>
                  </>
                ) : slug === 'thailand' ? (
                  <>
                    <li>• Greet with a wai (bow)</li>
                    <li>• Dress modestly at temples</li>
                    <li>• Remove shoes indoors</li>
                    <li>• Don't touch people's heads</li>
                  </>
                ) : slug === 'vietnam' ? (
                  <>
                    <li>• Use both hands when passing items</li>
                    <li>• Remove shoes before entering homes</li>
                    <li>• Respect elder people</li>
                    <li>• Learn basic Vietnamese phrases</li>
                  </>
                ) : slug === 'korea' ? (
                  <>
                    <li>• Tipping is expected (15-20%)</li>
                    <li>• Casual dress is acceptable</li>
                    <li>• Greet with "Hi" or "Hello"</li>
                    <li>• Respect personal space</li>
                  </>
                ) : slug === 'usa' ? (
                  <>
                    <li>• Greet with "Olá" (hello)</li>
                    <li>• Casual and beach attire common</li>
                    <li>• Personal space is closer</li>
                    <li>• Learn basic Portuguese phrases</li>
                  </>
                ) : (
                  <>
                    <li>• Greet with "Olá" (hello)</li>
                    <li>• Casual and beach attire common</li>
                    <li>• Personal space is closer</li>
                    <li>• Learn basic Portuguese phrases</li>
                  </>
                )}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Money Saving</h3>
              <ul className="space-y-2 text-gray-600">
                {slug === 'france' ? (
                  <>
                    <li>• Museum Pass for multiple entries</li>
                    <li>• Free first Sunday at museums</li>
                    <li>• Prix fixe lunch menus</li>
                    <li>• Book trains in advance</li>
                  </>
                ) : slug === 'italy' ? (
                  <>
                    <li>• Roma Pass for attractions</li>
                    <li>• Free church visits</li>
                    <li>• Lunch at local trattorias</li>
                    <li>• Regional train passes</li>
                  </>
                ) : slug === 'spain' ? (
                  <>
                    <li>• City tourist cards</li>
                    <li>• Menu del día for lunch</li>
                    <li>• Free museum hours</li>
                    <li>• Book AVE trains early</li>
                  </>
                ) : slug === 'greece' ? (
                  <>
                    <li>• Museum pass in Athens</li>
                    <li>• Visit during shoulder season</li>
                    <li>• Ferry passes for island hopping</li>
                    <li>• Eat at local tavernas</li>
                  </>
                ) : slug === 'germany' ? (
                  <>
                    <li>• City tourist cards</li>
                    <li>• Deutsche Bahn savings fares</li>
                    <li>• Free walking tours</li>
                    <li>• Student discounts</li>
                  </>
                ) : slug === 'japan' ? (
                  <>
                    <li>• JR Pass for long-distance travel</li>
                    <li>• Eat at local ramen shops</li>
                    <li>• Stay in capsule hotels</li>
                    <li>• Visit temples for free</li>
                  </>
                ) : slug === 'china' ? (
                  <>
                    <li>• Use WeChat Pay/Alipay</li>
                    <li>• Book trains in advance</li>
                    <li>• Eat at local restaurants</li>
                    <li>• Use metro for city travel</li>
                  </>
                ) : slug === 'thailand' ? (
                  <>
                    <li>• Stay in guesthouses</li>
                    <li>• Eat at street food stalls</li>
                    <li>• Use local transport</li>
                    <li>• Visit temples for free</li>
                  </>
                ) : slug === 'vietnam' ? (
                  <>
                    <li>• Stay in hostels/guesthouses</li>
                    <li>• Eat street food</li>
                    <li>• Use sleeper trains</li>
                    <li>• Bargain at markets</li>
                  </>
                ) : slug === 'korea' ? (
                  <>
                    <li>• City tourist passes</li>
                    <li>• National Park annual pass</li>
                    <li>• Happy hour specials</li>
                    <li>• Book flights in advance</li>
                  </>
                ) : slug === 'usa' ? (
                  <>
                    <li>• Travel in off-season</li>
                    <li>• Eat at local restaurants</li>
                    <li>• Use public transport</li>
                    <li>• Book flights in advance</li>
                  </>
                ) : (
                  <>
                    <li>• Travel in off-season</li>
                    <li>• Eat at local restaurants</li>
                    <li>• Use public transport</li>
                    <li>• Book flights in advance</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Get {slug.charAt(0).toUpperCase() + slug.slice(1)} Travel Updates
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Subscribe for insider tips, seasonal guides, and special offers.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button
                type="submit"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 