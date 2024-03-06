import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  });

  const { email, name, password, confirmPassword } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      // Handle registration logic here
      console.log(formData);
      // Reset form
      setFormData({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 py-4">
        <h1 className="text-white text-2xl font-semibold text-center">Register</h1>
      </header>
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="max-w-md mx-auto px-4 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>
          <div className="text-sm text-center mt-4">
            Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">Login here</Link>
          </div>
        </div>
      </main>
      <footer className="bg-blue-600 py-4">
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

export default Register;
