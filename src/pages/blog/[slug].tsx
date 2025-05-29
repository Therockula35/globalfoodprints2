import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{`${slug} | Global Food Prints`}</title>
        <meta name="description" content="Explore the culinary wonders of {slug} with our in-depth guide." />
        <meta name="keywords" content="{slug}, culinary travel, food blog, travel tips" />
      </Head>
      <article className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{slug}</h1>
            <p className="text-gray-700 mb-6">
              Welcome to our detailed guide on {slug}. Discover the best culinary experiences, local delicacies, and travel tips to make the most of your visit.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4">
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700 mb-4">
              {slug} is a destination known for its rich culinary heritage and vibrant food scene. From street food to fine dining, there's something for every palate.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Must-Try Dishes</h2>
            <p className="text-gray-700 mb-4">
              Explore the must-try dishes in {slug}, including local favorites and hidden gems that will tantalize your taste buds.
            </p>
          </div>
          <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Travel Tips</h2>
            <p className="text-gray-700 mb-4">
              Get insider tips on how to navigate {slug}, including the best times to visit, transportation options, and cultural etiquette.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
            <p className="text-gray-700 mb-4">
              Summary and final thoughts on the topic.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Call to Action</h2>
            <p className="text-gray-700 mb-4">
              Encourage readers to engage or explore more related content.
            </p>
          </div>
        </div>
      </article>
    </>
  );
} 