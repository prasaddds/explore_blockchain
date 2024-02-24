import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Register';

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">              
            <Link to="/" className="text-white font-bold text-xl">My App</Link>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                </li>
                <li>
                  <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
