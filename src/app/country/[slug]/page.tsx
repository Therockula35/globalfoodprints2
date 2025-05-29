import { Metadata } from &apos;next&apos;;
import Image from &apos;next/image&apos;;
import Link from &apos;next/link&apos;;
import { notFound } from &apos;next/navigation&apos;;

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
};

const countryData = {
  france: {
    title: &apos;France Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore France\'s most beautiful destinations from Paris to the French Riviera. Discover iconic landmarks, art, cuisine, and culture with our comprehensive France travel guide.&apos;,
    keywords: &apos;France travel guide, Paris, French Riviera, Loire Valley, Mont Saint-Michel, French food, France attractions, France itinerary, France travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1436491865332-7a61a109cc05&apos;,
    heroAlt: &apos;French landscape featuring Paris skyline and Eiffel Tower&apos;,
    destinations: [
      {
        name: &quot;Paris&quot;,
        description: &quot;The City of Light, home to iconic landmarks, world-class museums, and elegant boulevards. A perfect blend of history, art, and modern culture.&quot;,
        image: &quot;https://images.unsplash.com/photo-1431274172761-fca41d930114&quot;,
        highlights: [&quot;Eiffel Tower&quot;, &quot;Louvre Museum&quot;, &quot;Notre-Dame Cathedral&quot;],
        bestTime: &quot;April to June, September to October&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;French Riviera&quot;,
        description: &quot;The glamorous Mediterranean coastline featuring pristine beaches, luxury resorts, and charming coastal towns.&quot;,
        image: &quot;https://images.unsplash.com/photo-1533614767967-c4c1fb457e7a&quot;,
        highlights: [&quot;Nice&quot;, &quot;Cannes&quot;, &quot;Saint-Tropez&quot;],
        bestTime: &quot;June to September&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Loire Valley&quot;,
        description: &quot;Known as the &apos;Garden of France&apos;, featuring magnificent châteaux, historic towns, and renowned vineyards.&quot;,
        image: &quot;https://images.unsplash.com/photo-1591289009723-aef0a1a8a211&quot;,
        highlights: [&quot;Château de Chambord&quot;, &quot;Château de Chenonceau&quot;, &quot;Wine Tours&quot;],
        bestTime: &quot;May to October&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Mont Saint-Michel&quot;,
        description: &quot;Iconic tidal island crowned by a stunning medieval monastery, one of France&apos;s most remarkable landmarks.&quot;,
        image: &quot;https://images.unsplash.com/photo-1580909090792-1b7ae20ef4cd&quot;,
        highlights: [&quot;Abbey&quot;, &quot;Medieval Ramparts&quot;, &quot;Tidal Views&quot;],
        bestTime: &quot;July to August&quot;,
        duration: &quot;1-2 days&quot;
      },
      {
        name: &quot;Provence&quot;,
        description: &quot;Picturesque region known for lavender fields, charming villages, Roman ruins, and excellent wine.&quot;,
        image: &quot;https://images.unsplash.com/photo-1595844730298-b3c5f464afd1&quot;,
        highlights: [&quot;Avignon&quot;, &quot;Lavender Fields&quot;, &quot;Aix-en-Provence&quot;],
        bestTime: &quot;June to August (lavender season)&quot;,
        duration: &quot;3-4 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover French gastronomy through cooking classes, wine tastings, and food tours across different regions.&quot;,
        activities: [
          &quot;Croissant baking in Paris&quot;,
          &quot;Wine tasting in Bordeaux&quot;,
          &quot;Cheese making in Normandy&quot;,
          &quot;Truffle hunting in Périgord&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in France&apos;s rich cultural heritage through art, history, and local traditions.&quot;,
        activities: [
          &quot;Art workshops in Montmartre&quot;,
          &quot;Palace of Versailles tours&quot;,
          &quot;Perfume making in Grasse&quot;,
          &quot;French language cafés&quot;
        ]
      }
    ]
  },
  italy: {
    title: &apos;Italy Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Italy\'s most beautiful destinations from Rome to Venice. Discover iconic landmarks, art, cuisine, and culture with our comprehensive Italy travel guide.&apos;,
    keywords: &apos;Italy travel guide, Rome, Florence, Venice, Tuscany, Italian food, Italy attractions, Italy itinerary, Italy travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1516483638261-f4dbaf036963&apos;,
    heroAlt: &apos;Italian landscape featuring Rome skyline and Colosseum&apos;,
    destinations: [
      {
        name: &quot;Rome&quot;,
        description: &quot;The Eternal City, home to ancient ruins, world-class art, and vibrant street life. A perfect blend of history and modern culture.&quot;,
        image: &quot;https://images.unsplash.com/photo-1552832230-c0197dd311b5&quot;,
        highlights: [&quot;Colosseum&quot;, &quot;Vatican Museums&quot;, &quot;Roman Forum&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;3-4 days minimum&quot;
      },
      {
        name: &quot;Florence&quot;,
        description: &quot;Birthplace of the Renaissance, featuring magnificent art, architecture, and Tuscan cuisine.&quot;,
        image: &quot;https://images.unsplash.com/photo-1541370545674-ebf8425b3df8&quot;,
        highlights: [&quot;Uffizi Gallery&quot;, &quot;Duomo&quot;, &quot;Ponte Vecchio&quot;],
        bestTime: &quot;April to October&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Venice&quot;,
        description: &quot;The floating city of canals, gondolas, and historic palaces. A unique blend of art, architecture, and romance.&quot;,
        image: &quot;https://images.unsplash.com/photo-1514890547357-a9ee288728e0&quot;,
        highlights: [&quot;St. Mark&apos;s Basilica&quot;, &quot;Grand Canal&quot;, &quot;Rialto Bridge&quot;],
        bestTime: &quot;September to November&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Tuscany&quot;,
        description: &quot;Rolling hills, medieval towns, and world-class wineries define this iconic Italian region.&quot;,
        image: &quot;https://images.unsplash.com/photo-1467269204594-9661b134dd2b&quot;,
        highlights: [&quot;Siena&quot;, &quot;Chianti Region&quot;, &quot;Val d&apos;Orcia&quot;],
        bestTime: &quot;April to October&quot;,
        duration: &quot;4-5 days&quot;
      },
      {
        name: &quot;Amalfi Coast&quot;,
        description: &quot;Dramatic coastline featuring colorful towns, stunning beaches, and Mediterranean charm.&quot;,
        image: &quot;https://images.unsplash.com/photo-1533587851505-d119e13fa0d7&quot;,
        highlights: [&quot;Positano&quot;, &quot;Ravello&quot;, &quot;Boat Tours&quot;],
        bestTime: &quot;May to September&quot;,
        duration: &quot;3-4 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Italian gastronomy through cooking classes, wine tastings, and food tours across different regions.&quot;,
        activities: [
          &quot;Pasta making in Bologna&quot;,
          &quot;Wine tasting in Tuscany&quot;,
          &quot;Pizza making in Naples&quot;,
          &quot;Truffle hunting in Piedmont&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Italy&apos;s rich cultural heritage through art, history, and local traditions.&quot;,
        activities: [
          &quot;Art workshops in Florence&quot;,
          &quot;Gladiator school in Rome&quot;,
          &quot;Mask making in Venice&quot;,
          &quot;Italian language cafés&quot;
        ]
      }
    ]
  },
  spain: {
    title: &apos;Spain Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Spain\'s most vibrant destinations from Barcelona to Madrid. Discover iconic landmarks, art, cuisine, and culture with our comprehensive Spain travel guide.&apos;,
    keywords: &apos;Spain travel guide, Barcelona, Madrid, Seville, Granada, Spanish food, Spain attractions, Spain itinerary, Spain travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1543783207-ec64e4d95325&apos;,
    heroAlt: &apos;Spanish landscape featuring Plaza de España in Seville&apos;,
    destinations: [
      {
        name: &quot;Barcelona&quot;,
        description: &quot;A city of artistic marvels, with stunning architecture, vibrant culture, and beautiful beaches. Home to Gaudi&apos;s masterpieces and Catalan heritage.&quot;,
        image: &quot;https://images.unsplash.com/photo-1583422409516-2895a77efded&quot;,
        highlights: [&quot;Sagrada Familia&quot;, &quot;Park Güell&quot;, &quot;Las Ramblas&quot;],
        bestTime: &quot;April to June, September to October&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;Madrid&quot;,
        description: &quot;Spain&apos;s dynamic capital, offering world-class art museums, elegant boulevards, and beautiful parks, combined with fantastic food scene.&quot;,
        image: &quot;https://images.unsplash.com/photo-1539037116277-4db20889f2d4&quot;,
        highlights: [&quot;Prado Museum&quot;, &quot;Royal Palace&quot;, &quot;Retiro Park&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Seville&quot;,
        description: &quot;The heart of Andalusia, famous for its flamenco heritage, stunning architecture, and orange-scented streets.&quot;,
        image: &quot;https://images.unsplash.com/photo-1559386484-97dfc0e15539&quot;,
        highlights: [&quot;Plaza de España&quot;, &quot;Real Alcázar&quot;, &quot;Giralda Tower&quot;],
        bestTime: &quot;March to May&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Granada&quot;,
        description: &quot;Home to the magnificent Alhambra palace and the historic Albaicín quarter, showcasing Spain&apos;s Moorish heritage.&quot;,
        image: &quot;https://images.unsplash.com/photo-1591806663029-da5da36df6c8&quot;,
        highlights: [&quot;Alhambra&quot;, &quot;Albaicín&quot;, &quot;Sierra Nevada&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;San Sebastian&quot;,
        description: &quot;A coastal gem known for its beautiful beaches, Basque culture, and world-renowned culinary scene.&quot;,
        image: &quot;https://images.unsplash.com/photo-1591465001609-ded6360ecaab&quot;,
        highlights: [&quot;La Concha Beach&quot;, &quot;Pintxos Bars&quot;, &quot;Monte Igueldo&quot;],
        bestTime: &quot;June to September&quot;,
        duration: &quot;2-3 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Spanish gastronomy through cooking classes, wine tastings, and food tours across different regions.&quot;,
        activities: [
          &quot;Paella cooking in Valencia&quot;,
          &quot;Wine tasting in Rioja&quot;,
          &quot;Pintxos tour in San Sebastian&quot;,
          &quot;Tapas crawl in Madrid&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Spain&apos;s rich cultural heritage through art, history, and local traditions.&quot;,
        activities: [
          &quot;Flamenco shows in Seville&quot;,
          &quot;Art museums in Madrid&quot;,
          &quot;Arabic baths in Granada&quot;,
          &quot;Spanish language cafés&quot;
        ]
      }
    ]
  },
  greece: {
    title: &apos;Greece Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Greece\'s enchanting destinations from Athens to Santorini. Discover ancient ruins, stunning islands, cuisine, and culture with our comprehensive Greece travel guide.&apos;,
    keywords: &apos;Greece travel guide, Athens, Santorini, Mykonos, Crete, Greek food, Greece attractions, Greece itinerary, Greece travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1533105079780-92b9be482077&apos;,
    heroAlt: &apos;Stunning view of Santorini with white buildings and blue domes&apos;,
    destinations: [
      {
        name: &quot;Athens&quot;,
        description: &quot;The historic capital, where ancient ruins meet modern life. Home to the iconic Acropolis and vibrant neighborhoods filled with culture and art.&quot;,
        image: &quot;https://images.unsplash.com/photo-1603565816030-6b389eeb23cb&quot;,
        highlights: [&quot;Acropolis&quot;, &quot;Plaka&quot;, &quot;Ancient Agora&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;3-4 days minimum&quot;
      },
      {
        name: &quot;Santorini&quot;,
        description: &quot;A stunning volcanic island known for its dramatic caldera views, white-washed buildings, and spectacular sunsets.&quot;,
        image: &quot;https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff&quot;,
        highlights: [&quot;Oia&quot;, &quot;Caldera Views&quot;, &quot;Red Beach&quot;],
        bestTime: &quot;April to October&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Mykonos&quot;,
        description: &quot;Cosmopolitan island famous for its beautiful beaches, windmills, and vibrant nightlife scene.&quot;,
        image: &quot;https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a&quot;,
        highlights: [&quot;Little Venice&quot;, &quot;Windmills&quot;, &quot;Paradise Beach&quot;],
        bestTime: &quot;June to September&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Crete&quot;,
        description: &quot;Greece&apos;s largest island, offering rich history, beautiful beaches, mountain villages, and excellent cuisine.&quot;,
        image: &quot;https://images.unsplash.com/photo-1586861635167-e5223aadc9fe&quot;,
        highlights: [&quot;Palace of Knossos&quot;, &quot;Samaria Gorge&quot;, &quot;Elafonisi Beach&quot;],
        bestTime: &quot;April to October&quot;,
        duration: &quot;4-5 days&quot;
      },
      {
        name: &quot;Meteora&quot;,
        description: &quot;Stunning monastery complex perched atop dramatic rock formations, offering spiritual and natural wonder.&quot;,
        image: &quot;https://images.unsplash.com/photo-1579422369814-86262fd35c31&quot;,
        highlights: [&quot;Monasteries&quot;, &quot;Sunset Views&quot;, &quot;Rock Climbing&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;2-3 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Greek gastronomy through cooking classes, wine tastings, and food tours across different regions.&quot;,
        activities: [
          &quot;Traditional cooking in Athens&quot;,
          &quot;Wine tasting in Santorini&quot;,
          &quot;Olive oil tasting in Crete&quot;,
          &quot;Street food tours in Thessaloniki&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Greece&apos;s rich cultural heritage through history, art, and local traditions.&quot;,
        activities: [
          &quot;Ancient ruins exploration&quot;,
          &quot;Greek pottery workshops&quot;,
          &quot;Traditional dance lessons&quot;,
          &quot;Island hopping adventures&quot;
        ]
      }
    ]
  },
  germany: {
    title: &apos;Germany Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Germany\'s diverse destinations from Berlin to Bavaria. Discover historic cities, fairytale castles, cuisine, and culture with our comprehensive Germany travel guide.&apos;,
    keywords: &apos;Germany travel guide, Berlin, Munich, Black Forest, Bavaria, German food, Germany attractions, Germany itinerary, Germany travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1467269204594-9661b134dd2b&apos;,
    heroAlt: &apos;Stunning view of Neuschwanstein Castle in Bavaria&apos;,
    destinations: [
      {
        name: &quot;Berlin&quot;,
        description: &quot;Germany&apos;s dynamic capital, where history meets modern culture. A city of art, innovation, and powerful historical landmarks.&quot;,
        image: &quot;https://images.unsplash.com/photo-1560969184-10fe8719e047&quot;,
        highlights: [&quot;Brandenburg Gate&quot;, &quot;East Side Gallery&quot;, &quot;Museum Island&quot;],
        bestTime: &quot;May to September&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;Munich&quot;,
        description: &quot;Bavaria&apos;s capital, known for its traditional festivals, beer halls, and stunning architecture, perfectly blending old and new.&quot;,
        image: &quot;https://images.unsplash.com/photo-1595867818082-083862f3d630&quot;,
        highlights: [&quot;Marienplatz&quot;, &quot;Oktoberfest&quot;, &quot;English Garden&quot;],
        bestTime: &quot;April to October&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Black Forest&quot;,
        description: &quot;Mystical woodland region famous for its scenic beauty, traditional villages, and cuckoo clocks.&quot;,
        image: &quot;https://images.unsplash.com/photo-1605649487212-47bdab064df7&quot;,
        highlights: [&quot;Triberg Waterfalls&quot;, &quot;Baden-Baden&quot;, &quot;Hiking Trails&quot;],
        bestTime: &quot;June to October&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Hamburg&quot;,
        description: &quot;Maritime city with stunning architecture, vibrant cultural scene, and Europe&apos;s second-largest port.&quot;,
        image: &quot;https://images.unsplash.com/photo-1581513700095-7272f3e5f1b6&quot;,
        highlights: [&quot;Speicherstadt&quot;, &quot;Elbphilharmonie&quot;, &quot;Harbor Tour&quot;],
        bestTime: &quot;May to September&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Heidelberg&quot;,
        description: &quot;Romantic university town with medieval charm, riverside setting, and iconic castle ruins.&quot;,
        image: &quot;https://images.unsplash.com/photo-1592906209472-a36b1f3782ef&quot;,
        highlights: [&quot;Heidelberg Castle&quot;, &quot;Old Bridge&quot;, &quot;Philosophers&apos; Way&quot;],
        bestTime: &quot;April to October&quot;,
        duration: &quot;2-3 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover German gastronomy through traditional food, beer tastings, and regional specialties.&quot;,
        activities: [
          &quot;Beer brewing workshop in Munich&quot;,
          &quot;Black Forest cake making&quot;,
          &quot;Wine tasting in Rhine Valley&quot;,
          &quot;Street food tours in Berlin&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Germany&apos;s rich cultural heritage through history, art, and local traditions.&quot;,
        activities: [
          &quot;Classical music concerts&quot;,
          &quot;Christmas markets in winter&quot;,
          &quot;Castle tours in Bavaria&quot;,
          &quot;Historical walking tours&quot;
        ]
      }
    ]
  },
  japan: {
    title: &apos;Japan Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Japan\'s fascinating destinations from Tokyo to Kyoto. Discover ancient temples, modern cities, cuisine, and culture with our comprehensive Japan travel guide.&apos;,
    keywords: &apos;Japan travel guide, Tokyo, Kyoto, Mount Fuji, Japanese food, Japan attractions, Japan itinerary, Japan travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e&apos;,
    heroAlt: &apos;Beautiful view of Mount Fuji with cherry blossoms in Japan&apos;,
    destinations: [
      {
        name: &quot;Tokyo&quot;,
        description: &quot;Japan&apos;s dynamic capital, where tradition meets ultra-modernity. Experience cutting-edge technology, ancient temples, and vibrant pop culture.&quot;,
        image: &quot;https://images.unsplash.com/photo-1540959733332-eab4deabeeaf&quot;,
        highlights: [&quot;Shibuya Crossing&quot;, &quot;Senso-ji Temple&quot;, &quot;Tokyo Skytree&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;Kyoto&quot;,
        description: &quot;The cultural heart of Japan, featuring over 1,600 temples, traditional gardens, and preserved historic districts.&quot;,
        image: &quot;https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f&quot;,
        highlights: [&quot;Fushimi Inari Shrine&quot;, &quot;Kinkaku-ji&quot;, &quot;Arashiyama Bamboo Grove&quot;],
        bestTime: &quot;March to May, October to November&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Osaka&quot;,
        description: &quot;Japan&apos;s kitchen and entertainment capital, known for its amazing food scene, friendly locals, and vibrant nightlife.&quot;,
        image: &quot;https://images.unsplash.com/photo-1590559899731-a382839e5549&quot;,
        highlights: [&quot;Dotonbori&quot;, &quot;Osaka Castle&quot;, &quot;Kuromon Market&quot;],
        bestTime: &quot;March to May, October to November&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Hakone&quot;,
        description: &quot;Scenic hot spring resort town offering stunning views of Mount Fuji and peaceful natural settings.&quot;,
        image: &quot;https://images.unsplash.com/photo-1492571350019-22de08371fd3&quot;,
        highlights: [&quot;Mount Fuji Views&quot;, &quot;Onsen Baths&quot;, &quot;Hakone Shrine&quot;],
        bestTime: &quot;July to August, October to November&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Hiroshima&quot;,
        description: &quot;A city of peace and resilience, offering powerful historical sites and beautiful island scenery.&quot;,
        image: &quot;https://images.unsplash.com/photo-1542051841857-5f90071e7989&quot;,
        highlights: [&quot;Peace Memorial&quot;, &quot;Miyajima Island&quot;, &quot;Atomic Dome&quot;],
        bestTime: &quot;March to May, October to November&quot;,
        duration: &quot;2-3 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Japanese gastronomy through cooking classes, market tours, and regional specialties.&quot;,
        activities: [
          &quot;Sushi making workshop&quot;,
          &quot;Ramen cooking class&quot;,
          &quot;Sake tasting experience&quot;,
          &quot;Street food tours&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Japan&apos;s rich cultural heritage through traditional arts and customs.&quot;,
        activities: [
          &quot;Tea ceremony participation&quot;,
          &quot;Kimono wearing experience&quot;,
          &quot;Zen meditation session&quot;,
          &quot;Traditional craft workshops&quot;
        ]
      }
    ]
  },
  china: {
    title: &apos;China Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore China\'s incredible destinations from the Great Wall to ancient cities. Discover iconic landmarks, rich history, cuisine, and culture with our comprehensive China travel guide.&apos;,
    keywords: &apos;China travel guide, Beijing, Shanghai, Great Wall, Chinese food, China attractions, China itinerary, China travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1508804185872-d7badad00f7d&apos;,
    heroAlt: &apos;The Great Wall of China stretching across mountains at sunset&apos;,
    destinations: [
      {
        name: &quot;Beijing&quot;,
        description: &quot;China&apos;s historic capital, home to imperial palaces, ancient temples, and the iconic Great Wall. A perfect blend of ancient and modern China.&quot;,
        image: &quot;https://images.unsplash.com/photo-1584464491033-06628f3a6b7b&quot;,
        highlights: [&quot;Great Wall&quot;, &quot;Forbidden City&quot;, &quot;Temple of Heaven&quot;],
        bestTime: &quot;March to May, September to October&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;Shanghai&quot;,
        description: &quot;China&apos;s largest city and financial hub, featuring futuristic skylines, historic districts, and vibrant culture.&quot;,
        image: &quot;https://images.unsplash.com/photo-1545893835-abaa50cbe628&quot;,
        highlights: [&quot;The Bund&quot;, &quot;Yu Garden&quot;, &quot;Pudong Skyline&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Xi&apos;an&quot;,
        description: &quot;Ancient capital featuring the Terracotta Army and one of the best-preserved ancient city walls in China.&quot;,
        image: &quot;https://images.unsplash.com/photo-1591499370596-5d3d1f337cc9&quot;,
        highlights: [&quot;Terracotta Warriors&quot;, &quot;City Wall&quot;, &quot;Muslim Quarter&quot;],
        bestTime: &quot;March to May, September to October&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Guilin&quot;,
        description: &quot;Stunning landscape of limestone karst mountains and peaceful rivers, offering some of China&apos;s most beautiful scenery.&quot;,
        image: &quot;https://images.unsplash.com/photo-1537687264563-47a1116b6970&quot;,
        highlights: [&quot;Li River Cruise&quot;, &quot;Rice Terraces&quot;, &quot;Reed Flute Cave&quot;],
        bestTime: &quot;April to October&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Chengdu&quot;,
        description: &quot;Capital of Sichuan Province, famous for spicy cuisine, giant pandas, and traditional culture.&quot;,
        image: &quot;https://images.unsplash.com/photo-1545506475-5a8e68a23825&quot;,
        highlights: [&quot;Giant Panda Base&quot;, &quot;Leshan Giant Buddha&quot;, &quot;Jinli Street&quot;],
        bestTime: &quot;March to June, September to November&quot;,
        duration: &quot;2-3 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Chinese gastronomy through cooking classes, market tours, and regional specialties.&quot;,
        activities: [
          &quot;Dumpling making workshop&quot;,
          &quot;Street food tours&quot;,
          &quot;Tea ceremonies&quot;,
          &quot;Sichuan cooking class&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in China&apos;s rich cultural heritage through traditional arts and customs.&quot;,
        activities: [
          &quot;Calligraphy lessons&quot;,
          &quot;Tai Chi in parks&quot;,
          &quot;Traditional medicine workshops&quot;,
          &quot;Temple visits and ceremonies&quot;
        ]
      }
    ]
  },
  thailand: {
    title: &apos;Thailand Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Thailand\'s tropical paradise from Bangkok to pristine islands. Discover temples, beaches, cuisine, and culture with our comprehensive Thailand travel guide.&apos;,
    keywords: &apos;Thailand travel guide, Bangkok, Phuket, Chiang Mai, Thai food, Thailand attractions, Thailand itinerary, Thailand travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1552465011-b4e21bf6e79a&apos;,
    heroAlt: &apos;Beautiful Thai temple with sunset background&apos;,
    destinations: [
      {
        name: &quot;Bangkok&quot;,
        description: &quot;Thailand&apos;s vibrant capital, where traditional temples meet modern skyscrapers, with amazing street food and nightlife.&quot;,
        image: &quot;https://images.unsplash.com/photo-1563492065599-3520f775eeed&quot;,
        highlights: [&quot;Grand Palace&quot;, &quot;Wat Phra Kaew&quot;, &quot;Chatuchak Market&quot;],
        bestTime: &quot;November to March&quot;,
        duration: &quot;3-4 days minimum&quot;
      },
      {
        name: &quot;Chiang Mai&quot;,
        description: &quot;Cultural capital of the north, known for temples, traditional crafts, and elephant sanctuaries.&quot;,
        image: &quot;https://images.unsplash.com/photo-1598971639058-fab3c3109a34&quot;,
        highlights: [&quot;Doi Suthep&quot;, &quot;Night Bazaar&quot;, &quot;Elephant Nature Park&quot;],
        bestTime: &quot;October to February&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Phuket&quot;,
        description: &quot;Thailand&apos;s largest island, offering beautiful beaches, luxury resorts, and vibrant nightlife.&quot;,
        image: &quot;https://images.unsplash.com/photo-1589394815804-964ed0be2eb5&quot;,
        highlights: [&quot;Phi Phi Islands&quot;, &quot;Old Town&quot;, &quot;Big Buddha&quot;],
        bestTime: &quot;November to April&quot;,
        duration: &quot;4-5 days&quot;
      },
      {
        name: &quot;Ayutthaya&quot;,
        description: &quot;Ancient capital with impressive temple ruins and historical parks, a UNESCO World Heritage site.&quot;,
        image: &quot;https://images.unsplash.com/photo-1528181304800-259b08848526&quot;,
        highlights: [&quot;Temple Ruins&quot;, &quot;Buddha Head in Tree&quot;, &quot;River Cruise&quot;],
        bestTime: &quot;November to February&quot;,
        duration: &quot;1-2 days&quot;
      },
      {
        name: &quot;Krabi&quot;,
        description: &quot;Stunning coastal province with limestone cliffs, clear waters, and beautiful beaches.&quot;,
        image: &quot;https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b&quot;,
        highlights: [&quot;Railay Beach&quot;, &quot;Tiger Cave Temple&quot;, &quot;Island Hopping&quot;],
        bestTime: &quot;November to March&quot;,
        duration: &quot;3-4 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Thai gastronomy through cooking classes, market tours, and street food exploration.&quot;,
        activities: [
          &quot;Thai cooking classes&quot;,
          &quot;Street food tours&quot;,
          &quot;Fruit carving workshop&quot;,
          &quot;Market exploration&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Thailand&apos;s rich cultural heritage through traditional arts and customs.&quot;,
        activities: [
          &quot;Temple meditation&quot;,
          &quot;Thai massage course&quot;,
          &quot;Traditional dance shows&quot;,
          &quot;Muay Thai training&quot;
        ]
      }
    ]
  },
  vietnam: {
    title: &apos;Vietnam Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Vietnam\'s diverse landscapes from Hanoi to Ho Chi Minh City. Discover ancient towns, beautiful bays, cuisine, and culture with our comprehensive Vietnam travel guide.&apos;,
    keywords: &apos;Vietnam travel guide, Hanoi, Ha Long Bay, Hoi An, Vietnamese food, Vietnam attractions, Vietnam itinerary, Vietnam travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1528127269322-539801943592&apos;,
    heroAlt: &apos;Beautiful landscape of Ha Long Bay with traditional boats&apos;,
    destinations: [
      {
        name: &quot;Hanoi&quot;,
        description: &quot;Vietnam&apos;s charming capital, featuring colonial architecture, ancient temples, and vibrant street life.&quot;,
        image: &quot;https://images.unsplash.com/photo-1509030450996-dd1a26367f37&quot;,
        highlights: [&quot;Old Quarter&quot;, &quot;Hoan Kiem Lake&quot;, &quot;Temple of Literature&quot;],
        bestTime: &quot;October to December&quot;,
        duration: &quot;3-4 days minimum&quot;
      },
      {
        name: &quot;Ha Long Bay&quot;,
        description: &quot;UNESCO World Heritage site with thousands of limestone islands rising from emerald waters.&quot;,
        image: &quot;https://images.unsplash.com/photo-1573270695497-da9c3360dc18&quot;,
        highlights: [&quot;Island Cruises&quot;, &quot;Cave Exploration&quot;, &quot;Kayaking&quot;],
        bestTime: &quot;October to December&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Hoi An&quot;,
        description: &quot;Ancient trading port known for its well-preserved architecture, tailors, and lantern-lit streets.&quot;,
        image: &quot;https://images.unsplash.com/photo-1540870373726-97f5a8194c5a&quot;,
        highlights: [&quot;Ancient Town&quot;, &quot;Japanese Bridge&quot;, &quot;Lantern Market&quot;],
        bestTime: &quot;February to July&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Ho Chi Minh City&quot;,
        description: &quot;Dynamic southern hub with French colonial landmarks, war history, and modern development.&quot;,
        image: &quot;https://images.unsplash.com/photo-1583417319070-4a69db38a482&quot;,
        highlights: [&quot;Cu Chi Tunnels&quot;, &quot;War Remnants Museum&quot;, &quot;Ben Thanh Market&quot;],
        bestTime: &quot;December to April&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Sapa&quot;,
        description: &quot;Mountain town famous for rice terraces, ethnic minorities, and trekking opportunities.&quot;,
        image: &quot;https://images.unsplash.com/photo-1528891677728-8ec148196e62&quot;,
        highlights: [&quot;Rice Terraces&quot;, &quot;Fansipan Mountain&quot;, &quot;Local Markets&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;2-3 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Vietnamese gastronomy through cooking classes, market tours, and street food exploration.&quot;,
        activities: [
          &quot;Pho cooking class&quot;,
          &quot;Street food tours&quot;,
          &quot;Coffee culture experience&quot;,
          &quot;Market visits&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Vietnam&apos;s rich cultural heritage through traditional arts and customs.&quot;,
        activities: [
          &quot;Water puppet shows&quot;,
          &quot;Traditional craft villages&quot;,
          &quot;Countryside bike tours&quot;,
          &quot;Local homestays&quot;
        ]
      }
    ]
  },
  korea: {
    title: &apos;South Korea Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore South Korea\'s dynamic cities and serene temples. Discover K-culture, ancient traditions, cuisine, and modern innovations with our comprehensive Korea travel guide.&apos;,
    keywords: &apos;Korea travel guide, Seoul, Busan, Jeju Island, Korean food, Korea attractions, Korea itinerary, Korea travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1538669715315-155098f0fb1d&apos;,
    heroAlt: &apos;Beautiful view of Seoul skyline with Namsan Tower&apos;,
    destinations: [
      {
        name: &quot;Seoul&quot;,
        description: &quot;South Korea&apos;s dynamic capital, where ancient palaces meet K-pop culture and technological innovation.&quot;,
        image: &quot;https://images.unsplash.com/photo-1538669715315-155098f0fb1d&quot;,
        highlights: [&quot;Gyeongbokgung Palace&quot;, &quot;Namsan Tower&quot;, &quot;Hongdae&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;Busan&quot;,
        description: &quot;Vibrant port city known for beaches, seafood, temples, and colorful cultural villages.&quot;,
        image: &quot;https://images.unsplash.com/photo-1578632618324-1e5e85df4d8c&quot;,
        highlights: [&quot;Haeundae Beach&quot;, &quot;Gamcheon Culture Village&quot;, &quot;Haedong Yonggungsa Temple&quot;],
        bestTime: &quot;April to June, September to November&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Jeju Island&quot;,
        description: &quot;Volcanic island paradise with beautiful beaches, waterfalls, and unique local culture.&quot;,
        image: &quot;https://images.unsplash.com/photo-1548115184-bc6544d06a58&quot;,
        highlights: [&quot;Hallasan Mountain&quot;, &quot;Seongsan Ilchulbong&quot;, &quot;Manjanggul Cave&quot;],
        bestTime: &quot;April to June, September to October&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Gyeongju&quot;,
        description: &quot;Ancient capital of the Silla Kingdom, filled with historic sites and cultural treasures.&quot;,
        image: &quot;https://images.unsplash.com/photo-1625995386160-e224de438509&quot;,
        highlights: [&quot;Bulguksa Temple&quot;, &quot;Seokguram Grotto&quot;, &quot;Tumuli Park&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Jeonju&quot;,
        description: &quot;Traditional Korean culture hub, famous for hanok village and bibimbap cuisine.&quot;,
        image: &quot;https://images.unsplash.com/photo-1625995386160-e224de438509&quot;,
        highlights: [&quot;Hanok Village&quot;, &quot;Korean Food Culture&quot;, &quot;Traditional Crafts&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;1-2 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Korean gastronomy through cooking classes, market tours, and street food exploration.&quot;,
        activities: [
          &quot;Kimchi making class&quot;,
          &quot;Street food tours&quot;,
          &quot;Traditional tea ceremony&quot;,
          &quot;Korean BBQ experience&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Korea&apos;s rich cultural heritage through traditional arts and modern K-culture.&quot;,
        activities: [
          &quot;Hanbok wearing&quot;,
          &quot;K-pop dance class&quot;,
          &quot;Temple stay program&quot;,
          &quot;Traditional craft workshops&quot;
        ]
      }
    ]
  },
  usa: {
    title: &apos;United States Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore America\'s most iconic destinations from New York to California. Discover national parks, vibrant cities, diverse cuisine, and culture with our comprehensive USA travel guide.&apos;,
    keywords: &apos;USA travel guide, New York, California, National Parks, American food, USA attractions, USA itinerary, USA travel tips, American cities, United States tourism&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1501594907352-04cda38ebc29&apos;,
    heroAlt: &apos;Stunning view of New York City skyline at sunset&apos;,
    destinations: [
      {
        name: &quot;New York City&quot;,
        description: &quot;The iconic metropolis offering world-class culture, dining, shopping, and entertainment. A city that truly never sleeps.&quot;,
        image: &quot;https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9&quot;,
        highlights: [&quot;Times Square&quot;, &quot;Central Park&quot;, &quot;Empire State Building&quot;],
        bestTime: &quot;April to June, September to November&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;San Francisco&quot;,
        description: &quot;A beautiful coastal city known for its iconic bridge, historic cable cars, diverse neighborhoods, and tech culture.&quot;,
        image: &quot;https://images.unsplash.com/photo-1501594907352-04cda38ebc29&quot;,
        highlights: [&quot;Golden Gate Bridge&quot;, &quot;Alcatraz&quot;, &quot;Fisherman&apos;s Wharf&quot;],
        bestTime: &quot;September to November&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Grand Canyon&quot;,
        description: &quot;One of the world&apos;s most spectacular natural wonders, offering breathtaking views and outdoor adventures.&quot;,
        image: &quot;https://images.unsplash.com/photo-1474044159687-1ee9f3a51722&quot;,
        highlights: [&quot;South Rim&quot;, &quot;Hiking Trails&quot;, &quot;Sunset Views&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Hawaii&quot;,
        description: &quot;Paradise islands offering stunning beaches, volcanic landscapes, rich culture, and perfect tropical weather.&quot;,
        image: &quot;https://images.unsplash.com/photo-1542259009477-d625272157b7&quot;,
        highlights: [&quot;Waikiki Beach&quot;, &quot;Volcanoes National Park&quot;, &quot;Road to Hana&quot;],
        bestTime: &quot;April to October&quot;,
        duration: &quot;7-10 days&quot;
      },
      {
        name: &quot;Las Vegas&quot;,
        description: &quot;The entertainment capital of the world, featuring world-class shows, casinos, dining, and desert adventures.&quot;,
        image: &quot;https://images.unsplash.com/photo-1581351721010-8cf859cb14a4&quot;,
        highlights: [&quot;The Strip&quot;, &quot;Fremont Street&quot;, &quot;Shows&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;3-4 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover American gastronomy through regional specialties, food tours, and iconic dining experiences.&quot;,
        activities: [
          &quot;New York pizza tours&quot;,
          &quot;Southern BBQ trails&quot;,
          &quot;California wine tasting&quot;,
          &quot;Food truck festivals&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in America&apos;s diverse cultural heritage through arts, history, and local traditions.&quot;,
        activities: [
          &quot;Broadway shows in NYC&quot;,
          &quot;Jazz clubs in New Orleans&quot;,
          &quot;Hollywood studio tours&quot;,
          &quot;Native American heritage sites&quot;
        ]
      }
    ]
  },
  brazil: {
    title: &apos;Brazil Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Brazil\'s vibrant destinations from Rio to the Amazon. Discover beaches, rainforests, cuisine, and culture with our comprehensive Brazil travel guide.&apos;,
    keywords: &apos;Brazil travel guide, Rio de Janeiro, Amazon, Brazilian food, Brazil attractions, Brazil itinerary, Brazil travel tips, Brazilian cities, Carnival, beaches&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1483729558449-99ef09a8c325&apos;,
    heroAlt: &apos;Stunning view of Rio de Janeiro with Christ the Redeemer statue&apos;,
    destinations: [
      {
        name: &quot;Rio de Janeiro&quot;,
        description: &quot;The Marvelous City, featuring iconic beaches, vibrant culture, and stunning landscapes. Home to world-famous Carnival celebrations.&quot;,
        image: &quot;https://images.unsplash.com/photo-1483729558449-99ef09a8c325&quot;,
        highlights: [&quot;Christ the Redeemer&quot;, &quot;Copacabana Beach&quot;, &quot;Sugarloaf Mountain&quot;],
        bestTime: &quot;December to March (Summer/Carnival)&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;Amazon Rainforest&quot;,
        description: &quot;The world&apos;s largest rainforest offering unique wildlife encounters, indigenous cultures, and unforgettable river cruises.&quot;,
        image: &quot;https://images.unsplash.com/photo-1516514213560-5d0977d3c8e0&quot;,
        highlights: [&quot;Manaus Opera House&quot;, &quot;River Tours&quot;, &quot;Wildlife Watching&quot;],
        bestTime: &quot;July to September (Dry Season)&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Salvador&quot;,
        description: &quot;Brazil&apos;s capital of happiness, known for its colorful colonial architecture, Afro-Brazilian culture, and vibrant music scene.&quot;,
        image: &quot;https://images.unsplash.com/photo-1564658504685-63774e1d159e&quot;,
        highlights: [&quot;Pelourinho Historic Center&quot;, &quot;African Heritage&quot;, &quot;Local Festivals&quot;],
        bestTime: &quot;March to June, September to November&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Iguazu Falls&quot;,
        description: &quot;One of the world&apos;s most spectacular waterfalls, straddling the border with Argentina, offering breathtaking views and adventures.&quot;,
        image: &quot;https://images.unsplash.com/photo-1552975084-6e027cd345c2&quot;,
        highlights: [&quot;Devil&apos;s Throat&quot;, &quot;Boat Tours&quot;, &quot;Helicopter Rides&quot;],
        bestTime: &quot;March to November&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Fernando de Noronha&quot;,
        description: &quot;Paradise archipelago featuring pristine beaches, crystal-clear waters, and incredible marine life.&quot;,
        image: &quot;https://images.unsplash.com/photo-1592906209472-a36b1f3782ef&quot;,
        highlights: [&quot;Baía do Sancho&quot;, &quot;Dolphin Watching&quot;, &quot;Snorkeling&quot;],
        bestTime: &quot;August to January&quot;,
        duration: &quot;3-4 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Brazilian gastronomy through regional specialties, cooking classes, and food tours.&quot;,
        activities: [
          &quot;Feijoada cooking class&quot;,
          &quot;Churrasco experience&quot;,
          &quot;Açaí tasting&quot;,
          &quot;Local market tours&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Brazil&apos;s vibrant cultural heritage through music, dance, and traditions.&quot;,
        activities: [
          &quot;Samba dance lessons&quot;,
          &quot;Carnival costume making&quot;,
          &quot;Capoeira workshops&quot;,
          &quot;Favela community tours&quot;
        ]
      }
    ]
  },
  canada: {
    title: &apos;Canada Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Canada\'s breathtaking destinations from Vancouver to Quebec. Discover national parks, vibrant cities, cuisine, and culture with our comprehensive Canada travel guide.&apos;,
    keywords: &apos;Canada travel guide, Vancouver, Toronto, Montreal, Canadian food, Canada attractions, Canada itinerary, Canada travel tips, Canadian cities, Canadian tourism&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1503614472-8c93d56e92ce&apos;,
    heroAlt: &apos;Stunning view of Moraine Lake in Banff National Park, Canadian Rockies&apos;,
    destinations: [
      {
        name: &quot;Vancouver&quot;,
        description: &quot;A stunning coastal city surrounded by mountains, offering perfect blend of urban life and outdoor adventures.&quot;,
        image: &quot;https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba&quot;,
        highlights: [&quot;Stanley Park&quot;, &quot;Granville Island&quot;, &quot;Grouse Mountain&quot;],
        bestTime: &quot;June to September&quot;,
        duration: &quot;3-4 days minimum&quot;
      },
      {
        name: &quot;Toronto&quot;,
        description: &quot;Canada&apos;s largest city, a multicultural metropolis featuring iconic landmarks, diverse neighborhoods, and vibrant culture.&quot;,
        image: &quot;https://images.unsplash.com/photo-1517090504586-fde19ea6066f&quot;,
        highlights: [&quot;CN Tower&quot;, &quot;Royal Ontario Museum&quot;, &quot;Distillery District&quot;],
        bestTime: &quot;May to October&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Banff National Park&quot;,
        description: &quot;A paradise for nature lovers with stunning mountain landscapes, glacial lakes, and abundant wildlife.&quot;,
        image: &quot;https://images.unsplash.com/photo-1561134643-668f9b71bb53&quot;,
        highlights: [&quot;Lake Louise&quot;, &quot;Moraine Lake&quot;, &quot;Banff Gondola&quot;],
        bestTime: &quot;June to August, December to March&quot;,
        duration: &quot;4-5 days&quot;
      },
      {
        name: &quot;Montreal&quot;,
        description: &quot;A charming blend of European flair and modern North American culture, known for its historic architecture and food scene.&quot;,
        image: &quot;https://images.unsplash.com/photo-1519178614-68673b201f36&quot;,
        highlights: [&quot;Old Montreal&quot;, &quot;Mount Royal&quot;, &quot;Notre-Dame Basilica&quot;],
        bestTime: &quot;June to September&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Quebec City&quot;,
        description: &quot;North America&apos;s oldest walled city, offering French culture, historic charm, and European atmosphere.&quot;,
        image: &quot;https://images.unsplash.com/photo-1558489580-fab3c3109a34&quot;,
        highlights: [&quot;Old Quebec&quot;, &quot;Château Frontenac&quot;, &quot;Plains of Abraham&quot;],
        bestTime: &quot;July to September, December to February&quot;,
        duration: &quot;2-3 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Canadian gastronomy through regional specialties, food tours, and local delicacies.&quot;,
        activities: [
          &quot;Poutine tasting in Quebec&quot;,
          &quot;Maple syrup experience&quot;,
          &quot;West Coast seafood tours&quot;,
          &quot;Multicultural food markets&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Canada&apos;s rich cultural heritage through arts, history, and local traditions.&quot;,
        activities: [
          &quot;Indigenous cultural tours&quot;,
          &quot;Winter festivals&quot;,
          &quot;Historic site visits&quot;,
          &quot;Hockey game experience&quot;
        ]
      }
    ]
  },
  mexico: {
    title: &apos;Mexico Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Mexico\'s vibrant destinations from ancient ruins to pristine beaches. Discover rich culture, cuisine, and traditions with our comprehensive Mexico travel guide.&apos;,
    keywords: &apos;Mexico travel guide, Mexico City, Cancun, Tulum, Mexican food, Mexico attractions, Mexico itinerary, Mexico travel tips, Mexican cities, Mexican tourism&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1512813195386-6cf811ad3542&apos;,
    heroAlt: &apos;Stunning view of Chichen Itza pyramid at sunset, Mexico&apos;,
    destinations: [
      {
        name: &quot;Mexico City&quot;,
        description: &quot;The bustling capital, blending colonial architecture with modern culture, world-class museums, and incredible street food.&quot;,
        image: &quot;https://images.unsplash.com/photo-1518659526054-190340b32735&quot;,
        highlights: [&quot;Zócalo&quot;, &quot;Frida Kahlo Museum&quot;, &quot;Teotihuacan&quot;],
        bestTime: &quot;March to May&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;Cancun & Riviera Maya&quot;,
        description: &quot;Paradise beaches, crystal-clear waters, and luxury resorts along the Caribbean coast.&quot;,
        image: &quot;https://images.unsplash.com/photo-1552074284-5e88ef1aef18&quot;,
        highlights: [&quot;Beaches&quot;, &quot;Cenotes&quot;, &quot;Mayan Ruins&quot;],
        bestTime: &quot;December to April&quot;,
        duration: &quot;5-7 days&quot;
      },
      {
        name: &quot;Oaxaca&quot;,
        description: &quot;Cultural heart of Mexico, famous for its cuisine, indigenous cultures, and colonial architecture.&quot;,
        image: &quot;https://images.unsplash.com/photo-1585975985662-449adf2e7f8f&quot;,
        highlights: [&quot;Monte Albán&quot;, &quot;Food Markets&quot;, &quot;Mezcal Tours&quot;],
        bestTime: &quot;October to March&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;San Miguel de Allende&quot;,
        description: &quot;Charming colonial city known for its arts scene, colorful architecture, and cultural festivals.&quot;,
        image: &quot;https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396&quot;,
        highlights: [&quot;Parroquia&quot;, &quot;Art Galleries&quot;, &quot;Colonial Streets&quot;],
        bestTime: &quot;November to April&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Tulum&quot;,
        description: &quot;Bohemian beach town featuring Mayan ruins, eco-resorts, and pristine beaches.&quot;,
        image: &quot;https://images.unsplash.com/photo-1504730655501-24c39ac53f0e&quot;,
        highlights: [&quot;Mayan Ruins&quot;, &quot;Beaches&quot;, &quot;Cenotes&quot;],
        bestTime: &quot;November to March&quot;,
        duration: &quot;3-4 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Mexican gastronomy through regional specialties, cooking classes, and street food tours.&quot;,
        activities: [
          &quot;Street food tours&quot;,
          &quot;Cooking classes&quot;,
          &quot;Mezcal tasting&quot;,
          &quot;Market exploration&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Mexico&apos;s rich cultural heritage through arts, history, and traditions.&quot;,
        activities: [
          &quot;Day of the Dead celebrations&quot;,
          &quot;Artisan workshops&quot;,
          &quot;Archaeological sites&quot;,
          &quot;Traditional dance shows&quot;
        ]
      }
    ]
  },
  argentina: {
    title: &apos;Argentina Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Argentina\'s diverse landscapes from Patagonia to Buenos Aires. Discover tango, wine, nature, and culture with our comprehensive Argentina travel guide.&apos;,
    keywords: &apos;Argentina travel guide, Buenos Aires, Patagonia, Mendoza, Argentine food, Argentina attractions, Argentina itinerary, Argentina travel tips&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1589909202802-8f4aadce1849&apos;,
    heroAlt: &apos;Stunning view of Mount Fitz Roy in Patagonia, Argentina&apos;,
    destinations: [
      {
        name: &quot;Buenos Aires&quot;,
        description: &quot;The passionate capital city, known for tango, stunning architecture, and vibrant cultural scene.&quot;,
        image: &quot;https://images.unsplash.com/photo-1612294037637-ec328d0e075e&quot;,
        highlights: [&quot;La Boca&quot;, &quot;Recoleta&quot;, &quot;San Telmo Market&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;Patagonia&quot;,
        description: &quot;Dramatic landscapes featuring glaciers, mountains, and pristine wilderness.&quot;,
        image: &quot;https://images.unsplash.com/photo-1460176449511-ff3dc12eecef&quot;,
        highlights: [&quot;Perito Moreno Glacier&quot;, &quot;Mount Fitz Roy&quot;, &quot;Torres del Paine&quot;],
        bestTime: &quot;December to March&quot;,
        duration: &quot;5-7 days&quot;
      },
      {
        name: &quot;Mendoza&quot;,
        description: &quot;World-renowned wine region with stunning Andean backdrop and excellent cuisine.&quot;,
        image: &quot;https://images.unsplash.com/photo-1515516969-d4008cc6241a&quot;,
        highlights: [&quot;Wine Tours&quot;, &quot;Aconcagua&quot;, &quot;Olive Farms&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Iguazu Falls&quot;,
        description: &quot;One of the world&apos;s most spectacular waterfalls, surrounded by tropical rainforest.&quot;,
        image: &quot;https://images.unsplash.com/photo-1564587433899-f89341cff472&quot;,
        highlights: [&quot;Devil&apos;s Throat&quot;, &quot;Boat Tours&quot;, &quot;Rainforest Walks&quot;],
        bestTime: &quot;March to April, August to October&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Bariloche&quot;,
        description: &quot;Alpine-style resort town offering lakes, mountains, and outdoor adventures.&quot;,
        image: &quot;https://images.unsplash.com/photo-1583254151664-5a637d0504dc&quot;,
        highlights: [&quot;Nahuel Huapi Lake&quot;, &quot;Cerro Catedral&quot;, &quot;Chocolate Shops&quot;],
        bestTime: &quot;December to March (Summer), July to September (Winter)&quot;,
        duration: &quot;3-4 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Argentine gastronomy through wine tours, asados, and regional specialties.&quot;,
        activities: [
          &quot;Wine tasting in Mendoza&quot;,
          &quot;Asado experience&quot;,
          &quot;Mate ceremony&quot;,
          &quot;Empanada making class&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Argentina&apos;s rich cultural heritage through tango, gaucho culture, and arts.&quot;,
        activities: [
          &quot;Tango shows and lessons&quot;,
          &quot;Gaucho day trips&quot;,
          &quot;Football matches&quot;,
          &quot;Art gallery tours&quot;
        ]
      }
    ]
  },
  turkey: {
    title: &apos;Turkey Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Turkey\'s fascinating destinations from Istanbul to Cappadocia. Discover ancient history, rich culture, cuisine, and traditions with our comprehensive Turkey travel guide.&apos;,
    keywords: &apos;Turkey travel guide, Istanbul, Cappadocia, Turkish food, Turkey attractions, Turkey itinerary, Turkey travel tips, Turkish cities, Turkish tourism&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1589561454226-796a8aa89b05&apos;,
    heroAlt: &apos;Stunning view of Istanbul skyline with Hagia Sophia and Blue Mosque&apos;,
    destinations: [
      {
        name: &quot;Istanbul&quot;,
        description: &quot;A magical city straddling two continents, where East meets West, featuring stunning mosques, bustling bazaars, and rich history.&quot;,
        image: &quot;https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b&quot;,
        highlights: [&quot;Hagia Sophia&quot;, &quot;Blue Mosque&quot;, &quot;Grand Bazaar&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;4-5 days minimum&quot;
      },
      {
        name: &quot;Cappadocia&quot;,
        description: &quot;Otherworldly landscape of fairy chimneys, cave churches, and underground cities, famous for hot air balloon rides.&quot;,
        image: &quot;https://images.unsplash.com/photo-1570643965467-92e5146c27f9&quot;,
        highlights: [&quot;Hot Air Balloons&quot;, &quot;Underground Cities&quot;, &quot;Cave Hotels&quot;],
        bestTime: &quot;April to June, September to November&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Antalya&quot;,
        description: &quot;Beautiful Mediterranean coastal city offering ancient ruins, stunning beaches, and luxury resorts.&quot;,
        image: &quot;https://images.unsplash.com/photo-1542051841857-5f90071e7989&quot;,
        highlights: [&quot;Old Town&quot;, &quot;Düden Waterfalls&quot;, &quot;Ancient Ruins&quot;],
        bestTime: &quot;April to October&quot;,
        duration: &quot;3-4 days&quot;
      },
      {
        name: &quot;Pamukkale&quot;,
        description: &quot;Natural wonder featuring white travertine terraces and ancient Roman ruins of Hierapolis.&quot;,
        image: &quot;https://images.unsplash.com/photo-1590114399591-8e2b4c56e116&quot;,
        highlights: [&quot;Travertine Terraces&quot;, &quot;Hierapolis&quot;, &quot;Cleopatra&apos;s Pool&quot;],
        bestTime: &quot;March to June, September to November&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Ephesus&quot;,
        description: &quot;One of the best-preserved ancient cities in the Mediterranean, showcasing remarkable Roman architecture.&quot;,
        image: &quot;https://images.unsplash.com/photo-1564593523884-6eadee7ee605&quot;,
        highlights: [&quot;Library of Celsus&quot;, &quot;Temple of Hadrian&quot;, &quot;Ancient Theater&quot;],
        bestTime: &quot;March to May, September to November&quot;,
        duration: &quot;1-2 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Turkish gastronomy through regional specialties, cooking classes, and food tours.&quot;,
        activities: [
          &quot;Turkish coffee experience&quot;,
          &quot;Street food tours&quot;,
          &quot;Cooking workshops&quot;,
          &quot;Spice bazaar exploration&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Turkey&apos;s rich cultural heritage through traditional arts and customs.&quot;,
        activities: [
          &quot;Turkish bath (hamam)&quot;,
          &quot;Whirling dervishes show&quot;,
          &quot;Carpet weaving demos&quot;,
          &quot;Traditional pottery making&quot;
        ]
      }
    ]
  },
  croatia: {
    title: &apos;Croatia Travel Guide: Best Places to Visit & Essential Tips | Global Food Prints&apos;,
    description: &apos;Explore Croatia\'s stunning destinations from Dubrovnik to Split. Discover ancient cities, beautiful islands, cuisine, and culture with our comprehensive Croatia travel guide.&apos;,
    keywords: &apos;Croatia travel guide, Dubrovnik, Split, Croatian food, Croatia attractions, Croatia itinerary, Croatia travel tips, Croatian cities, Croatian tourism&apos;,
    heroImage: &apos;https://images.unsplash.com/photo-1555990538-17392d5e576a&apos;,
    heroAlt: &apos;Beautiful view of Dubrovnik old town and Adriatic Sea&apos;,
    destinations: [
      {
        name: &quot;Dubrovnik&quot;,
        description: &quot;The &apos;Pearl of the Adriatic&apos;, featuring stunning medieval walls, limestone streets, and crystal-clear waters.&quot;,
        image: &quot;https://images.unsplash.com/photo-1542295474-5e78124e5d59&quot;,
        highlights: [&quot;City Walls&quot;, &quot;Old Town&quot;, &quot;Cable Car&quot;],
        bestTime: &quot;May to June, September to October&quot;,
        duration: &quot;3-4 days minimum&quot;
      },
      {
        name: &quot;Split&quot;,
        description: &quot;Ancient Roman city centered around Diocletian&apos;s Palace, offering vibrant culture and coastal charm.&quot;,
        image: &quot;https://images.unsplash.com/photo-1555990538-17392d5e576a&quot;,
        highlights: [&quot;Diocletian&apos;s Palace&quot;, &quot;Riva Promenade&quot;, &quot;Marjan Hill&quot;],
        bestTime: &quot;May to October&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Hvar&quot;,
        description: &quot;Glamorous island known for lavender fields, historic towns, and vibrant nightlife.&quot;,
        image: &quot;https://images.unsplash.com/photo-1542882247-b86e5a727f8c&quot;,
        highlights: [&quot;Hvar Town&quot;, &quot;Lavender Fields&quot;, &quot;Pakleni Islands&quot;],
        bestTime: &quot;June to September&quot;,
        duration: &quot;2-3 days&quot;
      },
      {
        name: &quot;Plitvice Lakes&quot;,
        description: &quot;Stunning national park featuring cascading lakes, waterfalls, and wooden walkways.&quot;,
        image: &quot;https://images.unsplash.com/photo-1501785888041-af3ef285b470&quot;,
        highlights: [&quot;16 Lakes&quot;, &quot;Waterfalls&quot;, &quot;Hiking Trails&quot;],
        bestTime: &quot;June to September&quot;,
        duration: &quot;1-2 days&quot;
      },
      {
        name: &quot;Rovinj&quot;,
        description: &quot;Charming coastal town in Istria, known for its colorful houses and artistic atmosphere.&quot;,
        image: &quot;https://images.unsplash.com/photo-1593420035426-5c4e53a11d46&quot;,
        highlights: [&quot;Old Town&quot;, &quot;St. Euphemia Church&quot;, &quot;Artists&apos; Street&quot;],
        bestTime: &quot;May to October&quot;,
        duration: &quot;2-3 days&quot;
      }
    ],
    experiences: [
      {
        name: &quot;Culinary Adventures&quot;,
        description: &quot;Discover Croatian gastronomy through regional specialties, wine tours, and food experiences.&quot;,
        activities: [
          &quot;Truffle hunting in Istria&quot;,
          &quot;Wine tasting tours&quot;,
          &quot;Seafood experiences&quot;,
          &quot;Olive oil tasting&quot;
        ]
      },
      {
        name: &quot;Cultural Experiences&quot;,
        description: &quot;Immerse yourself in Croatia&apos;s rich cultural heritage through history, arts, and traditions.&quot;,
        activities: [
          &quot;Game of Thrones tours&quot;,
          &quot;Traditional klapa music&quot;,
          &quot;Folk festivals&quot;,
          &quot;Island hopping&quot;
        ]
      }
    ]
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = await params.then(p => p.slug);
  const country = countryData[slug as keyof typeof countryData];
  
  if (!country) {
    return {
      title: &apos;Country Not Found&apos;,
      description: &apos;The requested country page could not be found.&apos;
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
  const slug = await params.then(p => p.slug);
  const country = countryData[slug as keyof typeof countryData];

  if (!country) {
    notFound();
  }

  return (
    <div className=&quot;min-h-screen bg-gray-900&quot;>
      {/* Hero Section */}
      <section className=&quot;relative h-[600px]&quot;>
        <Image
          src={country.heroImage}
          alt={country.heroAlt}
          fill
          className=&quot;object-cover&quot;
          priority
        />
        <div className=&quot;absolute inset-0 bg-black opacity-50&quot;></div>
        <div className=&quot;relative container mx-auto px-4 h-full flex items-center&quot;>
          <div className=&quot;max-w-3xl text-white&quot;>
            <h1 className=&quot;text-6xl font-bold mb-4 text-white drop-shadow-lg&quot;>
              {slug.charAt(0).toUpperCase() + slug.slice(1)} Travel Guide
            </h1>
            <p className=&quot;text-xl mb-6 text-white drop-shadow-md&quot;>
              Discover the magic of {slug.charAt(0).toUpperCase() + slug.slice(1)}: from iconic landmarks to picturesque countryside, and world-renowned cuisine.
            </p>
            <div className=&quot;flex gap-4&quot;>
              <Link 
                href=&quot;#destinations&quot;
                className=&quot;bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors&quot;
              >
                Top Destinations
              </Link>
              <Link 
                href=&quot;#experiences&quot;
                className=&quot;border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors&quot;
              >
                Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className=&quot;py-12 bg-gray-800&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl&quot;>🌍</span>
              </div>
              <h3 className=&quot;font-semibold mb-2 text-white&quot;>Best Time to Visit</h3>
              <p className=&quot;text-gray-300&quot;>April-October</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl&quot;>💶</span>
              </div>
              <h3 className=&quot;font-semibold mb-2 text-white&quot;>Currency</h3>
              <p className=&quot;text-gray-300&quot;>Euro (€)</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl&quot;>🗣️</span>
              </div>
              <h3 className=&quot;font-semibold mb-2 text-white&quot;>Language</h3>
              <p className=&quot;text-gray-300&quot;>
                {slug === &apos;france&apos; ? &apos;French&apos; : slug === &apos;italy&apos; ? &apos;Italian&apos; : slug === &apos;spain&apos; ? &apos;Spanish&apos; : slug === &apos;greece&apos; ? &apos;Greek&apos; : slug === &apos;germany&apos; ? &apos;German&apos; : slug === &apos;japan&apos; ? &apos;Japanese&apos; : slug === &apos;china&apos; ? &apos;Mandarin&apos; : slug === &apos;thailand&apos; ? &apos;Thai&apos; : slug === &apos;vietnam&apos; ? &apos;Vietnamese&apos; : slug === &apos;korea&apos; ? &apos;Korean&apos; : slug === &apos;usa&apos; ? &apos;English&apos; : &apos;Portuguese&apos;}
              </p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl&quot;>⏰</span>
              </div>
              <h3 className=&quot;font-semibold mb-2 text-white&quot;>Time Zone</h3>
              <p className=&quot;text-gray-300&quot;>CET (UTC+1)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section id=&quot;destinations&quot; className=&quot;py-16 bg-gray-900&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-4xl font-bold text-center mb-12 text-white drop-shadow-lg&quot;>
            Must-Visit Destinations
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {country.destinations.map((destination) => (
              <div key={destination.name} className=&quot;bg-white rounded-lg shadow-xl overflow-hidden&quot;>
                <div className=&quot;relative h-64&quot;>
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className=&quot;object-cover&quot;
                  />
                </div>
                <div className=&quot;p-6&quot;>
                  <h3 className=&quot;text-xl font-semibold mb-3 text-gray-900&quot;>{destination.name}</h3>
                  <p className=&quot;text-gray-600 mb-4&quot;>{destination.description}</p>
                  <div className=&quot;space-y-2 text-sm bg-gray-800 p-4 rounded-lg text-white&quot;>
                    <div className=&quot;flex items-center&quot;>
                      <span className=&quot;text-lg mr-2&quot;>✨</span>
                      <div>
                        <strong>Highlights:</strong>
                        <p className=&quot;text-gray-300&quot;>{destination.highlights.join(&quot;, &quot;)}</p>
                      </div>
                    </div>
                    <div className=&quot;flex items-center&quot;>
                      <span className=&quot;text-lg mr-2&quot;>🗓️</span>
                      <div>
                        <strong>Best Time:</strong>
                        <p className=&quot;text-gray-300&quot;>{destination.bestTime}</p>
                      </div>
                    </div>
                    <div className=&quot;flex items-center&quot;>
                      <span className=&quot;text-lg mr-2&quot;>⌛</span>
                      <div>
                        <strong>Suggested Duration:</strong>
                        <p className=&quot;text-gray-300&quot;>{destination.duration}</p>
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
      <section id=&quot;experiences&quot; className=&quot;py-16 bg-gray-800&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-4xl font-bold text-center mb-12 text-white drop-shadow-lg&quot;>
            Unique {slug.charAt(0).toUpperCase() + slug.slice(1)} Experiences
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {country.experiences.map((experience) => (
              <div key={experience.name} className=&quot;bg-white p-8 rounded-lg shadow-xl&quot;>
                <h3 className=&quot;text-xl font-semibold mb-3 text-gray-900&quot;>{experience.name}</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>{experience.description}</p>
                <div className=&quot;space-y-2&quot;>
                  <h4 className=&quot;font-medium text-gray-900&quot;>Recommended Activities:</h4>
                  <ul className=&quot;list-disc list-inside text-gray-600&quot;>
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
      <section className=&quot;py-16 bg-gray-900&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-4xl font-bold text-center mb-12 text-white drop-shadow-lg&quot;>
            Essential Travel Tips
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;bg-white p-6 rounded-lg shadow-xl&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3 text-gray-900&quot;>Transportation</h3>
              <ul className=&quot;space-y-2 text-gray-600&quot;>
                {slug === &apos;france&apos; ? (
                  <>
                    <li>• TGV trains connect major cities</li>
                    <li>• Metro systems in larger cities</li>
                    <li>• Car rental for countryside exploration</li>
                    <li>• Navigo pass for Paris transport</li>
                  </>
                ) : slug === &apos;italy&apos; ? (
                  <>
                    <li>• High-speed trains between cities</li>
                    <li>• Extensive bus networks</li>
                    <li>• Car rental for rural areas</li>
                    <li>• Water taxis in Venice</li>
                  </>
                ) : slug === &apos;spain&apos; ? (
                  <>
                    <li>• AVE high-speed trains</li>
                    <li>• Metro in major cities</li>
                    <li>• Car rental for regions</li>
                    <li>• Local bus networks</li>
                  </>
                ) : slug === &apos;greece&apos; ? (
                  <>
                    <li>• Ferry services between islands</li>
                    <li>• Metro in Athens</li>
                    <li>• KTEL intercity buses</li>
                    <li>• Domestic flights to islands</li>
                  </>
                ) : slug === &apos;germany&apos; ? (
                  <>
                    <li>• Deutsche Bahn rail network</li>
                    <li>• Efficient public transport</li>
                    <li>• Autobahn for driving</li>
                    <li>• Regional transport passes</li>
                  </>
                ) : slug === &apos;japan&apos; ? (
                  <>
                    <li>• JR Rail Pass for intercity travel</li>
                    <li>• Efficient metro systems</li>
                    <li>• Shinkansen bullet trains</li>
                    <li>• IC cards for local transport</li>
                  </>
                ) : slug === &apos;china&apos; ? (
                  <>
                    <li>• High-speed rail network</li>
                    <li>• Metro systems in major cities</li>
                    <li>• DiDi ride-hailing app</li>
                    <li>• Domestic flights for long distances</li>
                  </>
                ) : slug === &apos;thailand&apos; ? (
                  <>
                    <li>• BTS Skytrain in Bangkok</li>
                    <li>• Tuk-tuks for short trips</li>
                    <li>• Long-distance buses</li>
                    <li>• Island ferries</li>
                  </>
                ) : slug === &apos;vietnam&apos; ? (
                  <>
                    <li>• Motorbike taxis (Grab)</li>
                    <li>• Overnight trains</li>
                    <li>• Local buses</li>
                    <li>• Domestic flights</li>
                  </>
                ) : slug === &apos;korea&apos; ? (
                  <>
                    <li>• Efficient metro system</li>
                    <li>• KTX high-speed trains</li>
                    <li>• Local buses</li>
                    <li>• T-money card for transport</li>
                  </>
                ) : slug === &apos;usa&apos; ? (
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
            <div className=&quot;bg-white p-6 rounded-lg shadow-xl&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3 text-gray-900&quot;>Cultural Tips</h3>
              <ul className=&quot;space-y-2 text-gray-600&quot;>
                {slug === &apos;france&apos; ? (
                  <>
                    <li>• Greet with &quot;Bonjour&quot; when entering shops</li>
                    <li>• Lunch: 12-2 PM, Dinner: 7:30-10 PM</li>
                    <li>• Many shops closed on Sundays</li>
                    <li>• Learn basic French phrases</li>
                  </>
                ) : slug === &apos;italy&apos; ? (
                  <>
                    <li>• Greet with &quot;Ciao&quot; or &quot;Buongiorno&quot;</li>
                    <li>• Lunch: 1-3 PM, Dinner: 8-11 PM</li>
                    <li>• Afternoon siesta is common</li>
                    <li>• Learn basic Italian phrases</li>
                  </>
                ) : slug === &apos;spain&apos; ? (
                  <>
                    <li>• Greet with &quot;Hola&quot; or &quot;Buenos días&quot;</li>
                    <li>• Late dining culture (9-11 PM)</li>
                    <li>• Siesta time respected</li>
                    <li>• Learn basic Spanish phrases</li>
                  </>
                ) : slug === &apos;greece&apos; ? (
                  <>
                    <li>• Greet with &quot;Yassou&quot;</li>
                    <li>• Lunch: 2-4 PM, Dinner: 9-11 PM</li>
                    <li>• Afternoon rest common in summer</li>
                    <li>• Learn basic Greek phrases</li>
                  </>
                ) : slug === &apos;germany&apos; ? (
                  <>
                    <li>• Greet with &quot;Guten Tag&quot;</li>
                    <li>• Punctuality is important</li>
                    <li>• Most shops closed on Sundays</li>
                    <li>• Learn basic German phrases</li>
                  </>
                ) : slug === &apos;japan&apos; ? (
                  <>
                    <li>• Bow when greeting</li>
                    <li>• Remove shoes before entering homes</li>
                    <li>• Use two hands when giving/receiving</li>
                    <li>• Learn basic Japanese phrases</li>
                  </>
                ) : slug === &apos;china&apos; ? (
                  <>
                    <li>• Respect personal space</li>
                    <li>• Learn basic Mandarin phrases</li>
                    <li>• Use chopsticks properly</li>
                    <li>• Accept business cards with both hands</li>
                  </>
                ) : slug === &apos;thailand&apos; ? (
                  <>
                    <li>• Greet with a wai (bow)</li>
                    <li>• Dress modestly at temples</li>
                    <li>• Remove shoes indoors</li>
                    <li>• Don&apos;t touch people&apos;s heads</li>
                  </>
                ) : slug === &apos;vietnam&apos; ? (
                  <>
                    <li>• Use both hands when passing items</li>
                    <li>• Remove shoes before entering homes</li>
                    <li>• Respect elder people</li>
                    <li>• Learn basic Vietnamese phrases</li>
                  </>
                ) : slug === &apos;korea&apos; ? (
                  <>
                    <li>• Tipping is expected (15-20%)</li>
                    <li>• Casual dress is acceptable</li>
                    <li>• Greet with &quot;Hi&quot; or &quot;Hello&quot;</li>
                    <li>• Respect personal space</li>
                  </>
                ) : slug === &apos;usa&apos; ? (
                  <>
                    <li>• Greet with &quot;Olá&quot; (hello)</li>
                    <li>• Casual and beach attire common</li>
                    <li>• Personal space is closer</li>
                    <li>• Learn basic Portuguese phrases</li>
                  </>
                ) : (
                  <>
                    <li>• Greet with &quot;Olá&quot; (hello)</li>
                    <li>• Casual and beach attire common</li>
                    <li>• Personal space is closer</li>
                    <li>• Learn basic Portuguese phrases</li>
                  </>
                )}
              </ul>
            </div>
            <div className=&quot;bg-white p-6 rounded-lg shadow-xl&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3 text-gray-900&quot;>Money Saving</h3>
              <ul className=&quot;space-y-2 text-gray-600&quot;>
                {slug === &apos;france&apos; ? (
                  <>
                    <li>• Museum Pass for multiple entries</li>
                    <li>• Free first Sunday at museums</li>
                    <li>• Prix fixe lunch menus</li>
                    <li>• Book trains in advance</li>
                  </>
                ) : slug === &apos;italy&apos; ? (
                  <>
                    <li>• Roma Pass for attractions</li>
                    <li>• Free church visits</li>
                    <li>• Lunch at local trattorias</li>
                    <li>• Regional train passes</li>
                  </>
                ) : slug === &apos;spain&apos; ? (
                  <>
                    <li>• City tourist cards</li>
                    <li>• Menu del día for lunch</li>
                    <li>• Free museum hours</li>
                    <li>• Book AVE trains early</li>
                  </>
                ) : slug === &apos;greece&apos; ? (
                  <>
                    <li>• Museum pass in Athens</li>
                    <li>• Visit during shoulder season</li>
                    <li>• Ferry passes for island hopping</li>
                    <li>• Eat at local tavernas</li>
                  </>
                ) : slug === &apos;germany&apos; ? (
                  <>
                    <li>• City tourist cards</li>
                    <li>• Deutsche Bahn savings fares</li>
                    <li>• Free walking tours</li>
                    <li>• Student discounts</li>
                  </>
                ) : slug === &apos;japan&apos; ? (
                  <>
                    <li>• JR Pass for long-distance travel</li>
                    <li>• Eat at local ramen shops</li>
                    <li>• Stay in capsule hotels</li>
                    <li>• Visit temples for free</li>
                  </>
                ) : slug === &apos;china&apos; ? (
                  <>
                    <li>• Use WeChat Pay/Alipay</li>
                    <li>• Book trains in advance</li>
                    <li>• Eat at local restaurants</li>
                    <li>• Use metro for city travel</li>
                  </>
                ) : slug === &apos;thailand&apos; ? (
                  <>
                    <li>• Stay in guesthouses</li>
                    <li>• Eat at street food stalls</li>
                    <li>• Use local transport</li>
                    <li>• Visit temples for free</li>
                  </>
                ) : slug === &apos;vietnam&apos; ? (
                  <>
                    <li>• Stay in hostels/guesthouses</li>
                    <li>• Eat street food</li>
                    <li>• Use sleeper trains</li>
                    <li>• Bargain at markets</li>
                  </>
                ) : slug === &apos;korea&apos; ? (
                  <>
                    <li>• City tourist passes</li>
                    <li>• National Park annual pass</li>
                    <li>• Happy hour specials</li>
                    <li>• Book flights in advance</li>
                  </>
                ) : slug === &apos;usa&apos; ? (
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
      <section className=&quot;py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-2xl mx-auto text-center&quot;>
            <h2 className=&quot;text-4xl font-bold mb-4 text-white drop-shadow-lg&quot;>
              Get {slug.charAt(0).toUpperCase() + slug.slice(1)} Travel Updates
            </h2>
            <p className=&quot;text-xl mb-8 text-gray-300&quot;>
              Subscribe for insider tips, seasonal guides, and special offers.
            </p>
            <form className=&quot;flex flex-col md:flex-row gap-4&quot;>
              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email&quot;
                className=&quot;flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600&quot;
              />
              <button
                type=&quot;submit&quot;
                className=&quot;bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors&quot;
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