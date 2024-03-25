import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 py-4">
        <h1 className="text-white text-2xl font-semibold text-center">Contact Us</h1>
      </header>
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="max-w-md mx-auto px-4 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input-field"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input-field"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="input-field"></textarea>
            </div>
            <div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
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

export default Contact;
