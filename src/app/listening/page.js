"use client"; // Mark this component as a client component if needed for interaction

import Navbar from '../../components/Navbar';  // Import the Navbar component
import Footer from '../../components/Footer';  // Optional: Import Footer if needed

export default function Listening() {
  return (
    <div className="flex flex-col min-h-screen bg-lightGreen">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">What Am I Listening To?</h1>
        <p className="text-lg text-gray-600 mb-4">
          Below are some of the artists and albums I&apos;m currently listening to:
        </p>

        {/* Add your favorite music here */}
        <div className="space-y-6">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Artist 1</h2>
            <p className="text-gray-700">
              Description of what you like about the artist or album, and any favorite songs.
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900">Artist 2</h2>
            <p className="text-gray-700">
              Description of what you like about the artist or album, and any favorite songs.
            </p>
          </div>
        </div>
      </main>

      {/* Optional: Include Footer */}
      <Footer />
    </div>
  );
}
