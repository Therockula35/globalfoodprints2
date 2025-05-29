import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Barcelona Travel Guide: Essential Tips & Best Places to Visit | Global Food Prints',
    description: 'Discover the best of Barcelona with our comprehensive travel guide. Explore Gaudí\'s masterpieces, vibrant culture, Spanish cuisine, and Mediterranean charm. Plan your perfect Barcelona holiday.',
    keywords: 'Barcelona travel guide, Sagrada Familia, Park Güell, La Rambla, Spanish cuisine, Barcelona attractions, Barcelona itinerary, Barcelona travel tips',
    openGraph: {
      title: 'Barcelona Travel Guide: Essential Tips & Best Places to Visit',
      description: 'Plan your perfect Barcelona holiday with our comprehensive guide to Barcelona\'s best attractions, local cuisine, and hidden gems.',
      images: ['/images/destinations/barcelona-og.jpg'],
    },
  };
}

const attractions = [
  {
    name: 'Sagrada Familia',
    description: 'Antoni Gaudí\'s unfinished masterpiece, this stunning basilica combines Gothic and Art Nouveau forms in a unique, organic style. Still under construction after more than 140 years.',
    image: '/images/attractions/barcelona/sagrada-familia.jpg',
    ticketInfo: '€26-38 for basic adult admission, book online to avoid queues',
    bestTime: 'Early morning or late afternoon for best light',
    duration: '2-3 hours'
  },
  {
    name: 'Park Güell',
    description: 'A whimsical public park featuring Gaudí\'s iconic architectural elements, colorful mosaics, and stunning views of Barcelona and the Mediterranean.',
    image: '/images/attractions/barcelona/park-guell.jpg',
    ticketInfo: '€10 for Monumental Zone, free for general park access',
    bestTime: 'Early morning to avoid crowds and heat',
    duration: '1.5-2 hours'
  },
  {
    name: 'La Rambla & Gothic Quarter',
    description: 'Barcelona\'s most famous street and historic heart, featuring street performers, cafes, and historic architecture in the surrounding Gothic Quarter.',
    image: '/images/attractions/barcelona/la-rambla.jpg',
    ticketInfo: 'Free to explore, guided tours available',
    bestTime: 'Evening for best atmosphere',
    duration: '2-3 hours'
  }
];

const neighborhoods = [
  {
    name: 'El Born',
    description: 'Trendy neighborhood with medieval streets, fashionable boutiques, tapas bars, and the iconic Santa Maria del Mar church.',
    highlights: ['Santa Maria del Mar', 'Picasso Museum', 'Tapas bars']
  },
  {
    name: 'Gràcia',
    description: 'Bohemian district known for its village-like feel, independent shops, organic cafes, and vibrant plaza life.',
    highlights: ['Plaza del Sol', 'Local festivals', 'Artisan shops']
  }
];

export default async function DestinationGuide() {
  return (
    <div className='min-h-screen bg-gray-900'>
      {/* Hero Section */}
      <section className='relative h-[600px]'>
        <Image
          src='/images/destinations/barcelona-hero.jpg'
          alt='Barcelona cityscape with Sagrada Familia'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative container mx-auto px-4 h-full flex items-center'>
          <div className='max-w-3xl text-white'>
            <h1 className='text-6xl font-bold mb-4 text-white drop-shadow-lg'>
              Barcelona Travel Guide
            </h1>
            <p className='text-xl mb-6 text-white drop-shadow-md'>
              Discover the Catalan capital\'s stunning architecture, vibrant culture, delicious cuisine, and Mediterranean lifestyle.
            </p>
            <div className='flex gap-4'>
              <Link 
                href='#attractions'
                className='bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors'
              >
                Top Attractions
              </Link>
              <Link 
                href='#planning'
                className='border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors'
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className='py-12 bg-gray-800'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🌍</span>
              </div>
              <h3 className='font-semibold mb-2 text-white'>Best Time to Visit</h3>
              <p className='text-gray-300'>May-June or September-October</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>💶</span>
              </div>
              <h3 className='font-semibold mb-2 text-white'>Currency</h3>
              <p className='text-gray-300'>Euro (€)</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🗣️</span>
              </div>
              <h3 className='font-semibold mb-2 text-white'>Languages</h3>
              <p className='text-gray-300'>Catalan & Spanish</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⏰</span>
              </div>
              <h3 className='font-semibold mb-2 text-white'>Time Zone</h3>
              <p className='text-gray-300'>CET (UTC+1)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section id='attractions' className='py-16 bg-gray-900'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12 text-white drop-shadow-lg'>
            Must-Visit Attractions
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {attractions.map((attraction) => (
              <div key={attraction.name} className='bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300'>
                <div className='relative h-64'>
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-3 text-gray-900'>{attraction.name}</h3>
                  <p className='text-gray-600 mb-4'>{attraction.description}</p>
                  <div className='space-y-2 text-sm text-white bg-gray-800 p-4 rounded-lg'>
                    <p className='flex items-center'><span className='text-lg mr-2'>🎫</span> <strong className='text-white'>Tickets:</strong> {attraction.ticketInfo}</p>
                    <p className='flex items-center'><span className='text-lg mr-2'>⏰</span> <strong className='text-white'>Best Time:</strong> {attraction.bestTime}</p>
                    <p className='flex items-center'><span className='text-lg mr-2'>⌛</span> <strong className='text-white'>Duration:</strong> {attraction.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className='py-16 bg-gray-800'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12 text-white drop-shadow-lg'>
            Explore Barcelona\'s Neighborhoods
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood.name} className='bg-white p-8 rounded-lg shadow-xl'>
                <h3 className='text-xl font-semibold mb-3 text-gray-900'>{neighborhood.name}</h3>
                <p className='text-gray-600 mb-4'>{neighborhood.description}</p>
                <div className='space-y-2'>
                  <h4 className='font-medium text-gray-900'>Highlights:</h4>
                  <ul className='list-disc list-inside text-gray-600'>
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
      <section id='planning' className='py-16 bg-gray-900'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12 text-white drop-shadow-lg'>
            Essential Travel Tips
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-xl'>
              <h3 className='text-xl font-semibold mb-3 text-gray-900'>Getting Around</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Metro runs from 5:00 AM to midnight</li>
                <li>• T-Casual card for multiple journeys</li>
                <li>• Many attractions walkable in city center</li>
                <li>• Bike rentals popular for exploring</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-xl'>
              <h3 className='text-xl font-semibold mb-3 text-gray-900'>Where to Stay</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Gothic Quarter: Historic center</li>
                <li>• El Born: Trendy & central</li>
                <li>• Eixample: Modernist architecture</li>
                <li>• Gràcia: Local vibe & cafes</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-xl'>
              <h3 className='text-xl font-semibold mb-3 text-gray-900'>Local Customs</h3>
              <ul className='space-y-2 text-gray-600'>
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
      <section className='py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-4 text-white drop-shadow-lg'>
              Get Barcelona Travel Updates
            </h2>
            <p className='text-xl mb-8 text-gray-300'>
              Subscribe for insider tips, seasonal guides, and special offers.
            </p>
            <form className='flex flex-col md:flex-row gap-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600'
              />
              <button
                type='submit'
                className='bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
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