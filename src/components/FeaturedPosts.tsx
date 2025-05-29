import Link from 'next/link';

// Sample data - in a real app this would come from a database or API
const featuredPosts = [
  {
    id: 1,
    title: "Where to Travel in 2025 Based on Your Zodiac",
    slug: "where-to-travel-2025-zodiac",
    excerpt: "Discover the perfect destination for your astrological sign and make your travel dreams come true in 2025.",
    image: "/images/featured/zodiac-travel.jpg"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Starting a Successful Travel Blog",
    slug: "ultimate-guide-starting-travel-blog",
    excerpt: "Learn how to create a thriving travel blog from scratch with these expert tips and strategies.",
    image: "/images/featured/start-travel-blog.jpg"
  },
  {
    id: 3,
    title: "Travel Bucket List for 2025",
    slug: "travel-bucket-list-2025",
    excerpt: "Explore the most breathtaking destinations you need to add to your travel bucket list this year.",
    image: "/images/featured/bucket-list-2025.jpg"
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-pink-600">Featured</span> from the Blog
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="group">
              <div className="overflow-hidden rounded-lg mb-4 relative h-64">
                {/* Placeholder image with gradient until real images are added */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {post.title}
                </div>
                {/* In a real app, you'd use the Image component with real images */}
                {/* <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center font-medium text-pink-600 hover:text-pink-700"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 