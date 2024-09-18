"use client"; // Mark this component as a client component if needed for interaction

import Navbar from '../../components/Navbar';  // Import the Navbar component
import Footer from '../../components/Footer';  // Optional: Import Footer if you want to include it

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-lightGreen">
      {/* Navbar */}
      <Navbar />  {/* Include the Navbar component */}

      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>
        <p className="text-lg text-gray-600 mb-4">
          Below are some of the projects I've worked on:
        </p>

        {/* Add a few example projects here */}
        <div className="space-y-6">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 2</h2>
            <p className="text-gray-700">
              Description of project 2. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Project 1</h2>
            <p className="text-gray-700">
              Description of project 1. You can briefly describe what this project
              is about, the technologies used, and its impact.
            </p>
          </div>

          {/* Add more projects as needed */}
        </div>
      </main>

      {/* Optional: Include Footer */}
      <Footer />
    </div>
  );
}
