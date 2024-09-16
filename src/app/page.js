"use client";  // Mark this component as a client component

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; 
import { useEffect, useState } from 'react'; // To handle date and time

export default function Home() {
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
    <div className="flex flex-col min-h-screen bg-beige">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-beige text-gray-700 p-4 roboto-mono-regular">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
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
          <div className="flex-grow flex justify-center space-x-8">
            <Link href="/projects" className="hover:text-yellow-300">Projects</Link>
            <Link href="/experiences" className="hover:text-yellow-300">Experiences</Link>
            <Link href="/thoughts" className="hover:text-yellow-300">Thoughts</Link>
            <Link href="/listening" className="hover:text-yellow-300">What Am I Listening To?</Link>
          </div>

          {/* Current Date and Time on the right */}
          <div className="text-right">
            <p className="text-sm">{currentDateTime}</p>
          </div>
        </nav>
      </header>

      {/* Main content taking up available space */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="flex flex-col sm:flex-row items-center max-w-3xl w-full">
          {/* Name, Description, and Social Media Logos */}
          <div className="flex flex-col items-center sm:items-start">
            {/* Dynamic font size for name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl roboto-mono-bold text-gray-900 text-center sm:text-left">
              Shivansh Soni
            </h1>
            
            {/* Dynamic font size for description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-2 text-center sm:text-left roboto-mono-regular">
              Aspiring Software Engineer and Tech Enthusiast
            </p>

            {/* Social Media Logos */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/shivanshsonii/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logos/linkedin.svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                />
              </a>
              <a
                href="https://github.com/shivanished"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logos/github.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                />
              </a>
              <a
                href="https://www.instagram.com/_shivanshsoni_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logos/instagram.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - No scroll, pinned to the bottom */}
      <footer className="text-center py-4">
        <p className="text-gray-500">© 2024 Shivansh Soni. All rights reserved.</p>
      </footer>
    </div>
  );
}
