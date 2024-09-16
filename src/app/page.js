import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-900">Shivansh Soni</h1>
        <p className="text-gray-600 mt-4">Aspiring Software Engineer and Tech Enthusiast</p>
      </header>

      <main className="flex flex-col items-center mt-10">
        <Image
          src="/images/profile.jpg"
          alt="Shivansh Soni"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="mt-6">
          <p className="text-xl text-gray-700">
            Welcome to my personal website! I'm Shivansh, a passionate developer and student at UC Berkeley.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            Here, you'll find information about my projects, experiences, and interests.
          </p>
        </div>
      </main>
    </div>
  );
}
