"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Thoughts() {
  const thoughts = [
    {
      id: 1,
      title: "Splork (Spoon - Long - Fork) - An evolution of the Spork",
      date: "October 15, 2024",
      image: "/images/triangle.svg",
      synopsis: "Exploring the potential impact of artificial intelligence on medical diagnosis, treatment planning, and patient care.",
      slug: "ai-in-healthcare"
    },
    {
      id: 2,
      title: "Water - Bound 2 Parody (Old)",
      date: "September 28, 2024",
      image: "/images/triangle.svg",
      synopsis: "Discussing innovative approaches to create eco-friendly cities that balance urban development with environmental conservation.",
      slug: "sustainable-urban-planning"
    },
    {
      id: 3,
      title: "Initial Blog",
      date: "September 28, 2024",
      image: "/images/triangle.svg",
      synopsis: "Discussing innovative approaches to create eco-friendly cities that balance urban development with environmental conservation.",
      slug: "sustainable-urban-planning"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-lightGreen">
      <Navbar />

      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Thoughts</h1>
        <p className="text-lg text-gray-600 mb-6">
          Here are some of my thoughts on various topics:
        </p>

        {/* Thought Rows */}
        <div className="space-y-6">
          {thoughts.map((thought) => (
            <ThoughtRow key={thought.id} thought={thought} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ThoughtRow({ thought }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle expansion
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-black">
      {/* Make the entire row (except icons) clickable */}
      <div
        className="flex items-center justify-between py-4 px-6 cursor-pointer"
        onClick={toggleExpand}
      >
        {/* Left side: Thought title and date */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-xl font-semibold text-gray-900 roboto-mono-bold">
            {thought.title}
          </h2>
          <span className="text-gray-600 roboto-mono-regular">{thought.date}</span>
        </div>

        {/* Right side: Image and Dropdown button */}
        <div className="flex items-center">
          {/* Thought Image */}
          {thought.image && (
            <Image
              src={thought.image}
              alt={thought.title}
              width={40}
              height={40}
              className="ml-4"
            />
          )}

          {/* Dropdown button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents click from propagating to the row
              toggleExpand();
            }}
            className={`focus:outline-none ml-4`}
          >
            <svg
              className={`w-6 h-6 transform transition-transform ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded description */}
      {isExpanded && (
        <div className="px-6 py-4 bg-lightGreen">
          <p className="text-gray-700 roboto-mono-regular">{thought.synopsis}</p>
          {/* Link to full thought */}
          <Link href={`/thoughts/${thought.slug}`} passHref>
            <a className="text-blue-600 underline mt-2 block">Read more</a>
          </Link>
        </div>
      )}
    </div>
  );
}