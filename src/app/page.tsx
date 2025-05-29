import Link from &apos;next/link&apos;;
import Image from &apos;next/image&apos;;

export default function Home() {
  const featuredDestinations = [
    {
      name: &quot;Paris&quot;,
      country: &quot;France&quot;,
      description: &quot;The City of Light, where romance meets history&quot;,
      image: &quot;https://images.unsplash.com/photo-1431274172761-fca41d930114&quot;
    },
    {
      name: &quot;Tokyo&quot;,
      country: &quot;Japan&quot;,
      description: &quot;Where tradition meets ultra-modern technology&quot;,
      image: &quot;https://images.unsplash.com/photo-1540959733332-eab4deabeeaf&quot;
    },
    {
      name: &quot;Rio de Janeiro&quot;,
      country: &quot;Brazil&quot;,
      description: &quot;Vibrant culture and stunning natural beauty&quot;,
      image: &quot;https://images.unsplash.com/photo-1483729558449-99ef09a8c325&quot;
    }
  ];

  const latestGuides = [
    {
      title: &quot;Ultimate Japan Food Guide&quot;,
      description: &quot;From sushi to ramen, discover Japan&apos;s culinary treasures&quot;,
      image: &quot;https://images.unsplash.com/photo-1540648639573-8c848de23f0a&quot;
    },
    {
      title: &quot;European Train Adventures&quot;,
      description: &quot;Navigate Europe&apos;s extensive rail network like a pro&quot;,
      image: &quot;https://images.unsplash.com/photo-1513581166391-887a96ddeafd&quot;
    },
    {
      title: &quot;Hidden Gems of Southeast Asia&quot;,
      description: &quot;Off-the-beaten-path destinations you can&apos;t miss&quot;,
      image: &quot;https://images.unsplash.com/photo-1528127269322-539801943592&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gray-900&quot;>
      {/* Hero Section */}
      <section className=&quot;relative h-[600px]&quot;>
        <Image
          src=&quot;https://images.unsplash.com/photo-1488085061387-422e29b40080&quot;
          alt=&quot;World travel collage&quot;
          fill
          className=&quot;object-cover&quot;
          priority
        />
        <div className=&quot;absolute inset-0 bg-black opacity-50&quot;></div>
        <div className=&quot;relative container mx-auto px-4 h-full flex items-center&quot;>
          <div className=&quot;max-w-3xl text-white&quot;>
            <h1 className=&quot;text-6xl font-bold mb-4 text-white drop-shadow-lg&quot;>
              Explore the World&apos;s Flavors
            </h1>
            <p className=&quot;text-xl mb-6 text-white drop-shadow-md&quot;>
              Discover amazing destinations, authentic local cuisines, and unforgettable cultural experiences
            </p>
            <div className=&quot;flex gap-4&quot;>
              <Link 
                href=&quot;#featured&quot;
                className=&quot;bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors&quot;
              >
                Start Exploring
              </Link>
              <Link 
                href=&quot;#guides&quot;
                className=&quot;border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors&quot;
              >
                Travel Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id=&quot;featured&quot; className=&quot;py-16 bg-gray-800&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-4xl font-bold text-center mb-12 text-white drop-shadow-lg&quot;>
            Featured Destinations
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {featuredDestinations.map((destination) => (
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
                  <h3 className=&quot;text-xl font-semibold mb-2&quot;>{destination.name}</h3>
                  <p className=&quot;text-gray-500 text-sm mb-3&quot;>{destination.country}</p>
                  <p className=&quot;text-gray-600 mb-4&quot;>{destination.description}</p>
                  <Link 
                    href={`/country/${destination.country.toLowerCase()}`}
                    className=&quot;text-purple-600 font-medium hover:text-purple-700&quot;
                  >
                    Explore More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Category */}
      <section className=&quot;py-16 bg-black&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-4xl font-bold text-center mb-12 text-white&quot;>
            Explore by Category
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8&quot;>
            {[&apos;European&apos;, &apos;Asian&apos;, &apos;American&apos;, &apos;Mediterranean&apos;].map((category) => (
              <Link 
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className=&quot;bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg p-12 text-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
              >
                <h3 className=&quot;text-2xl font-semibold&quot;>{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Travel Guides */}
      <section id=&quot;guides&quot; className=&quot;py-16 bg-gray-800&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-4xl font-bold text-center mb-12 text-white drop-shadow-lg&quot;>
            Latest Travel Guides
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {latestGuides.map((guide) => (
              <div key={guide.title} className=&quot;bg-white rounded-lg shadow-xl overflow-hidden&quot;>
                <div className=&quot;relative h-48&quot;>
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className=&quot;object-cover&quot;
                  />
                </div>
                <div className=&quot;p-6&quot;>
                  <h3 className=&quot;text-xl font-semibold mb-2&quot;>{guide.title}</h3>
                  <p className=&quot;text-gray-600 mb-4&quot;>{guide.description}</p>
                  <Link 
                    href=&quot;/guides&quot;
                    className=&quot;text-purple-600 font-medium hover:text-purple-700&quot;
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className=&quot;py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-2xl mx-auto text-center&quot;>
            <h2 className=&quot;text-4xl font-bold mb-4 text-white drop-shadow-lg&quot;>
              Join Our Travel Community
            </h2>
            <p className=&quot;text-xl mb-8 text-gray-300&quot;>
              Get exclusive travel tips, destination guides, and food recommendations delivered to your inbox.
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
