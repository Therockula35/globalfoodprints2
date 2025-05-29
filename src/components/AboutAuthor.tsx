import Link from &apos;next/link&apos;;

export default function AboutAuthor() {
  return (
    <section className=&quot;py-16 bg-white&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 items-center&quot;>
          {/* Author Image */}
          <div className=&quot;flex justify-center md:justify-end&quot;>
            <div className=&quot;relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-pink-100&quot;>
              {/* Placeholder for author image - would be replaced with real image */}
              <div className=&quot;absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-white font-bold text-xl&quot;>
                Author Photo
              </div>
            </div>
          </div>
          
          {/* Author Info */}
          <div className=&quot;text-center md:text-left&quot;>
            <h3 className=&quot;text-2xl font-bold text-gray-800 mb-2&quot;>About the Author</h3>
            <h2 className=&quot;text-3xl font-bold text-pink-600 mb-4&quot;>Hello, I&apos;m Sarah!</h2>
            <p className=&quot;text-gray-600 mb-6&quot;>
              I&apos;m a passionate traveler who left my corporate job to explore the world. 
              I&apos;ve visited over 50 countries across 6 continents and love sharing my adventures, 
              travel tips, and photography to inspire others to see the beauty of our planet.
            </p>
            <p className=&quot;text-gray-600 mb-8&quot;>
              From hiking through remote mountains to exploring vibrant cities, 
              I&apos;m on a mission to document unique experiences and help you plan your dream trips.
            </p>
            <Link 
              href=&quot;/about&quot; 
              className=&quot;inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition-colors&quot;
            >
              Read My Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 