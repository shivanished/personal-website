"use client"; // Mark this component as a client component if needed for interaction

import Navbar from '../../components/Navbar';  // Import the Navbar component
import Footer from '../../components/Footer';  // Optional: Import Footer if needed

export default function Experiences() {
  return (
    <div className="flex flex-col min-h-screen bg-lightGreen">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Experiences</h1>
        <p className="text-lg text-gray-600 mb-4">
          Below are some of my professional experiences:
        </p>

        {/* Add your experiences here */}
        <div className="space-y-6">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Experience 1</h2>
            <p className="text-gray-700">
              Description of experience 1. Briefly describe the role, responsibilities, and accomplishments.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Experience 2</h2>
            <p className="text-gray-700">
              Description of experience 2. Briefly describe the role, responsibilities, and accomplishments.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Experience 2</h2>
            <p className="text-gray-700">
              Description of experience 2. Briefly describe the role, responsibilities, and accomplishments.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Experience 2</h2>
            <p className="text-gray-700">
              Description of experience 2. Briefly describe the role, responsibilities, and accomplishments.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Experience 2</h2>
            <p className="text-gray-700">
              Description of experience 2. Briefly describe the role, responsibilities, and accomplishments.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Experience 2</h2>
            <p className="text-gray-700">
              Description of experience 2. Briefly describe the role, responsibilities, and accomplishments.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Experience 2</h2>
            <p className="text-gray-700">
              Description of experience 2. Briefly describe the role, responsibilities, and accomplishments.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Experience 2</h2>
            <p className="text-gray-700">
              Description of experience 2. Briefly describe the role, responsibilities, and accomplishments.
            </p>
          </div>
        </div>
      </main>

      {/* Optional: Include Footer */}
      <Footer />
    </div>
  );
}
