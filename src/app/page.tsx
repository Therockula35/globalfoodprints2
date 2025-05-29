import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredDestinations = [
    {
      name: "Paris",
      country: "France",
      description: "The City of Light, where romance meets history",
      image: "https://images.unsplash.com/photo-1431274172761-fca41d930114"
    },
    {
      name: "Tokyo",
      country: "Japan",
      description: "Where tradition meets ultra-modern technology",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"
    },
    {
      name: "Rio de Janeiro",
      country: "Brazil",
      description: "Vibrant culture and stunning natural beauty",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325"
    }
  ];

  const latestGuides = [
    {
      title: "Ultimate Japan Food Guide",
      description: "From sushi to ramen, discover Japan's culinary treasures",
      image: "https://images.unsplash.com/photo-1540648639573-8c848de23f0a"
    },
    {
      title: "European Train Adventures",
      description: "Navigate Europe's extensive rail network like a pro",
      image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd"
    },
    {
      title: "Hidden Gems of Southeast Asia",
      description: "Off-the-beaten-path destinations you can't miss",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Travel destinations collage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl font-bold mb-4">
              Explore the World's Flavors
            </h1>
            <p className="text-xl mb-8">
              Your guide to authentic culinary experiences and cultural discoveries around the globe.
            </p>
            <div className="flex gap-4">
              <Link
                href="/destinations"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Destinations
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="featured" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
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
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{destination.country}</p>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link
                    href={`/country/${destination.country.toLowerCase()}`}
                    className="text-purple-600 font-medium hover:text-purple-700"
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
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['European', 'Asian', 'American', 'Mediterranean'].map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg p-12 text-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Travel Guides */}
      <section id="guides" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
            Latest Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestGuides.map((guide) => (
              <div key={guide.title} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <Link
                    href="/guides"
                    className="text-purple-600 font-medium hover:text-purple-700"
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
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Join Our Travel Community
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Get exclusive travel tips, destination guides, and food recommendations delivered to your inbox.
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
