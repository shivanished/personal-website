"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Experiences() {
  return (
    <div className="flex flex-col min-h-screen bg-lightGreen">
      <Navbar />

      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Experiences</h1>
        <p className="text-lg text-gray-600 mb-4">
          Below are some of my professional experiences:
        </p>

        <div className="space-y-6">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">
              Happyrobot (YC S23), San Francisco, CA
            </h2>
            <p className="text-gray-700">
              <strong>Software Engineer</strong> (May 2024 – Present)<br />
              Happyrobot is a Series-A startup that creates conversational voice AI solutions for the logistics/freight industry. Developed & fine-tuned custom Large Language Models (LLMs) for freight/logistics use cases, improving model performance by 30-60%. Designed and integrated an LLM evaluation pipeline and deployed custom proxy servers.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">
              Docker, Berkeley, CA
            </h2>
            <p className="text-gray-700">
              <strong>Technical Consultant</strong> (March 2024 – May 2024)<br />
              Led the development of an AI-powered MERN Stack web app to showcase Docker’s microservices architecture. Developed REST APIs for the backend and AI models using TensorFlow, hosted on Google Cloud Run. Documented the project with text and video content, achieving 250k+ views.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">
              Homeland Justice Systems, Riverside, CA
            </h2>
            <p className="text-gray-700">
              <strong>Front-End Software Engineer Intern</strong> (June 2022 – August 2022)<br />
              Co-developed dynamic web applications using HTML, CSS, JavaScript, and React.js to replace old native apps. Re-designed front-end elements for improved UI/UX, leading to a ~50% increase in customer satisfaction. Integrated client databases into the new tools.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
