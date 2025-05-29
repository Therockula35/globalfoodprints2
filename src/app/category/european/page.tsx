import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'European Travel Guide | Global Food Prints',
  description: 'Explore the rich history, culture, and must-visit destinations across Europe. Discover hidden gems, travel tips, and local experiences.',
  keywords: 'Europe travel, European destinations, European history, European culture, Europe travel guide, European cities',
};

export default function EuropeanTravel() {
  const featuredDestinations = [
    {
      id: 1,
      title: "The Heart of Rome",
      description: "Discover the eternal city's ancient ruins, Renaissance art, and vibrant street life. From the Colosseum to Vatican City.",
      image: "/images/destinations/rome.jpg",
      country: "Italy",
      slug: "rome-travel-guide"
    },
    {
      id: 2,
      title: "Paris: City of Light",
      description: "Experience the magic of Paris through its iconic landmarks, charming neighborhoods, and world-class museums.",
      image: "/images/destinations/paris.jpg",
      country: "France",
      slug: "paris-travel-guide"
    },
    {
      id: 3,
      title: "Barcelona's Gothic Quarter",
      description: "Wander through medieval streets, admire Gaudí's architecture, and enjoy the Mediterranean atmosphere.",
      image: "/images/destinations/barcelona.jpg",
      country: "Spain",
      slug: "barcelona-travel-guide"
    }
  ];

  const historicalHighlights = [
    {
      title: 'Ancient Rome',
      period: '753 BC - 476 AD',
      description: 'The birthplace of Western civilization, where emperors ruled and gladiators fought.',
      icon: '🏛️'
    },
    {
      title: 'Medieval Europe',
      period: '5th - 15th century',
      description: 'An era of castles, cathedrals, and the birth of universities.',
      icon: '⚔️'
    },
    {
      title: 'Renaissance',
      period: '14th - 17th century',
      description: 'A cultural rebirth that revolutionized art, science, and philosophy.',
      icon: '🎨'
    }
  ];

  const countries = [
    {
      name: "Italy",
      description: "Art, history, and Mediterranean charm",
      image: "/images/countries/italy.jpg"
    },
    {
      name: "France",
      description: "Romance, culture, and gastronomy",
      image: "/images/countries/france.jpg"
    },
    {
      name: "Spain",
      description: "Vibrant festivals and sunny coasts",
      image: "/images/countries/spain.jpg"
    },
    {
      name: "Greece",
      description: "Ancient ruins and island paradise",
      image: "/images/countries/greece.jpg"
    },
    {
      name: "Germany",
      description: "Fairytale castles and modern cities",
      image: "/images/countries/germany.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="/images/hero/europe-hero.jpg"
          alt="European destinations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Discover Europe
            </h1>
            <p className="text-xl text-white mb-8">
              Embark on a journey through centuries of history, breathtaking landscapes, and rich cultural heritage.
            </p>
            <Link 
              href="/travel-planning"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Must-Visit Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-purple-600 font-medium">{destination.country}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <Link 
                    href={`/destination/${destination.slug}`}
                    className="text-purple-600 font-medium hover:text-purple-700"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Journey Through Time
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {historicalHighlights.map((era) => (
              <div key={era.title} className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{era.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{era.title}</h3>
                <p className="text-purple-600 text-sm mb-3">{era.period}</p>
                <p className="text-gray-600">{era.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Countries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {countries.map((country) => (
              <Link
                key={country.name}
                href={`/country/${country.name.toLowerCase()}`}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{country.name}</h3>
                  <p className="text-sm opacity-90">{country.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Essential Travel Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚂</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                <p className="text-gray-600">
                  Navigate Europe's extensive rail network and budget airlines for efficient travel.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-gray-600">
                  Plan your trip during shoulder season (April-May or September-October) for ideal conditions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Money Saving</h3>
                <p className="text-gray-600">
                  Get city passes and book accommodations in advance for better deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Travel Updates
            </h2>
            <p className="text-xl mb-8">
              Subscribe to receive the latest travel guides, tips, and destination insights.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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