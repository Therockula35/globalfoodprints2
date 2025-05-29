export default function InstagramFeed() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Instagram</h2>
        <p className="text-gray-600 text-center mb-12">Follow our adventures on Instagram <a href="#" className="text-pink-600 font-semibold">@travelblog</a></p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a 
              key={post.id} 
              href="#" 
              className="group block relative aspect-square overflow-hidden"
            >
              {/* Placeholder for Instagram images */}
              <div className={`absolute inset-0 ${post.image}`}></div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity flex flex-col items-center justify-center p-4">
                <p className="text-white text-center text-sm truncate mb-2">{post.caption}</p>
                <div className="flex items-center space-x-4">
                  <span className="text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {post.likes}
                  </span>
                  <span className="text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-flex items-center font-medium text-pink-600 hover:text-pink-700"
          >
            View More on Instagram
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 