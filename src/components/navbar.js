// src/components/Navbar.js
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setCurrentDateTime(date.toLocaleString());
    };
    updateTime(); // Set the initial time
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-beige text-gray-700 p-4 roboto-mono-regular">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Image
            src="/images/triangle.svg" // Path to your SVG logo
            alt="Logo"
            width={40} // Adjust the width as necessary
            height={40} // Adjust the height as necessary
          />
        </div>

        {/* Navigation buttons in the center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <Link href="/projects" className="hover:text-yellow-300">Projects</Link>
          <Link href="/experiences" className="hover:text-yellow-300">Experiences</Link>

          {/* Personal Dropdown (hoverable with gap) */}
          <div className="relative group">
            <button className="hover:text-yellow-300 focus:outline-none pb-2"> {/* Added padding to extend hoverable area */}
              Personal
            </button>

            {/* Dropdown Menu with visual gap (still functional) */}
            <div className="hidden group-hover:block absolute left-0 w-40 bg-white shadow-lg rounded-lg mt-2 group-hover:mt-0 group-hover:pb-2"> {/* Increased hover area */}
              <Link href="/thoughts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Thoughts
              </Link>
              <Link href="/listening" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                What Am I Listening To?
              </Link>
            </div>
          </div>
        </div>

        {/* Current Date and Time on the right */}
        <div className="text-right">
          <p className="text-sm">{currentDateTime}</p>
        </div>
      </nav>
    </header>
  );
}
