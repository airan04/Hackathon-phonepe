import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-violet-800 p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link
            to="/"
            className="text-white font-semibold hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/form"
            className="text-white font-semibold hover:text-blue-400 transition-colors"
          >
            Form
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white font-semibold hover:text-blue-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white font-semibold hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
