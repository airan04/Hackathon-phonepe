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
            to="/feedback"
            className="text-white font-semibold hover:text-blue-400 transition-colors"
          >
            Feedback
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
            to="/questionall"
            className="text-white font-semibold hover:text-blue-400 transition-colors"
          >
            Questions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
