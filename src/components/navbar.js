"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const hoverColor = '#f5945c'

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [rotation, setRotation] = useState(0); // State to track the rotation

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setCurrentDateTime(
        isSmallScreen
          ? date.toLocaleTimeString() // Display time only on small screens
          : `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` // Date and time without the comma
      );
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [isSmallScreen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setRotation(scrollPosition / 2); // Adjust rotation speed if needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-lightGreen text-gray-700 p-4 roboto-mono-regular">
      <nav className="flex items-center justify-between max-w-full mx-auto">
        {/* Clickable Logo on the left */}
        <div className="flex items-center justify-start" style={{ width: '150px' }}>
          <Link href="/" passHref> {/* Link to the homepage */}
            <Image
              src="/images/triangle.svg" // Path to your SVG logo
              alt="Home"
              width={30}  // Reduced width
              height={30} // Reduced height
              style={{ 
                transform: `rotate(${rotation}deg)`, 
                transformOrigin: '50% 67%', // Adjust transform origin to triangle's center
                cursor: 'pointer',
                marginTop: '-5px', // Adjusted to raise the triangle
              }} // Rotate based on scroll
            />
          </Link>
        </div>

        {/* Navigation buttons in the center */}
        <div className="flex justify-center space-x-8 flex-grow">
          <Link href="/projects" className={`hover:text-[${hoverColor}]`}>Projects</Link>
          <Link href="/experiences" className={`hover:text-[${hoverColor}]`}>Experiences</Link>

          {/* Personal Dropdown */}
          <div className="relative group">
            <button className={`hover:text-[${hoverColor}] focus:outline-none pb-2`}>
              Personal
            </button>

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
        <div className="flex justify-end text-right" style={{ width: '150px', paddingRight: '16px' }}>
          <p className="text-sm">{currentDateTime}</p>
        </div>
      </nav>
    </header>
  );
}
