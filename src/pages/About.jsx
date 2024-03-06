import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './b1.png';
import image2 from './b2.jpg';
import image3 from './b3.jpg';
import './about.css';
function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 py-4">
        <h1 className="text-white text-2xl font-semibold text-center">About Us</h1>
      </header>
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Learn More About Blockchain</h2>
          <p className="text-lg text-gray-700">
            Blockchain is revolutionizing various industries. Explore more about its potential and applications with us.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <img src={image1} alt="Image 1" className="rounded-lg image-animation" height={200} width={200}/>
            <img src={image2} alt="Image 2" className="rounded-lg image-animation" height={200} width={200}/>
            <img src={image3} alt="Image 3" className="rounded-lg image-animation" height={200} width={200}/>
          </div>
        </div>
      </main>
      <footer className="bg-blue-600 py-4 animate-bounce">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-white text-center">&copy; 2024 Our Website. All rights reserved.</p>
          <p className="text-white text-center">
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;
