import Link from 'next/link';

export default function AboutAuthor() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Author Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-pink-100">
              {/* Placeholder for author image - would be replaced with real image */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
                Author Photo
              </div>
            </div>
          </div>
          
          {/* Author Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">About the Author</h3>
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Hello, I'm Sarah!</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate traveler who left my corporate job to explore the world. 
              I've visited over 50 countries across 6 continents and love sharing my adventures, 
              travel tips, and photography to inspire others to see the beauty of our planet.
            </p>
            <p className="text-gray-600 mb-8">
              From hiking through remote mountains to exploring vibrant cities, 
              I'm on a mission to document unique experiences and help you plan your dream trips.
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition-colors"
            >
              Read My Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 