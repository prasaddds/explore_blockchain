import React from 'react';
import image1 from './b1.png';
import image2 from './b2.jpg';
import image3 from './b3.jpg';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 py-4">
        <h1 className="text-white text-2xl font-semibold text-center">Welcome to My Website</h1>
      </header>
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">A website for learning blockchain</h2>
          <p className="text-lg text-gray-700">
            Basics of block chain
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <img src={image1} alt="Image 1" className="rounded-lg" height={200} width={200}/>
            <img src={image2} alt="Image 2" className="rounded-lg" height={200} width={200}/>
            <img src={image3} alt="Image 3" className="rounded-lg" height={200} width={200}/>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-white text-center">&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
