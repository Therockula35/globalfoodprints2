import { Metadata } from &apos;next&apos;;
import Image from &apos;next/image&apos;;
import Link from &apos;next/link&apos;;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: &apos;Barcelona Travel Guide: Essential Tips & Best Places to Visit | Global Food Prints&apos;,
    description: &apos;Discover the best of Barcelona with our comprehensive travel guide. Explore Gaudí\'s masterpieces, vibrant culture, Spanish cuisine, and Mediterranean charm. Plan your perfect Barcelona holiday.&apos;,
    keywords: &apos;Barcelona travel guide, Sagrada Familia, Park Güell, La Rambla, Spanish cuisine, Barcelona attractions, Barcelona itinerary, Barcelona travel tips&apos;,
    openGraph: {
      title: &apos;Barcelona Travel Guide: Essential Tips & Best Places to Visit&apos;,
      description: &apos;Plan your perfect Barcelona holiday with our comprehensive guide to Barcelona\'s best attractions, local cuisine, and hidden gems.&apos;,
      images: [&apos;/images/destinations/barcelona-og.jpg&apos;],
    },
  };
}

const attractions = [
  {
    name: &quot;Sagrada Familia&quot;,
    description: &quot;Antoni Gaudí&apos;s unfinished masterpiece, this stunning basilica combines Gothic and Art Nouveau forms in a unique, organic style. Still under construction after more than 140 years.&quot;,
    image: &quot;/images/attractions/barcelona/sagrada-familia.jpg&quot;,
    ticketInfo: &quot;€26-38 for basic adult admission, book online to avoid queues&quot;,
    bestTime: &quot;Early morning or late afternoon for best light&quot;,
    duration: &quot;2-3 hours&quot;
  },
  {
    name: &quot;Park Güell&quot;,
    description: &quot;A whimsical public park featuring Gaudí&apos;s iconic architectural elements, colorful mosaics, and stunning views of Barcelona and the Mediterranean.&quot;,
    image: &quot;/images/attractions/barcelona/park-guell.jpg&quot;,
    ticketInfo: &quot;€10 for Monumental Zone, free for general park access&quot;,
    bestTime: &quot;Early morning to avoid crowds and heat&quot;,
    duration: &quot;1.5-2 hours&quot;
  },
  {
    name: &quot;La Rambla & Gothic Quarter&quot;,
    description: &quot;Barcelona&apos;s most famous street and historic heart, featuring street performers, cafes, and historic architecture in the surrounding Gothic Quarter.&quot;,
    image: &quot;/images/attractions/barcelona/la-rambla.jpg&quot;,
    ticketInfo: &quot;Free to explore, guided tours available&quot;,
    bestTime: &quot;Evening for best atmosphere&quot;,
    duration: &quot;2-3 hours&quot;
  }
];

const neighborhoods = [
  {
    name: &quot;El Born&quot;,
    description: &quot;Trendy neighborhood with medieval streets, fashionable boutiques, tapas bars, and the iconic Santa Maria del Mar church.&quot;,
    highlights: [&quot;Santa Maria del Mar&quot;, &quot;Picasso Museum&quot;, &quot;Tapas bars&quot;]
  },
  {
    name: &quot;Gràcia&quot;,
    description: &quot;Bohemian district known for its village-like feel, independent shops, organic cafes, and vibrant plaza life.&quot;,
    highlights: [&quot;Plaza del Sol&quot;, &quot;Local festivals&quot;, &quot;Artisan shops&quot;]
  }
];

