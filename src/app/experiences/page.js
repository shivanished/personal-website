"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Experiences() {
  const experiences = [
    {
      company: "Happyrobot (YC S23), San Francisco, CA",
      role: "Software Engineer",
      dates: "May 2024 – Present",
      description: [
        "Trained & fine-tuned custom Large Language Models (LLMs) to handle substantial over-the-phone logistics/freight use cases for freight brokers & carriers",
        "Developed and integrated a LLM evaluation pipeline using Langsmith and custom benchmarks adapted from SoTA research",
        "Created & deployed custom proxy servers to interface with new users’ databases and legacy codebases"
      ],
    },
    {
      company: "Docker, Berkeley, CA",
      role: "Technical Consultant",
      dates: "March 2024 – May 2024",
      description: [
        "Ideated and co-developed an AI-powered MERN Stack web app to showcase Docker’s ability/ease-of-use in enabling a microservices architecture (especially for implementing AI)",
        "Developed REST APIs for the backend (Node/Express) & AI models (TensorFlow/Flask) microservices; Hosted on Google Cloud Run",
        "Documented the developer journey through text documentation and short-form vertical video content (250k+ impacts)"
      ],
    },
    {
      company: "Homeland Justice Systems, Riverside, CA",
      role: "Front-End Software Engineer Intern",
      dates: "June 2022 – August 2022",
      description: [
        "Co-developed dynamic web applications using HTML, CSS, JavaScript, and React.js to replace old native apps.",
        "Re-designed front-end elements for improved UI/UX, leading to a ~50% increase in customer satisfaction.",
        "Integrated client databases into the new tools."
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-lightGreen">
      <Navbar />

      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Experiences</h1>
        <p className="text-lg text-gray-600 mb-4">
          Below are some of my professional experiences:
        </p>

        {/* Experience Rows */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceRow key={index} experience={experience} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ExperienceRow({ experience }) {
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
        {/* Left side: Company name and role */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-xl font-semibold text-gray-900 roboto-mono-bold">
            {experience.company}
          </h2>
          <span className="text-gray-600 roboto-mono-regular">
            {experience.role} ({experience.dates})
          </span>
        </div>

        {/* Right side: Dropdown button */}
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

      {/* Expanded description with bullet points */}
      {isExpanded && (
        <div className="px-6 py-4 bg-lightGreen">
          <ul className="list-disc pl-5 text-gray-700 roboto-mono-regular space-y-2">
            {experience.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}