// src/components/Navbar.js
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [rotation, setRotation] = useState(0); // State to track the rotation

  useEffect(() => {
    // Handle screen size changes
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // Set initial screen size
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Handle date and time display based on screen size
    const updateTime = () => {
      const date = new Date();
      setCurrentDateTime(isSmallScreen ? date.toLocaleTimeString() : date.toLocaleString());
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [isSmallScreen]);

  useEffect(() => {
    // Handle scroll event to update rotation
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setRotation(scrollPosition / 2); // Adjust the rotation speed as needed
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-beige text-gray-700 p-4 roboto-mono-regular">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo on the left */}
        <div className="flex items-center justify-start w-1/3">
          <Image
            src="/images/triangle.svg" // Path to your SVG logo
            alt="Logo"
            width={40}
            height={40}
            style={{ transform: `rotate(${rotation}deg)` }} // Rotate based on scroll
          />
        </div>

        {/* Navigation buttons in the center */}
        <div className="flex justify-center space-x-8 w-1/3">
          <Link href="/projects" className="hover:text-yellow-300">Projects</Link>
          <Link href="/experiences" className="hover:text-yellow-300">Experiences</Link>

          {/* Personal Dropdown (hoverable with gap) */}
          <div className="relative group">
            <button className="hover:text-yellow-300 focus:outline-none pb-2">
              Personal
            </button>

            {/* Dropdown Menu with visual gap (still functional) */}
            <div className="hidden group-hover:block absolute left-0 w-40 bg-white shadow-lg rounded-lg mt-2 group-hover:mt-0 group-hover:pb-2">
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
        <div className="flex justify-end w-1/3 text-right whitespace-nowrap">
          <p className="text-sm">{currentDateTime}</p>
        </div>
      </nav>
    </header>
  );
}
