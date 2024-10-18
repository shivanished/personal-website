"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const hoverColor = '#f5945c'

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const lastScrollPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
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
          ? date.toLocaleTimeString()
          : `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
      );
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [isSmallScreen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = {
        x: window.scrollX,
        y: window.scrollY
      };

      const deltaX = currentScrollPosition.x - lastScrollPositionRef.current.x;
      const deltaY = currentScrollPosition.y - lastScrollPositionRef.current.y;

      // Use the larger of deltaX or deltaY to determine rotation
      const scrollDelta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;

      setRotation(prevRotation => (prevRotation + scrollDelta / 2) % 360);

      lastScrollPositionRef.current = currentScrollPosition;
    };

    const handleWheel = (e) => {
      // Prevent default only if it's a horizontal scroll section
      if (e.target.closest('.horizontal-scroll-section')) {
        e.preventDefault();
      }

      // Always update rotation based on vertical scroll
      setRotation(prevRotation => (prevRotation + e.deltaY / 2) % 360);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-lightGreen text-gray-700 p-4 roboto-mono-regular">
      <nav className="flex items-center justify-between max-w-full mx-auto">
        {/* Clickable Logo on the left */}
        <div className="flex items-center justify-start" style={{ width: '150px' }}>
          <Link href="/" passHref>
            <Image
              src="/images/triangle.svg"
              alt="Home"
              width={30}
              height={30}
              style={{ 
                transform: `rotate(${rotation}deg)`, 
                transformOrigin: '50% 67%',
                cursor: 'pointer',
                marginTop: '-5px',
              }}
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