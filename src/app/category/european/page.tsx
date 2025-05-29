import { Metadata } from &apos;next&apos;;
import Link from &apos;next/link&apos;;
import Image from &apos;next/image&apos;;

export const metadata: Metadata = {
  title: &apos;European Travel Guide | Global Food Prints&apos;,
  description: &apos;Explore the rich history, culture, and must-visit destinations across Europe. Discover hidden gems, travel tips, and local experiences.&apos;,
  keywords: &apos;Europe travel, European destinations, European history, European culture, Europe travel guide, European cities&apos;,
};

export default function EuropeanTravel() {
  const featuredDestinations = [
    {
      id: 1,
      title: &quot;The Heart of Rome&quot;,
      description: &quot;Discover the eternal city&apos;s ancient ruins, Renaissance art, and vibrant street life. From the Colosseum to Vatican City.&quot;,
      image: &quot;/images/destinations/rome.jpg&quot;,
      country: &quot;Italy&quot;,
      slug: &quot;rome-travel-guide&quot;
    },
    {
      id: 2,
      title: &quot;Paris: City of Light&quot;,
      description: &quot;Experience the magic of Paris through its iconic landmarks, charming neighborhoods, and world-class museums.&quot;,
      image: &quot;/images/destinations/paris.jpg&quot;,
      country: &quot;France&quot;,
      slug: &quot;paris-travel-guide&quot;
    },
    {
      id: 3,
      title: &quot;Barcelona&apos;s Gothic Quarter&quot;,
      description: &quot;Wander through medieval streets, admire Gaudí&apos;s architecture, and enjoy the Mediterranean atmosphere.&quot;,
      image: &quot;/images/destinations/barcelona.jpg&quot;,
      country: &quot;Spain&quot;,
      slug: &quot;barcelona-travel-guide&quot;
    }
  ];

  const historicalHighlights = [
    {
      title: &apos;Ancient Rome&apos;,
      period: &apos;753 BC - 476 AD&apos;,
      description: &apos;The birthplace of Western civilization, where emperors ruled and gladiators fought.&apos;,
      icon: &apos;🏛️&apos;
    },
    {
      title: &apos;Medieval Europe&apos;,
      period: &apos;5th - 15th century&apos;,
      description: &apos;An era of castles, cathedrals, and the birth of universities.&apos;,
      icon: &apos;⚔️&apos;
    },
    {
      title: &apos;Renaissance&apos;,
      period: &apos;14th - 17th century&apos;,
      description: &apos;A cultural rebirth that revolutionized art, science, and philosophy.&apos;,
      icon: &apos;🎨&apos;
    }
  ];

  const countries = [
    {
      name: &quot;Italy&quot;,
      description: &quot;Art, history, and Mediterranean charm&quot;,
      image: &quot;/images/countries/italy.jpg&quot;
    },
    {
      name: &quot;France&quot;,
      description: &quot;Romance, culture, and gastronomy&quot;,
      image: &quot;/images/countries/france.jpg&quot;
    },
    {
      name: &quot;Spain&quot;,
      description: &quot;Vibrant festivals and sunny coasts&quot;,
      image: &quot;/images/countries/spain.jpg&quot;
    },
    {
      name: &quot;Greece&quot;,
      description: &quot;Ancient ruins and island paradise&quot;,
      image: &quot;/images/countries/greece.jpg&quot;
    },
    {
      name: &quot;Germany&quot;,
      description: &quot;Fairytale castles and modern cities&quot;,
      image: &quot;/images/countries/germany.jpg&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative h-[500px]&quot;>
        <Image
          src=&quot;/images/hero/europe-hero.jpg&quot;
          alt=&quot;European destinations&quot;
          fill
          className=&quot;object-cover&quot;
          priority
        />
        <div className=&quot;absolute inset-0 bg-black opacity-40&quot;></div>
        <div className=&quot;relative container mx-auto px-4 h-full flex items-center&quot;>
          <div className=&quot;max-w-3xl&quot;>
            <h1 className=&quot;text-5xl font-bold text-white mb-6&quot;>
              Discover Europe
            </h1>
            <p className=&quot;text-xl text-white mb-8&quot;>
              Embark on a journey through centuries of history, breathtaking landscapes, and rich cultural heritage.
            </p>
            <Link 
              href=&quot;/travel-planning&quot;
              className=&quot;bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block&quot;
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className=&quot;py-16&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>
            Must-Visit Destinations
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className=&quot;bg-white rounded-lg shadow-md overflow-hidden group&quot;>
                <div className=&quot;relative h-64&quot;>
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className=&quot;object-cover group-hover:scale-105 transition-transform duration-300&quot;
                  />
                </div>
                <div className=&quot;p-6&quot;>
                  <span className=&quot;text-sm text-purple-600 font-medium&quot;>{destination.country}</span>
                  <h3 className=&quot;text-xl font-semibold mt-2 mb-2&quot;>
                    {destination.title}
                  </h3>
                  <p className=&quot;text-gray-600 mb-4&quot;>
                    {destination.description}
                  </p>
                  <Link 
                    href={`/destination/${destination.slug}`}
                    className=&quot;text-purple-600 font-medium hover:text-purple-700&quot;
                  >
                    Explore Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className=&quot;py-16 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>
            Journey Through Time
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {historicalHighlights.map((era) => (
              <div key={era.title} className=&quot;bg-white p-8 rounded-lg shadow-md&quot;>
                <div className=&quot;text-4xl mb-4&quot;>{era.icon}</div>
                <h3 className=&quot;text-xl font-semibold mb-2&quot;>{era.title}</h3>
                <p className=&quot;text-purple-600 text-sm mb-3&quot;>{era.period}</p>
                <p className=&quot;text-gray-600&quot;>{era.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Showcase */}
      <section className=&quot;py-16&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>
            Explore Countries
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-5 gap-6&quot;>
            {countries.map((country) => (
              <Link
                key={country.name}
                href={`/country/${country.name.toLowerCase()}`}
                className=&quot;group relative h-64 rounded-lg overflow-hidden&quot;
              >
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className=&quot;object-cover group-hover:scale-105 transition-transform duration-300&quot;
                />
                <div className=&quot;absolute inset-0 bg-gradient-to-t from-black/70 to-transparent&quot;></div>
                <div className=&quot;absolute bottom-0 left-0 right-0 p-4 text-white&quot;>
                  <h3 className=&quot;text-lg font-semibold mb-1&quot;>{country.name}</h3>
                  <p className=&quot;text-sm opacity-90&quot;>{country.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className=&quot;py-16 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg shadow-lg p-8&quot;>
            <h2 className=&quot;text-3xl font-bold text-center mb-8&quot;>
              Essential Travel Tips
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <span className=&quot;text-2xl&quot;>🚂</span>
                </div>
                <h3 className=&quot;text-xl font-semibold mb-2&quot;>Transportation</h3>
                <p className=&quot;text-gray-600&quot;>
                  Navigate Europe&apos;s extensive rail network and budget airlines for efficient travel.
                </p>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <span className=&quot;text-2xl&quot;>🏰</span>
                </div>
                <h3 className=&quot;text-xl font-semibold mb-2&quot;>Best Time to Visit</h3>
                <p className=&quot;text-gray-600&quot;>
                  Plan your trip during shoulder season (April-May or September-October) for ideal conditions.
                </p>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <span className=&quot;text-2xl&quot;>💳</span>
                </div>
                <h3 className=&quot;text-xl font-semibold mb-2&quot;>Money Saving</h3>
                <p className=&quot;text-gray-600&quot;>
                  Get city passes and book accommodations in advance for better deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className=&quot;py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-2xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl font-bold mb-4&quot;>
              Get Travel Updates
            </h2>
            <p className=&quot;text-xl mb-8&quot;>
              Subscribe to receive the latest travel guides, tips, and destination insights.
            </p>
            <form className=&quot;flex flex-col md:flex-row gap-4&quot;>
              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email&quot;
                className=&quot;flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white&quot;
              />
              <button
                type=&quot;submit&quot;
                className=&quot;bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors&quot;
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