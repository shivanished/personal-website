"use client";

import { useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function Projects() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollContainerRef.current) {
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-lightGreen">
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <div className="h-full flex flex-col p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>
          <p className="text-lg text-gray-600 mb-4">
            Below are some of the projects I've worked on:
          </p>

          <div
            ref={scrollContainerRef}
            className="flex-grow flex space-x-6 overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Project 1: FormPix */}
            <div className="flex-shrink-0 w-80 bg-white shadow-lg rounded-lg flex flex-col relative p-6"> {/* Increased padding */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">FormPix</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                Developed a Chrome extension that automates filling online legal forms by extracting information from images of documents. Utilized image processing algorithms (OCR) to accurately parse and populate form fields. Used by two local law firms.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://github.com/shivanished/formpix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logos/github.svg"
                    alt="GitHub"
                    width={30}
                    height={30}
                    className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  />
                </a>
              </div>
            </div>

            {/* Project 2: High-Frequency Tactile Transducer */}
            <div className="flex-shrink-0 w-80 bg-white shadow-lg rounded-lg flex flex-col relative p-6"> {/* Increased padding */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">High-Frequency Tactile Transducer</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                Designed and prototyped a device that translates audio signals into tactile sensations for audibly impaired individuals, creating a more complete musical experience.
              </p>
              <div className="flex justify-center space-x-6"> {/* Increased space between buttons */}
                <a
                  href="https://github.com/shivanished/hf-tactile-transducer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logos/github.svg"
                    alt="GitHub"
                    width={30}
                    height={30}
                    className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  />
                </a>
                <a
                  href="/logs/hf-tactile-transducer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logos/notes.webp"
                    alt="Logs"
                    width={30}
                    height={30}
                    className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  />
                </a>
              </div>
            </div>

            {/* Project 3: 2write.app */}
            <div className="flex-shrink-0 w-80 bg-white shadow-lg rounded-lg flex flex-col relative p-6"> {/* Increased padding */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">2write.app</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                Co-created a web-app writing software that uses AI to supplement user-inputted text for essay writing, incorporating OAuth using Firebase for a streamlined sign-up/login process.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://github.com/shivanished/2write"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logos/github.svg"
                    alt="GitHub"
                    width={30}
                    height={30}
                    className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  />
                </a>
              </div>
            </div>

            {/* Project 4: FoodShelf */}
            <div className="flex-shrink-0 w-80 bg-white shadow-lg rounded-lg flex flex-col relative p-6"> {/* Increased padding */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">FoodShelf</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                Designed and developed a native iOS app using SwiftUI and Apple's CoreML to classify leftover foods and determine how long they can be stored or composted.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://github.com/shivanished/foodshelf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logos/github.svg"
                    alt="GitHub"
                    width={30}
                    height={30}
                    className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}