export default async function DestinationGuide() {
  return (
    <div className=&quot;min-h-screen bg-gray-900&quot;>
      {/* Hero Section */}
      <section className=&quot;relative h-[600px]&quot;>
        <Image
          src=&quot;/images/destinations/barcelona-hero.jpg&quot;
          alt=&quot;Barcelona cityscape with Sagrada Familia&quot;
          fill
          className=&quot;object-cover&quot;
          priority
        />
        <div className=&quot;absolute inset-0 bg-black opacity-50&quot;></div>
        <div className=&quot;relative container mx-auto px-4 h-full flex items-center&quot;>
          <div className=&quot;max-w-3xl text-white&quot;>
            <h1 className=&quot;text-6xl font-bold mb-4 text-white drop-shadow-lg&quot;>
              Barcelona Travel Guide
            </h1>
            <p className=&quot;text-xl mb-6 text-white drop-shadow-md&quot;>
              Discover the Catalan capital&apos;s stunning architecture, vibrant culture, delicious cuisine, and Mediterranean lifestyle.
            </p>
            <div className=&quot;flex gap-4&quot;>
              <Link 
                href=&quot;#attractions&quot;
                className=&quot;bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors&quot;
              >
                Top Attractions
              </Link>
              <Link 
                href=&quot;#planning&quot;
                className=&quot;border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors&quot;
              >
                Plan Your Trip
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
              <p className=&quot;text-gray-300&quot;>May-June or September-October</p>
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
              <h3 className=&quot;font-semibold mb-2 text-white&quot;>Languages</h3>
              <p className=&quot;text-gray-300&quot;>Catalan & Spanish</p>
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

      {/* Top Attractions */}
      <section id=&quot;attractions&quot; className=&quot;py-16 bg-gray-900&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-4xl font-bold text-center mb-12 text-white drop-shadow-lg&quot;>
            Must-Visit Attractions
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {attractions.map((attraction) => (
              <div key={attraction.name} className=&quot;bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300&quot;>
                <div className=&quot;relative h-64&quot;>
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className=&quot;object-cover&quot;
                  />
                </div>
                <div className=&quot;p-6&quot;>
                  <h3 className=&quot;text-xl font-semibold mb-3 text-gray-900&quot;>{attraction.name}</h3>
                  <p className=&quot;text-gray-600 mb-4&quot;>{attraction.description}</p>
                  <div className=&quot;space-y-2 text-sm text-white bg-gray-800 p-4 rounded-lg&quot;>
                    <p className=&quot;flex items-center&quot;><span className=&quot;text-lg mr-2&quot;>🎫</span> <strong className=&quot;text-white&quot;>Tickets:</strong> {attraction.ticketInfo}</p>
                    <p className=&quot;flex items-center&quot;><span className=&quot;text-lg mr-2&quot;>⏰</span> <strong className=&quot;text-white&quot;>Best Time:</strong> {attraction.bestTime}</p>
                    <p className=&quot;flex items-center&quot;><span className=&quot;text-lg mr-2&quot;>⌛</span> <strong className=&quot;text-white&quot;>Duration:</strong> {attraction.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className=&quot;py-16 bg-gray-800&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-4xl font-bold text-center mb-12 text-white drop-shadow-lg&quot;>
            Explore Barcelona&apos;s Neighborhoods
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood.name} className=&quot;bg-white p-8 rounded-lg shadow-xl&quot;>
                <h3 className=&quot;text-xl font-semibold mb-3 text-gray-900&quot;>{neighborhood.name}</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>{neighborhood.description}</p>
                <div className=&quot;space-y-2&quot;>
                  <h4 className=&quot;font-medium text-gray-900&quot;>Highlights:</h4>
                  <ul className=&quot;list-disc list-inside text-gray-600&quot;>
                    {neighborhood.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section id=&quot;planning&quot; className=&quot;py-16 bg-gray-900&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-4xl font-bold text-center mb-12 text-white drop-shadow-lg&quot;>
            Essential Travel Tips
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;bg-white p-6 rounded-lg shadow-xl&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3 text-gray-900&quot;>Getting Around</h3>
              <ul className=&quot;space-y-2 text-gray-600&quot;>
                <li>• Metro runs from 5:00 AM to midnight</li>
                <li>• T-Casual card for multiple journeys</li>
                <li>• Many attractions walkable in city center</li>
                <li>• Bike rentals popular for exploring</li>
              </ul>
            </div>
            <div className=&quot;bg-white p-6 rounded-lg shadow-xl&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3 text-gray-900&quot;>Where to Stay</h3>
              <ul className=&quot;space-y-2 text-gray-600&quot;>
                <li>• Gothic Quarter: Historic center</li>
                <li>• El Born: Trendy & central</li>
                <li>• Eixample: Modernist architecture</li>
                <li>• Gràcia: Local vibe & cafes</li>
              </ul>
            </div>
            <div className=&quot;bg-white p-6 rounded-lg shadow-xl&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3 text-gray-900&quot;>Local Customs</h3>
              <ul className=&quot;space-y-2 text-gray-600&quot;>
                <li>• Late lunch (2-4 PM) & dinner (9-11 PM)</li>
                <li>• Siesta time (some shops close 2-5 PM)</li>
                <li>• Tipping: 5-10% if service not included</li>
                <li>• Learn basic Catalan/Spanish phrases</li>
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
              Get Barcelona Travel Updates
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