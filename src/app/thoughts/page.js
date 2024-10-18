"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Thoughts() {
  const thoughts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare",
      date: "October 15, 2024",
      image: "/images/triangle.svg",
      synopsis: "Exploring the potential impact of artificial intelligence on medical diagnosis, treatment planning, and patient care.",
      slug: "ai-in-healthcare"
    },
    {
      id: 2,
      title: "Sustainable Urban Planning",
      date: "September 28, 2024",
      image: "/images/triangle.svg",
      synopsis: "Discussing innovative approaches to create eco-friendly cities that balance urban development with environmental conservation.",
      slug: "sustainable-urban-planning"
    },
    {
      id: 3,
      title: "The Rise of Decentralized Finance",
      date: "August 5, 2024",
      image: "/images/triangle.svg",
      synopsis: "Analyzing the growth of DeFi platforms and their potential to revolutionize traditional financial systems.",
      slug: "rise-of-defi"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-lightGreen">
      <Navbar />

      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Thoughts</h1>
        <p className="text-lg text-gray-600 mb-6">
          Here are some of my thoughts on various topics:
        </p>

        <div className="space-y-6">
          {thoughts.map((thought) => (
            <Link href={`/thoughts/${thought.slug}`} key={thought.id} className="block">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex">
                <div className="p-4 flex-grow"> {/* Reduced padding */}
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">{thought.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{thought.date}</p>
                  <p className="text-gray-700 text-sm">{thought.synopsis}</p>
                </div>
                <Image
                  src={thought.image}
                  alt={thought.title}
                  width={150} // Slightly reduced width
                  height={150} // Slightly reduced height
                  className="h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}