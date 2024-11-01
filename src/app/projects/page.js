"use client";

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "FormPix",
      year: 2024,
      description: "A Chrome extension that automates filling online legal forms (USCIS) by extracting information from images of documents. Utilized image processing algorithms (OCR) to accurately parse images for data and classification to populate form fields. Used by two law firms.",
      githubLink: "https://github.com/shivanished/form-filler"
    },
    {
      title: "Docker Contract - Berkeley Nutritional Meal Generator",
      year: 2024,
      description: "An AI-powered MERN Stack web app that uses two in-house trained RNNs to create a meal plan for a Berkeley Student based on the day's dining hall menu and dietary preferences (i.e. vegetarian, bulking, paleo, etc.). Goal was to showcase Docker's ability/ease-of-use in enabling a microservices architecture, especially for implementing AI whilst penetrating/growing the use of Docker in the college/high-school developer demographic.",
      githubLink: "https://github.com/shivanished/docker-met-API",
    },
    {
      title: "High-Frequency Tactile Transducer",
      year: 2024,
      description: "A device that translates audio signals (especially high-frequency audio) into tactile sensations for audibly impaired individuals, creating a more complete musical experience. The mission is to enable individuals to experience, not only the bass in music, but treble as well.",
      githubLink: "https://github.com/shivanished/hf-tactile-transducer",
      // logLink: "/logs/hf-tactile-transducer"
    },
    {
      title: "Survive! - The Game",
      year: 2024,
      description: "A Java game. Your plane crash landed. You're stuck on the island Fugaji. You're cold, alone, and hungry. Atleast there's fruit around. Eat them to survive!",
      githubLink: "https://github.com/Berkeley-CS61B-Student/sp24-proj3-g607",
    },
    {
      title: "S1XT33N - Voice Controlled Car",
      year: 2024,
      description: "A robot car built with breadboards, wires, and wheels that listens to voice commands then drives on that command's pre-determined path. Employed Digital-to-Analog and Analog-to-Digital Converters, motion sensors, band-pass filter circuits, System ID, Principal Compenent Analysis, and Singular Value Decomposition to build, test, and tune the car.",
    },
    {
      title: "Blue Origin - Blue Alchemist Financial Strategy ",
      year: 2023,
      description: "Conducted market and industry research/company SWOT analysis to develop an innovative go-to-market strategy for the rapid commercialization of Blue Origin's in-situ solar panel-producing lunar module Blue Alchemist. Provided multiple opportunities - short-term/long-term solutions; Calculated projected financials (i.e. profit over time, depreciation, etc.) to assess viability and sustainability",
    },
    {
      title: "2write.app",
      year: 2023,
      description:
        'A web-app writing software that uses AI to supplement user-inputted text for essay writing. <a href="https://2write.app" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">2write.app</a> implements AI to support users in writing essays by generating prompts/outlines, completing sentences, and suggesting ideas. This creates an experience that facilitates higher quality writing that\'s undetectable as AI.',
      githubLink: "https://github.com/aidanbunch/2write"
    },
    {
      title: "FoodShelf",
      year: 2022,
      description: "Designed and developed a native iOS app using SwiftUI and Apple's CoreML to classify leftover foods and determine how long they can be stored or composted.",
      githubLink: "https://github.com/shivanished/foodShelf"
    },
    {
      title: "Disease Diagnosing Statistical Classification Algorithm",
      year: 2021,
      description:
        "Developed a Python program that uses statistical classification methods to determine what diseases a person might have based on their symptoms. I prioritized diseases prevalent in less-developed countries (i.e. Malaria, Tuberculosis, etc.) to offer a solution for individuals in medically underserved areas.",
      youtubeLink: "https://www.youtube.com/watch?v=GLnkgeeUpAs"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-lightGreen">
      <Navbar />

      {/* Main content with natural scrolling */}
      <main className="flex-grow">
        <div className="h-full flex flex-col p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>
          <p className="text-lg text-gray-600 mb-4">
            Here are some projects I&apos;ve worked on:
          </p>

          {/* Project rows without overflow */}
          <div>
            {projects.map((project, index) => (
              <ProjectRow key={index} project={project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProjectRow({ project }) {
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
        {/* Left side: Project title and year */}
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-900 roboto-mono-bold">{project.title}</h2>
          <span className="text-gray-600 roboto-mono-regular">({project.year})</span>
        </div>

        {/* Right side: GitHub, YouTube, Logs, Dropdown icons */}
        <div className="flex items-center">
          {/* Logs button (if present) */}
          {project.logLink && (
            <a
              href={project.logLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/logos/notes.webp"
                alt="Logs"
                width={24}
                height={24}
                className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              />
            </a>
          )}

          {/* YouTube button (if present) */}
          {project.youtubeLink && (
            <a
              href={project.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/logos/youtube.svg"
                alt="YouTube"
                width={24}
                height={24}
                className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              />
            </a>
          )}

          {/* GitHub button (if present) */}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/logos/github.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              />
            </a>
          )}

          {/* Dropdown button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
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
          <p
            className="text-gray-700 roboto-mono-regular"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></p>
        </div>
      )}
    </div>
  );
}