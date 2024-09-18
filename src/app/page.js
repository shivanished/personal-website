"use client";

import Head from 'next/head';
import Navbar from '../components/Navbar';  // Correct path for Navbar component
import Footer from '../components/Footer';  // Correct path for Footer component
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-lightGreen">
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
      <Navbar /> {/* Use the Navbar component */}

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
            <p className="text-lg sm:text-xl md:text-xl text-gray-600 mt-2 text-center sm:text-left roboto-mono-regular">
              Student/Engineer/<span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>Cool-Guy</span> passionate about full-stack dev and AI because they let me bring <span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>creative</span> ideas to life. My guiding principles are <span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>impact</span>, integrity, and kindness, and I'm always looking to solve a problem that helps others.
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

      {/* Footer */}
      <Footer /> {/* Use the Footer component */}
    </div>
  );
}
