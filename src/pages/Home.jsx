import React from 'react';
import { Link } from 'react-router-dom';
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
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Learn Blockchain Basics</h2>
          <p className="text-lg text-gray-700">
            Blockchain technology is revolutionizing various industries. Get started with the fundamentals of blockchain here.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <img src={image1} alt="Image 1" className="rounded-lg" height={200} width={200}/>
            <img src={image2} alt="Image 2" className="rounded-lg" height={200} width={200}/>
            <img src={image3} alt="Image 3" className="rounded-lg" height={200} width={200}/>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">What is Blockchain?</h3>
            <p className="text-gray-700">
              Blockchain is a decentralized and distributed ledger technology that records transactions across a network of computers. It ensures transparency, security, and immutability of data.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Concepts</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Decentralization</li>
              <li>Consensus Mechanisms</li>
              <li>Immutable Ledger</li>
              <li>Smart Contracts</li>
              <li>Cryptographic Hashing</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="bg-blue-600 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white mb-4">Stay updated with our latest news and events.</p>
          <form className="mb-4">
            <input type="email" placeholder="Your Email" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
            <button type="submit" className="bg-white text-blue-600 px-4 py-2 rounded-md ml-2 hover:bg-blue-600 hover:text-white transition duration-300">Subscribe</button>
          </form>
          <div className="flex justify-center flex-wrap mb-4">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
              <h3 className="text-white text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-gray-200">
                <li><Link to="/services" className="hover:text-gray-100 transition duration-300">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-gray-100 transition duration-300">Portfolio</Link></li>
                <li><Link to="/blog" className="hover:text-gray-100 transition duration-300">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-gray-100 transition duration-300">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
              <h3 className="text-white text-lg font-semibold mb-2">About Us</h3>
              <p className="text-gray-200">Learn more about our company and our mission.</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
              <h3 className="text-white text-lg font-semibold mb-2">Connect with Us</h3>
              <ul className="text-gray-200">
                <li>Email: info@example.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 123 Street, City, Country</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
              <h3 className="text-white text-lg font-semibold mb-2">Featured Services</h3>
              <ul className="text-gray-200">
                <li>Blockchain Consulting</li>
                <li>Smart Contract Development</li>
                <li>Decentralized Applications (DApps)</li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-500 my-8"/>
          <p className="text-white">&copy; 2024 Our Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
