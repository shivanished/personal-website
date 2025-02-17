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

      {/* Main content centered both vertically and horizontally */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl text-center">
          {/* Centered Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl roboto-mono-bold text-gray-900">
            Shivansh Soni
          </h1>
          
          {/* Centered description */}
          <p className="text-lg sm:text-xl md:text-xl text-gray-600 mt-4 roboto-mono-regular">
            Hey! I am a Student/Engineer/<span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>Cool-Guy</span> going through life, exploring new things, and finding new interests to help me bring my <span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>creative</span> ideas to life. Right now I&apos;m pretty into <span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>Digital Devices</span>, <span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>AI</span>, and <span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>Fashion</span>. I always aspire to show <span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>impact</span>, integrity, and kindness, and I&apos;m often looking to solve a problem that helps people.
          </p>

          {/* Centered Social Media Logos */}
          <div className="flex space-x-4 mt-6">
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
      </main>

      {/* Footer */}
      <Footer /> {/* Use the Footer component */}
    </div>
  );
}